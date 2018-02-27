Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
	"members",
	"members.insert",
	"members.details",
	"members.edit",
	"events"
];

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
		this.render("loading");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {

	this.route("home", {path: "/", controller: "HomeController"});
	this.route("members", {path: "/members", controller: "MembersController"});
	this.route("members.insert", {path: "/members/insert", controller: "MembersInsertController"});
	this.route("members.details", {path: "/members/details/:memberId", controller: "MembersDetailsController"});
	this.route("members.edit", {path: "/members/edit/:memberId", controller: "MembersEditController"});
	this.route("events", {path: "/events", controller: "EventsController"});
});
