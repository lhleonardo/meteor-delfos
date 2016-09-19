Router.map(function(){
	this.route("home", {
		path: '/'
	});
	this.route('unauthorized', {
		name: 'unauthorized',
		path: AdminDashboard.path('unauthorized'),
		controller: AdminController,
		onAfterAction: function () {
			Session.set('admin_title', "Acesso Restrito");
		}
	});
});
