var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/', function(request, response){
		response.render('registration/registration_index');
});

router.post('/', function(request, response){
	
	var user = {
		firstName: request.body.txtFirstname, 
		lastName: request.body.txtLastname,
		username: request.body.txtusername,
		password: request.body.txtPass,
		job: request.body.job,
		conPassword: request.body.txtConfirmPass,
		email: request.body.txtEmail,
		phone: request.body.txtPhone,
		address: request.body.txtAddress
	};
	
	if(user.password==user.conPassword){
		var temp = {
			name : request.body.txtusername
		}
		userModel.getByName(temp, function(result){
			if(result.length == 0){
				userModel.insert(user, function(status){
					if(status){
						response.redirect('/home');
					}
				});
				//console.log(user);
			}
			else{
				response.send('User Already Exists!');
			}
		});
		
	}
	else{
		response.send('Password Does not Match!');		
	}

});

module.exports = router;
