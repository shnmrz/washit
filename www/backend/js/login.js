var url="http://localhost/user/www/backend/php";
$(document).ready(function(){
	// $("form")[0].reset();
	$('#loginForm').click(function(e){
		var cu_uname = $('#username').val();
		var cu_pass = $('#password').val();
		e.preventDefault();
		$.ajax({
			url:url+"/login.php",
			method:"POST",
			data:{cu_uname:cu_uname, cu_pass:cu_pass},
			dataType:"JSON",
			success:function(account){
				if(account.response != null){
					alert("No Account Registered!");
					$('#username').val('');
					$('#password').val('');
				}else{
					localStorage.setItem("user_data", JSON.stringify(account));
					window.location.assign("pages/index.html");
					//alert("Login!");
					
				}
			}
		});
	});
});
