Pesquisas = new Mongo.Collection("pesquisas");

SchemasPesquisas = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome da Pesquisa",
		optional: false
	},
	dataInicio: {
		type: "datetime-local",
		optional: true,
		label: "Data de Início (valor padrão: data atual)"
	},
	dataVencimento: {
		type: "datetime-local",
		optional: false,
		label: "Data de vencimento"
	},
	descricao: {
		type: String,
		max: 255,
		optional: true,
		label: "Descrição da pesquisa",
		autoform: {
			rows: 10
		}
	},
	pesquisadores: {
		type: [String],
		label: "Pesquisadores responsáveis pela pesquisa",
		autoform: {
			type: "select2",
			afFieldInput: {
        multiple: true
      },
			options: function () {
				let valores = [];
				let pessoas = Pessoas.find({tipoPessoa: "Pesquisador"});
				pessoas.forEach((pessoa)=> {
					valores.push({label: pessoa.nome, value: pessoa._id});
				});
				return valores;
      }
		}
	},
	especialistas: {
		type: [String],
		label: "Especialistas que participarão da pesquisa",
		autoform: {
			type: "select2",
			afFieldInput: {
        multiple: true
      },
			options: function () {
				let valores = [];
				let pessoas = Pessoas.find({});
				pessoas.forEach((pessoa)=> {
					valores.push({label: pessoa.nome, value: pessoa._id});
				});
				return valores;
      }
		}
	},
	// criação dos questionários...
	questionarios: {
		type: Array,
		optional: true,
	},
	"questionarios.$": {
		type: Object
	},
	"questionarios.$.nome": {
		type: String,
		label: "Nome do questionário",
		max: 200,
		optional: false,
	},
	"questionarios.$.descricao": {
		type: String,
		label: "Descrição do questionário",
		optional: true
	},
	"questionarios.$.dataVencimento": {
		type: "datetime-local",
		optional: true,
		autoValue: function () {
			if (this.isInsert &&
				 !this.field("questionarios.$.dataVencimento").isSet) {
					 return this.field("dataVencimento").value;
				 }
		}
	},
	"questionarios.$._id": {
		type: String,
		optional: true,
		autoValue: function() {
			if (this.isInsert) {
				return Random.id();
			}
		},
		autoform: {
			afFieldInput: {
	      type: "hidden"
	    },
			afFormGroup: {
				label: false
			}
		}
	},
	"questionarios.$.perguntas": {
		type: Array,
		optional: false,
	},
	"questionarios.$.perguntas.$.tipo": {
		type: String,
		allowedValues: ['TEXTO', 'PARAGRAFO', 'MULTIPLA_ESCOLHA', 'INTERVALO'],
		autoform: {
			options: [
				{label: "Texto curto", value: "TEXTO"},
				{label: "Parágrafo"  , value: "PARAGRAFO"},
				{label: "Multipla Escolha", value: "MULTIPLA_ESCOLHA"},
				{label: "Intervalo de valores", value: "INTERVALO"}
			]
		}
	},
  "questionarios.$.perguntas.$.multiplaEscolha": {
		type: Object
	},
	"questionarios.$.perguntas.$.multiplaEscolha.nome" {
		type: String,
		label: "Nome da pergunta",
		optional: false
	},
	"questionarios.$.perguntas.$.multiplaEscolha.descricao": {
		type: String,
		label: "Descrição para a pergunta",
		optional: true
	},
	"questionarios.$.perguntas.$.multiplaEscolha.itens": {
		// continuar a implementaçao dos itens de questionário
	}
});

Pesquisas.attachSchema(SchemasPesquisas);
