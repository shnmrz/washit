$(document).ready(function(){
	$('#up_form').submit(function(e){
		e.preventDefault();
		let resumeData = JSON.parse(localStorage.getItem("resume"))[0];
		let job = localStorage.getItem("job");
		let lastname = resumeData.lastname;
		let middlename = resumeData.middlename;
		let firstname = resumeData.firstname;
		let user = resumeData.user;

		let form_data = new FormData(this);
		form_data.append('task','up_file');
		form_data.append('user',user);
		form_data.append('job',job);
		form_data.append('lastname',lastname);
		form_data.append('middlename',middlename);
		form_data.append('firstname',firstname)

		$.ajax({
			url: url+"insert.php",
			method: 'POST',
			data: form_data,
			contentType: false,
			cache: false,
			processData:false,
			success: function(data){
				if (data) {
					alert('Success!');
				}else{
					alert('Failed!');
				}
			}
		});
	});

});


function editResume(){
	let user = localStorage.getItem("user");
	let lastname = $('#lastname').val();
	let firstname = $('#firstname').val();
	let middlename = $('#middlename').val();
	let objective = $('#objective').val();
	let address = $('#address').val();
	let eaddress = $('#eaddress').val();
	let mobile = $('#mobile').val();
	let dob = $('#dob').val();
	let pob = $('#pob').val();
	let citizenship = $('#citizenship').val();
	let sex = $('#sex').val();
	let civilstatus = $('#civilstatus').val();
	let college_course = $('#college_course').val();
	let tertiary_school = $('#tertiary_school').val();
	let college_address = $('#college_address').val();
	let tertiary_year = $('#tertiary_year').val();
	let sec_school = $('#sec_school').val();
	let sec_address = $('#sec_address').val();
	let sec_year = $('#sec_year').val();
	let elem_school = $('#elem_school').val();
	let elem_address = $('#elem_address').val();
	let elem_year = $('#elem_year').val();
	$.post(url+"update_resume.php",
	{
		user:user,
		lastname:lastname,
		firstname:firstname,
		middlename:middlename,
		objective:objective,
		address:address,
		eaddress:eaddress,
		mobile:mobile,
		dob:dob,
		pob:pob,
		citizenship:citizenship,
		sex:sex,
		civilstatus:civilstatus,
		college_course:college_course,
		tertiary_school:tertiary_school,
		college_address:college_address,
		tertiary_year:tertiary_year,
		sec_school:sec_school,
		sec_address:sec_address,
		sec_year:sec_year,
		elem_school:elem_school,
		elem_address:elem_address,
		elem_year:elem_year
	},
	function(){
		location.assign("index.html#profile")
	});
}


function submitResume(){
	let a = confirm("Are you sure?");
	let resumeData = JSON.parse(localStorage.getItem("resume"))[0];
	let job = localStorage.getItem("job");
	let lastname = resumeData.lastname;
	let middlename = resumeData.middlename;
	let firstname = resumeData.firstname;
	let user = resumeData.user;

	if(lastname === '' && firstname === '' && middlename === ''){
		alert("Please fill up the resume form!");
	}else{
		if(a === false){
			return false;
		}else{
			$.post(url+"submit-resume.php", 
			{
				job:job,
				lastname:lastname,
				middlename:middlename,
				firstname:firstname,
				user:user
			},
			function(){

				alert("SUBMITTED");
			});

			$.post(url+"insert.php", 
			{
				task:'status_update'
			},
			function(){
				console.log("SUBMITTED");
			});
		}
	}

}

//open a modal
function modal_(){
	$('#modal1').modal('open');
}

function up_(){
	$('#up_resume').click();
	$('#up_submit').removeClass('hide');
}

function up_hide(){
	$('#up_submit').addClass('hide');
	$('#up_resume').val('');
}

function sub(){
	$('#up_sub').click();
}