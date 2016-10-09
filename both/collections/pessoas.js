Pessoas = new Mongo.Collection("pessoas");

SchemasPessoas = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome Completo da pessoa",
		max: 255,
		optional: false
	},
	apelido: {
		type: String,
		label: "Apelido (Opcional)",
		optional: true,
		max: 100
	},
	cpf: {
		type: String,
		label: "CPF",
		unique: true,
		max: 14,
		regEx: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
		optional: false,
		custom: function (){
			if (Meteor.isClient && (Meteor.isSet || Meteor.isUpdate)) {
				Meteor.call("validaCpf", this.value, function(error, result){
					if(error){
						console.log("error", error);
					}
					if(!result){
						 Pessoas.simpleSchema().namedContext("InsertPessoa").addInvalidKeys([{name: "cpf", type: "notUnique"}]);
					}
				});
			}
		},
		autoform: {
			type: 'masked-input',
      mask: '000.000.000-00',
      maskOptions: {
      	placeholder: '___.___.___-__'
      }
    }
	},
	rg: {
		type: String,
		label: "RG",
		optional: false
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		unique: true,
		label: "E-mail para contato (Obrigatório)",
		optional: false
	},
	dataNascimento: {
		type: "datetime-local",
		label: "Data de Nascimento (DD/MM/YYYY)",
		optional: false
	},
	tipoPessoa: {
		type: String,
		optional: false,
		label: "Tipo de Pessoa",
		allowedValues: ['Pesquisador', 'Especialista'],
		autoform: {
			firstOption: false,
			options: [
        {label: 'Pesquisador', value: 'Pesquisador'},
				{label: 'Especialista', value: 'Especialista'}
    ]
		}
	},
	descricao: {
		type: String,
		optional: true,
		label: "Descrição da pessoa",
		autoform: {
			rows: 8
		}
	}
});

Pessoas.attachSchema(SchemasPessoas);
