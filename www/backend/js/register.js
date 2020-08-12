var RegUrl = "http://localhost/user/www/backend/php"
function Register(){
	var cu_email = $('#email').val();
	var cu_uname = $('#username').val();
	var cu_pass = $('#password').val();

	$.ajax({
		url:RegUrl+"/register.php",
		method:"POST",
		dataType:"JSON",
		data:{
			cu_email:cu_email,
			cu_uname:cu_uname,
			cu_pass:cu_pass
		},
		success:function(data){
			if(data.response == 'UsernameError'){
				Swal.fire({
					icon: 'warning',
					title: 'Invalid',
					text: 'Username already exist',
				})
				$('#username').val('');
			}else if(data.response =='EmailError'){
				Swal.fire({
					icon: 'warning',
					title: 'Invalid',
					text: 'Email already exist',
				})
				$('#email').val('');
			}else{
				//localStorage.setItem("user_data", JSON.stringify(account));
				//window.location.assign("Dashboard.html");
				Swal.fire({
					icon: 'success',
					title: 'Good Job!',
					text: 'You have successfully created your account.',
				})
				$('#email').val('');
				$('#username').val('');
				$('#password').val('');
			}
		}

	});
}
