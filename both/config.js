AdminConfig = {
	name: "Delfos",
	skin: "purple-light",
	collections: {
		Pessoas: {
			templates: {
				new: {
					name: 'InsertPessoa'
				}
			},
			icon: "smile-o",
			label: "Pesquisadores/Especialistas",
			color: "red",
			tableColumns: [
				{label: "Nome", name: "nome"},
				{label: "CPF", name: "cpf"},
				{label: "E-mail", name: "email"},
				{label: "Tipo de Pessoa", name: "tipoPessoa"}
			],
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
