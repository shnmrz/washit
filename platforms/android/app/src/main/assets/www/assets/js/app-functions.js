function change_active(currentStatus) {

	var link = currentStatus.url.split('/')[5];
	var link = link.split('?')[0];

	console.log(link);

	var navigation             = document.querySelector('.icon-bar');
	var navigationLinks        = navigation.querySelectorAll('.navigation__link');
	var navigationLinkIsActive = navigation.querySelector(`[href="${link}"]`);

	Array.prototype.forEach.call(navigationLinks, (navigationLink) => navigationLink.classList.remove('active'));

	navigationLinkIsActive.classList.add('active');

}

function logout() {

	swal({
		title: "Logging Out..",
		text: "Are you sure you want to log out?",
		icon: "warning",
	  	buttons: {
		    cancel: true,
		    catch: {
		      text: "Proceed",
		      value: "logout",
		    },
		  },
	})
	.then((value) => {
	  switch (value) {
	 
	    case "logout":
	    	
	    	swal({
				title: "Success!",
				text: "See you soon",
				icon: "success",
				buttons: false,
				timer: 2000
			})
			.then( function() {
				sessionStorage.removeItem('auth');
				location=' ../index.html';
			});

	    	break;
	 
	    default:
		    swal({
				title: "Logout Canceled",
				text: "Portal closed!",
				icon: "info"
			});
	  }
	});
}

function get_avatar(){
	let avatar = `<p><img class="circle z-depth-5" src="../assets/asset-img/chen.jpg" alt=""></p>`;
	$('.icon-img').hide().html(avatar).fadeIn('fast');
}


function get_information(){

	let getData = JSON.parse(atob(sessionStorage.getItem('auth')));

	var container = '';
	getData.map(data => {

		let course = get_course_acro(data.stud_course);
		let scholarship_type = data.scholarship_type == '' ? 'None' : data.scholarship_type;
		let transferee = data.transferee == '' ? 'Nope' : data.transferee;
		let transferee_level = data.trans_course_level == ''? 'None' : data.trans_course_level;
		let special_award = data.stud_special_award == ''? 'None' : data.stud_special_award;
		let organizations = data.stud_organization == ''? 'None' : data.stud_organization;
		let interests = data.stud_special_interest == ''? 'None' : data.stud_special_interest;
		let talents = data.stud_special_talent == ''? 'None' : data.stud_special_talent;
		let competitions = data.stud_competition == ''? 'None' : data.stud_competition;
		let devices = data.stud_device == ''? 'None' : data.stud_device;

		container += `
				<div class="col s9 l10">
		            <div><a>Student Portal <i class="mdi mdi-chevron-right"></i> Information</a></div>
		            <div class="mt-4" style="display: flex; flex-flow: row; justify-content: start; align-items: center;">
			            <h2 class="grey-text text-darken-3 mb-2 mt-2">${data.stud_fullname}</h2>
			            <a class="btn-small blue-grey darken-2 ml-5" href="settings.html">Edit Profile <i class="mdi mdi-settings right ml-2"></i></a>
		            </div>
		            <div class="row mt-4">
		                <div class="col s12 l6">
		                    <div class="card-panel z-depth">
		                        <p class="grey-text text-darken-1 mt-0"><strong>Contacts</strong></p>
		                        <p><strong>Primary email</strong> ${data.stud_email}</p>
		                        <p><strong>Lives in</strong> ${data.stud_address}</p>
		                    </div>
		                    <div class="card-panel z-depth mt-4">
		                        <p class="grey-text text-darken-1 mt-0"><strong>Essential</strong></p>
		                        <p><strong>Course</strong> ${course}</p>
		                        <p><strong>Entrance exam score</strong> ${data.stud_entrance_exam}</p>
		                        <p><strong>Desired course</strong> ${data.stud_course_choice}</p>
		                        <p><strong>Reason for choosing ${data.stud_course } is</strong> ${ data.stud_reason_choosing}</p>
		                        <p><strong>Reason for studying in Gordon College is</strong> ${data.stud_reason_studying}</p>
		                        <p><strong>Scholarship</strong> ${scholarship_type}</p>
		                        <p><strong>Support</strong> ${data.stud_support}</p>
		                        <p><strong>Transferee</strong> ${transferee}</p>
		                        <p><strong>Transferee course level</strong> ${transferee_level}</p>
		                    </div>
		                </div>
		                <div class="col s12 l6">
		                    <div class="card-panel z-depth">
		                        <p class="grey-text text-darken-1 mt-0"><strong>Additional</strong></p>
		                        <p><strong>Went to</strong> ${data.secondary_sch}</p>
		                        <p><strong>General average</strong> ${data.stud_general_ave}</p>
		                        <p><strong>Special awards</strong> ${special_award}</p>
		                        <p><strong>Organizations joined</strong> ${organizations}</p>
		                        <p><strong>Competitions joined</strong> ${competitions}</p>
		                        <p><strong>Special interests</strong> ${interests}</p>
		                        <p><strong>Sports interests</strong> ${talents}</p>
		                        <p><strong>Devices</strong> ${devices}</p>
		                    </div>

		                    <div class="card-panel z-depth">
		                        <p class="grey-text text-darken-1 mt-0"><strong>Family</strong></p>
		                        <p><strong>Siblings</strong> ${data.stud_siblings}</p>
		                        <p><strong>Mother's name is</strong> ${data.mom_fullname}</p>
		                        <p><strong>Her Occupation is</strong> ${data.mom_occupation}</p>
		                        <p><strong>Father's name is</strong> ${data.dad_fullname}</p>
		                        <p><strong>His Occupation is</strong> ${data.dad_occupation}</p>
		                    </div>
		                </div>
		            </div>                
		        </div>
		        <div class="col s3 l2">
		            <p class="right-align">
		            	<img class="circle responsive-img z-depth-3" src="../assets/asset-img/prix.jpg" width="150" alt="Person">
		            </p>
		        </div>`;
	});

	

	// setTimeout( function(){
	// 	$('#loader').hide();
	// }, 300);

	setTimeout( function(){
		$('#container').hide().html(container).fadeIn('fast');
	}, 0);


}

function get_course_acro(isCourse) {
	var course = (isCourse == 'BSIT') ? 'Bachelor of Science in Information Technology' 
	: (isCourse == 'BSCS') ? 'Bachelor of Science in Computer Science' 
	: (isCourse == 'ACT') ? 'Associative Computer Technology' : '';
  	return course;
}

function check_auth() {
	if (sessionStorage.getItem("auth") === null) {
		window.location.href= ' ../index.html';
	}
}

function curr_focus() {

	let getData = JSON.parse(atob(sessionStorage.getItem('auth')));

	let elementSelector = '';

	getData.map( data=>{

		if (data.stud_course == 'BSIT') {
			elementSelector = '#cur-bsit';
		}

		else if (data.stud_course == 'BSCS') {
			elementSelector = '#cur-bscs';
		}

		else {
			elementSelector = '#cur-act';
		}

	})

	$(elementSelector).addClass('active');
	$(elementSelector+'> .collapsible-body').css('display', 'block');
}

// Get curriculum subjects
function get_curriculum(sem) {

	console.log(sem);

	var url = '', container = '';

	if (sem != '') {
		
		container += `<div class="row mt-4">
				<div class="col s12 l12">
                    <a>Student Portal <i class="mdi mdi-chevron-right"></i> <a href="curriculum.html"> Curriculum </a> <i class="mdi mdi-chevron-right"></i> Subjects</a>
                </div>
		        </div>
				<div class="row">
				<div class="col s12">
                    <table class="highlight">
                        <tbody>
                            <tr>
                                <th>Subject Code</th>
                                <th>Subject Title</th>
                                <th>Units</th>
                            </tr>

                            <tr>
                                <td>IT225A</td>
                                <td>Integrative Programming and Technologies (Lec)</td>
                                <td>2</td>
                            </tr>

                            <tr>
                                <td>IT225L</td>
                                <td>Integrative Programming and Technologies (Lab)</td>
                                <td>1</td>
                            </tr>

                            <tr>
                                <td>ITF324</td>
                                <td>IT Free Elective 1 (Research Methods)</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>LIT103</td>
                                <td>World Literature</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>PHI101</td>
                                <td>Philosophy of Man</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>SOC102</td>
                                <td>Society and Culture with Family Planning</td>
                                <td>3</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>`;

	}

	else {

		container += `<div class="row mt-4">
				<div class="col s12 l12">
	                <a>Student Portal <i class="mdi mdi-chevron-right"></i>  Curriculum </a>
	            </div>
	        </div>

		<div class="row">
				<div class="col s12 l12">
                    <h4>Subjects Enrolled</h4>
                </div>
                <div class="col s12 l4">
                    <div class="card z-depth mb-5">
                        <div class="card-content">
                            <h6>2016 - 2017 First Sem</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestiae.</p>
                        </div>
                        <div class="card-image">
                            <a class="btn-floating btn-large halfway-fab btn-l blue darken-3 right" href="curriculum.html?sem=1"><i class="mdi mdi-text"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col s12 l4">
                    <div class="card z-depth mb-5">
                        <div class="card-content">
                            <h6>2016 - 2017 Second Sem</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestiae.</p>
                        </div>
                        <div class="card-image">
                            <a class="btn-floating btn-large halfway-fab btn-l blue darken-3 right" href="curriculum.html?sem=2"><i class="mdi mdi-text"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col s12 l4">
                    <div class="card z-depth mb-5">
                        <div class="card-content">
                            <h6>2017 - 2018 First Sem</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestiae.</p>
                        </div>
                        <div class="card-image">
                            <a class="btn-floating btn-large halfway-fab btn-l blue darken-3 right" href="curriculum.html?sem=3"><i class="mdi mdi-text"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col s12 l4">
                    <div class="card z-depth mb-5">
                        <div class="card-content">
                            <h6>2017 - 2018 Second Sem</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, molestiae.</p>
                        </div>
                        <div class="card-image">
                            <a class="btn-floating btn-large halfway-fab btn-l blue darken-3 right" href="curriculum.html?sem=4"><i class="mdi mdi-text"></i></a>
                        </div>
                    </div>
                </div>

            </div>`;

	}

	$("#container").hide().html(container).fadeIn('fast');


}

// Get events
function get_events(event_id) {

	var container = '', breadcrumb ='';
			
	if (event_id == '') {

		$.get('http://127.0.0.1/sp_api/select.php', 'JSON')
		.done( (data)=>{

			data.forEach( (e)=>{

				container += `<div class="col s12 l4">
                	<div class="card z-depth mb-5">
                	<div class="card-content">
                    	<h6 class="truncate mb-0">${e.event_name}</h6>
                    	<span><strong>${e.event_charge}</strong></span>
                    	<p class="truncate mt-3">${e.event_description}</p>
                    </div>
             		<div class="card-image">
                       <img style="object-fit: cover; height: 200px;" src="../assets/asset-img/${e.event_image}">
                            <a class="btn-floating btn-large halfway-fab btn-l blue darken-3 right" href="events.html?event_id=${e.event_id}">
                            	<i class="mdi mdi-account-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
			});


			console.log(container);
			$("#container").hide().html(container).fadeIn('fast');
		});

	}

	else {

		$.get(`http://127.0.0.1/sp_api/select.php?event_id=${event_id}`, 'JSON')
		.done( (data)=>{

			

			data.forEach( (e)=>{

				breadcrumb += `<a>Student Portal <i class="mdi mdi-chevron-right"></i> <a href="events.html"> 
						Events </a> <i class="mdi mdi-chevron-right"></i> ${e.event_name}</a>`;

				container += `<div class="col l5">
	                    <h2 class="my-0">${e.event_name}</h2>
	                    <p class="mt-0"><strong>&#8369; ${e.event_fee}</strong></p>
	                    <p>${e.event_description}</p>
	                    <h6 class="mt-3">Organizer: ${e.event_organizer}</h6>
	                    <h6 class="mt-3">What: ${e.event_type}</h6>
	                    <h6 class="mt-3">When: ${e.event_date_start +' - '+ e.event_date_end}</h6>
	                    <h6 class="mt-3">Where: ${e.event_location}</h6>
	                    <h6 class="mt-3">Open for: ${e.event_for}</h6>
	                    <h6 class="mt-3">Event Hours: ${e.event_hours}</h6>
	                    <a class="btn blue mt-4" href="">Register</a>
	                </div>
	                <div class="col l6 push-l1">
	                    <div class="card z-depth mb-5">
	                        <div class="card-image">
	                            <img src="../assets/asset-img/${e.event_image}">
	                        </div>
	                    </div>
	                </div>`;
			});


			console.log(breadcrumb);
			$("#container").hide().html(container).fadeIn('fast');
			$("#breadcrumb").html(breadcrumb);
		});

	}


	

	
}

// get param
function get_url(param){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var res = url.searchParams.get(`${param}`);

	return res;
}
