Meteor.methods({
  validaCpf :function(cpf){
     return Pessoas.find({"cpf":cpf}).size() != 0;
  }
});
