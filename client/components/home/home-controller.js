HomePublicController = RouteController.extend({
  layoutTemplate: 'PublicLayout',

  home: function () {
    this.render('DelfosIntroducao', {});
  },

  subscriptions: function() {
  },

  waitOn: function () {
  },

  data: function () {
  },

  onRun: function () {
    this.next();
  },
  onRerun: function () {
    this.next();
  },
  onBeforeAction: function () {
    if (Meteor.userId()) {
      this.redirect('dashboard');
    } else {
      this.next();
    }
  },

  action: function () {
    this.render();
  },

  onAfterAction: function () {

  },

  onStop: function () {

  }
});
