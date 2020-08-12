const url="http://localhost/api_irec/";
function fetchallJobs(){
	getJobs();
}
function fetchallViews(){
	a();
}
function fetchallResume(){
	viewResume();
}
function getJobs(){
	$.get(url+"select.php?task=avail_jobs", "JSON")
	.then(function(data){
		var body="";

		console.log(data);
		for(var i=0; i<data.length;i++){
			body+='<div class="row"><div class="col s12"><div class="card z-depth"><div class="card-image">';
			body+='<img src="../'+data[i].img+'" alt="">';
			body+='<a onclick="viewJobs(\''+data[i].job+'\',\''+data[i].job_desc+'\',\''+data[i].available+'\')" class="btn-floating halfway-fab waves-effect waves-light blue" href="#view"><i class="mdi mdi-magnify"></i></a></div><div class="card-content py-4 px-4">';
			body+='<h6 class="my-1 truncate"><b>'+data[i].job+'</b></h6><p>Tap icon for more information.</p>';
			body+='<h6 class="right my-1"> <i class="mdi mdi-account-search red-text"></i>'+data[i].available+'</h6><div class="clearfix"></div>';
			body+='</div></div></div></div>';
		}
		document.getElementById('viewJobs').innerHTML = body;
	});
}

function viewJobs(job,desc,slot){
	localStorage.setItem("job", job);
	localStorage.setItem("desc", desc);
	localStorage.setItem("slot", slot);
	
}
function a(){
	let a = localStorage.getItem("job");
	let b = localStorage.getItem("desc");
	let c = localStorage.getItem("slot");
	$('#title').text(a);
	$('#slot').text(c);
	$('#desc').text(b);
}
function viewResume(){
	let user = localStorage.getItem("user");
	$.getJSON(url+"select.php?task=view_resume",{user:user}, function(data){
		data.map(e=>{
			let fullname = e.firstname+' '+e.middlename+' '+e.lastname;
			$('#fullname').text(fullname);
			$('#work').text(e.work_type);
			$('#objective').text(e.objectives);
			$('#address').text(e.address);
			$('#email').text(e.email);
			$('#cnumber').text(e.cnumber);
			$('#dob').text(e.dob);
			$('#pob').text(e.pob);
			$('#citizenship').text(e.citizenship);
			$('#sex').text(e.sex);
			$('#civilstatus').text(e.civilstatus);
			$('#sec_school').text(e.sec_school);
			$('#sec_year').text(e.sec_year);
			$('#tertiary_school').text(e.tertiary_school);
			$('#tertiary_year').text(e.tertiary_year);
			$('#elem_school').text(e.elem_school);
			$('#elem_year').text(e.elem_year);
			$('#college_course').text(e.college_course);
		});
	});
}

function fetchResume(){
	let user = localStorage.getItem("user");
	$.getJSON(url+"select.php?task=view_resume",{user:user}, function(data){
		localStorage.setItem("resume", JSON.stringify(data));
		data.map(e=>{
			let fullname = e.firstname+' '+e.middlename+' '+e.lastname;
			$('#firstname').val(e.firstname);
			$('#middlename').val(e.middlename);
			$('#lastname').val(e.lastname);
			$('#objective').val(e.objectives);
			$('#address').val(e.address);
			$('#eaddress').val(e.email);
			$('#mobile').val(e.cnumber);
			$('#dob').val(e.dob);
			$('#pob').val(e.pob);
			$('#citizenship').val(e.citizenship);
			$('#sex').val(e.sex);
			$('#civilstatus').val(e.civilstatus);
			$('#sec_school').val(e.sec_school);
			$('#sec_year').val(e.sec_year);
			$('#tertiary_school').val(e.tertiary_school);
			$('#tertiary_year').val(e.tertiary_year);
			$('#elem_school').val(e.elem_school);
			$('#elem_year').val(e.elem_year);
			$('#elem_address').val(e.elem_address);
			$('#college_address').val(e.college_address);
			$('#sec_address').val(e.sec_address);
			$('#college_course').val(e.college_course);
			$('#elem_school').val(e.elem_school);
			$('#elem_address').val(e.elem_address);
			$('#elem_year').val(e.elem_year);
		});
	});
}



function viewApplied(){
	let user = localStorage.getItem("user");
	$.getJSON(url+"select.php?task=applied_jobs",{user:user},function(data){
		let body="";
		data.map(e=>{
			if(e.status == 'Pending'){
				body+=`
				<div class="row">
				<div class="col s12">
				<div class="card z-depth">
				<div class="card-image">
				<img src="../img/sewer.jpg"
				alt="">
				<span class="card-title green-text"><b>Applied</b> <i class="mdi mdi-check"></i></span>
				</div>
				<div class="card-content py-4 px-4">
				<h6 class="mt-1 truncate"><b>${e.work_type}</b></h6>
				<p class="left">Wait for the approval.</p>
				<span class="new badge orange" data-badge-caption="Pending"></span>
				<div class="clearfix"></div>
				</div>
				</div>
				</div>
				</div>
				`;
			}else{
				body+=`
				<div class="row">
				<div class="col s12">
				<div class="card z-depth">
				<div class="card-image">
				<img src="../img/sewer.jpg"
				alt="">
				<span class="card-title green-text"><b>Applied</b> <i class="mdi mdi-check"></i></span></div>
				<div class="card-content py-4 px-4">
				<h6 class="mt-1 truncate"><b>${e.work_type}</b></h6>
				<p class="left">Contact us for your interview.</p>
				<span class="new badge green" data-badge-caption="Accepted"></span>
				<div class="clearfix"></div>
				</div>
				</div>
				</div>
				</div>
				`;
			}
			$('#viewapplied').html(body);
			
		})
	})
}