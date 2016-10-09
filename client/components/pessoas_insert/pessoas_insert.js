
Template.InsertPessoa.helpers({
  create: function(){

  },
  rendered: function(){
    AutoForm.addHooks('insertPessoaForm', {
      onSuccess: function(formType, result) {
        
      }
    });
  },
  destroyed: function(){

  },
});

Template.InsertPessoa.events({

});
