Pessoas = new Mongo.Collection("pessoas");

SchemasPessoas = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome Completo",
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
		max: 13, 
		optional: false
		//regex: // insert a regex here
	}, 
	rg: {
		type: String, 
		label: "RG",
		optional: false
	}, 
	email: {
		type: String, 
		regEx: SimpleSchema.RegEx.Email,
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
		allowedValues: ['Pesquisador', 'Especialista']
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