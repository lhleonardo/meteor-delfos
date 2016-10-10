Router.route('/', {
	name: 'home',
	controller: 'HomePublicController',
	action: 'home',
	where: 'client'
});
