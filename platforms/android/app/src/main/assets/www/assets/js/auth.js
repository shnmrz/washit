$( ()=> {

	$('#id_form').submit( function(){

		var formdata = $(this).serialize();

		console.log(formdata);

		$.post('http://127.0.0.1/sp_api/auth.php', formdata)
		.done( (data)=>{

			if (data.step == 'next') {
				$(this).addClass('hide');
				$('#pin_form').fadeIn();

				$('#pin_form').submit( function(){
					var stud_id = data.id;
					var formdata = $(this).serialize() + `&stud_id=${stud_id}`;


					$.post('http://localhost/sp_api/auth.php', formdata)
					.done( (data)=> {

						if (data.step == 'invalid') {
							swal({
								title: "Invalid Credential!",
								text: "Student pin is incorrect",
								icon: "error",
								buttons: false,
								timer: 2000
							})
							.then( function(){
								$("#pin_form")[0].reset()
							});
						}

						else {

							swal({
								title: "Login Success",
								text: "Welcome to Student Portal",
								icon: "success",
								buttons: false,
								timer: 2000
							})
							.then( function(){

								sessionStorage.setItem('auth', btoa(JSON.stringify(data)));
								window.location.href =' portal/index.html';
								
							});

							

						}

					})

					
					return false;
				});

			}

			else if (data.step == 'pin') {
				$(this).addClass('hide');
				$('#new_pin_form').fadeIn();
				

				$('#new_pin_form').submit( function(){
					var stud_id = data.id;
					var formdata = $(this).serialize() + `&stud_id=${stud_id}`;

					$.post('http://localhost/sp_api/auth.php', formdata)
					.done( (data)=>{

						swal({
							title: "Registration Success",
							text: "Logging you in..",
							icon: "success",
							buttons: false,
							timer: 2000
						})
						.then( function(){

							sessionStorage.setItem('auth', btoa(JSON.stringify(data)));
							window.location.href =' portal/index.html';
							
						});
					})

					
					return false;
				});
			} 

			else {
				swal({
					title: "Invalid Credential!",
					text: "Student Id not found",
					icon: "error",
					buttons: false,
					timer: 2000
				})
				.then( function(){
					$('#id_form')[0].reset()
				});
			}
		})

		return false;
	});

});