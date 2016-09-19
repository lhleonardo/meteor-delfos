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
	}
});

Pesquisas.attachSchema(SchemasPesquisas);