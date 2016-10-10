
Template.login.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.login.events({
  "submit #loginForm": function(event, template){

   $("#alerta-erro").attr("hidden", "true");
   var email = event.target.email.value;
   var senha = event.target.senha.value;

   Meteor.loginWithPassword(email, senha, function(err) {
     if (err) {
         $("#alerta-erro").removeAttr('hidden');
         $("#mensagem-alerta").text(err.message);
         console.log(err.message);
     } else {
       Router.go('home');
     }
   });

   return false;

  }
});
