import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

Meteor.startup(() => {
    // caso seja a primeira vez que a aplicação esteja executando, o usuário padrão é criado.
    // Esse usuário deverá ser utilizado apenas para criar um novo administrador,
    // fazendo o gerenciamento de forma mais segura. 
    // AVISO: Não é recomendado que esse usuário permaneça ativo no sistema após a sua primeira execução.
    if (Meteor.users.find().count() == 0) {
        console.log("Nenhum usuário encontrado\nCriando o usuário padrão");
        console.log("Login: admin@admin.com\nSenha: admin123");
        var userId = Accounts.createUser({username: "admin", email: "admin@admin.com", password: "admin123"});
        Roles.addUsersToRoles(userId, "admin");
        console.log("Usuário adicionado aos administradores.");
    }	
});