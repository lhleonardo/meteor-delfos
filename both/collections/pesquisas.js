Pesquisas = new Mongo.Collection("pesquisas");

SchemasQuestionarios = new SimpleSchema({
	"_id": {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		autoValue: function () {
			if (this.isInsert) {
				return Random.id();
			}
		},
		autoform: {
			afFieldInput: {
				type: "hidden",
				labeled: false
			}
		}
	},
	nome: {
    type: String,
    optional: false
  },
  data: {
    type: Date
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
	questionarios: {
		type: [SchemasQuestionarios],
		optional: true,
		label: "Questionários"
	}

});

Pesquisas.attachSchema(SchemasPesquisas);
