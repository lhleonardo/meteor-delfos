import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

Meteor.startup(() => {
    // caso seja a primeira vez que a aplica��o esteja executando, o usu�rio padr�o � criado.
    // Esse usu�rio dever� ser utilizado apenas para criar um novo administrador,
    // fazendo o gerenciamento de forma mais segura. 
    // AVISO: N�o � recomendado que esse usu�rio permane�a ativo no sistema ap�s a sua primeira execu��o.
    if (Meteor.users.find().count() == 0) {
        console.log("Nenhum usu�rio encontrado\nCriando o usu�rio padr�o");
        console.log("Login: admin@admin.com\nSenha: admin123");
        var userId = Accounts.createUser({username: "admin", email: "admin@admin.com", password: "admin123"});
        Roles.addUsersToRoles(userId, "admin");
        console.log("Usu�rio adicionado aos administradores.");
    }	
});