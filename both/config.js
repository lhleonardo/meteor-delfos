AdminConfig = {
	name: "Delfos",
	skin: "purple-light",
	collections: {
		Pessoas: {
			icon: "smile-o",
			color: "red",
			tableColumns: [
				{label: "Nome", name: "nome"},
				{label: "CPF", name: "cpf"},
				{label: "E-mail", name: "email"},
				{label: "Tipo de Pessoa", name: "tipoPessoa"}
			],
			routes: {
				new: {
					waitOn: function() {
						console.log("Está tentando criar uma nova pessoa");
						Router.go('unauthorized');
						throw new Meteor.Error(401, "Não Autorizado");
					}
				}
			}
		},
		Pesquisas: {
			icon: "book",
			color: "green",
			tableColumns: [
				{label: "Nome da pesquisa", name: "nome"},
				{label: "Data de início", name: "dataInicio"},
				{label: "Vencimento", name: "vencimento"}
			]
		}
	}
}
