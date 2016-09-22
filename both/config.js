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

AutoForm.hooks({
	admin_insert: {
		onSuccess: function () {
			if (this.template.data.collection === Pessoas) {
        console.log('Pessoa adicionada');
      } else if (this.template.data.collection === Pesquisas) {
				console.log('pesquisa adicionada');
			}
		}
	}
});
