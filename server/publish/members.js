Meteor.publish("members", function() {
	return Members.find({}, {sort:{name:1}});
});

Meteor.publish("members_empty", function() {
	return Members.find({_id:null}, {});
});

Meteor.publish("member", function(customerId) {
	return Members.find({_id:customerId}, {});
});

Meteor.publish("members_find_one", function() {
	return Members.find({}, {sort:{name:1}});
});

