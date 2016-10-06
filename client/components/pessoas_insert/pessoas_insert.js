
Template.InsertPessoa.helpers({
  create: function(){

  },
  rendered: function(){
    AutoForm.addHooks('insertPessoaForm', {
      onSuccess: function(formType, result) {
        console.log('formType');
        console.log(formType);
        console.log('result');
        console.log(result);
      }
    });
  },
  destroyed: function(){

  },
});

Template.InsertPessoa.events({

});
