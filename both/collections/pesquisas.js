Pesquisas = new Mongo.Collection("pesquisas");

PerguntasSchema = new SimpleSchema({
	nome: {
		type: String,
		optional: false,
		label: "Título da pergunta"
	},
	descricao: {
		type: String,
		optional: true,
		label: "Detalhes opcionais para pergunta"
	},
	tipo: {
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
	intervalo: {
		type: Object,
	},
	"intervalo.valorInicial": {
		type: Number,
		optional: false,
		label: "Valor inicial do intervalo (padrão: 0)",
		autoValue: function() {
			if (!this.field("intervalo.valorInicial").isSet) {
				return 0;
			}
		}
	},
	"intervalo.valorFinal": {
		type: Number,
		optional: false,
		label: "Valor final do intervalo (padrão: 10)",
		autoValue: function () {
			if (!this.field("intervalo.valorFinal").isSet) {
				return 10;
			}
		}
	},
	"intervalo.incremento": {
		type: Number,
		optional: false,
		label: "Incremento dos valores, adicionado ao valor inicial até chegar ao valor final (padrão: 1)",
		autoValue: function () {
			if (!this.field("intervalo.incremento").isSet) {
				return 1;
			}
		}
	},
	multiplaEscolha: {
		type: Object,
		autoform: {
			afFormGroup: {
				visible: false
			}
		}
	},
	"multiplaEscolha.nome": {
		type: String,
		label: "Nome da pergunta",
		optional: false
	},
	"multiplaEscolha.descricao": {
		type: String,
		label: "Descrição para a pergunta",
		optional: true
	},
	"multiplaEscolha.itens": {
		// continuar a implementaçao dos itens de questionário
		type: Array
	},
	"multiplaEscolha.itens.$": {
		type: Object
	},
	"multiplaEscolha.itens.$.item": {
		type: String,
		optional: false
	},
	"multiplaEscolha.itens.$.valor": {
		type: Number,
		optional: false
	}
});

QuestionarioSchema = new SimpleSchema({
	"_id": {
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
	nome: {
		type: String,
		label: "Nome do questionário",
		max: 200,
		optional: false,
	},
	descricao: {
		type: String,
		label: "Descrição do questionário",
		optional: true
	},
	dataVencimento: {
		type: "datetime-local",
		optional: true,
		autoValue: function () {
			if (this.isInsert &&
				 !this.field("dataVencimento").isSet) {
					 return this.field("dataVencimento").value;
				 }
		}
	},
	perguntas: {
		type: [PerguntasSchema],
		optional: false
	}
});

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
		type: [QuestionarioSchema],
		optional: true,
	},
});

Pesquisas.attachSchema(SchemasPesquisas);
