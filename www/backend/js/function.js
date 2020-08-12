function addaccount(){
	var addaccount = 'addaccount';
	var email = $('#cu_email').val();
	var user = $('#cu_uname').val();
	var pass = $('#cu_pass').val();

	$.ajax({
		url : 'http://localhost/user/www/backend/php/function.php',
		method : 'POST',
		data : {task : addaccount,fname: fname,lname: lname,age: age},
		success : function(data){
			if(data='Success'){
				alert('Successfully Added!');
				displayfetch();
				$('#addaccount');
			}
			else {
				alert("Failed");
			}
		}
	})
}

function del(id){
	var question = confirm("Do you want to delete this?");
	var del = 'delete';
	if(question == true){
			$.ajax({
				url: 'http://localhost/ajax1/php/function.php',
				method: 'POST',
				data: {task: del,id: id},
				dataType: 'JSON',
				success:function(){
					displayfetch();
				}
			})
		}
		else{
			return false;
		}
}

function area(id){
	var area = 'display_area';

	$.ajax({
		url: 'http://localhost/ajax1/php/function.php',
		method: 'POST',
		data: {task: area,id: id},
		dataType: 'JSON',
		success:function(data){
			var area = "";

			data.map((a)=>{
				area += `<h4>Edit Details</h4>
						<div class="row">
							<div class="col s4">
								<input type="text" id="fname_edit" value="${a.first_name}" />
								<label>First Name</label>
							</div>
							<div class="col s4">
								<input type="text" id="lname_edit" value="${a.last_name}" />
								<label>Last Name</label>
							</div>
							<div class="col s4">
								<input type="text" id="age_edit" value="${a.age}" />
								<label>Age</label>
							</div>
						</div>
						<button class="btn waves-effect" onClick="update(${a.id})">Submit</button>`;
			})
			$('#edit_area').html(area);
		}
	})
}

function update(id){
	var upd = 'update';
	var fname = $('#fname_edit').val();
	var lname = $('#lname_edit').val();
	var age = $('#age_edit').val();

	$.ajax({
		url: 'http://localhost/ajax1/php/function.php',
		method: 'POST',
		data: {task : upd,id: id,fname: fname,lname: lname, age:age},
		success: function(){
			displayfetch();
			$('#display_').modal('close');
		}
	})
}
