Template.messages.messages = function(){
	return Messages.find({},{sort:{time:-1}});
}

Template.input.events = {
  

  
  
	'keydown input#message': function(event){
		if (event.which == 13){
			if (Meteor.user()){
				var name = Meteor.user().username;
			}else{
				var name = 'Anonimo';
			}
			var message = $('#message');
			if (message.val() != ''){
				Messages.insert({name:name,
										message:message.val(),
										time:Date.now() });
				message.val('');
			}
		}
		if (event.which == 78) {
       $('#message').val($('#message').val() + "n");
        }

      if (event.which == 32) {
               $('#message').val($('#message').val() + " ");
              
      }
      
      if (event.which == 66) {
               $('#message').val($('#message').val() + "b");
      }        
}
}

Accounts.ui.config({passwordSignupFields:'USERNAME_AND_OPTIONAL_EMAIL'});

