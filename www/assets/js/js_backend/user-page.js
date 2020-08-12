
// showJobs();
// function showJobs(){
// 	$.ajax({
// 		url:"http://localhost/irec_app/www/include/jobs.php",
// 		method:"GET",
// 		dataType:"JSON",
// 		success:function(data){
// 			var body="";
// 			data.map(e=>{
// 				body+='<div class="card-panel">';
// 				body+='<div class="container">';
// 				body+='<div class="row">';
// 				body+='<div class="marg-top-2"></div>';
// 				body+='<div class="row">';
// 				body+='<div class="col s12">';
// 				body+='<div class="card">';
// 				body+='<div class="card-image">';
// 				body+='<img src="img/sewer.jpg" style="width:100%; height:200px;">';
// 				body+='<span class="card-title">'+e.job+'</span>';
// 				body+='</div>';
// 				body+='<div class="card-content">';
// 				body+='<p>'+e.job_desc+'</p>';
// 				body+='<br>';
// 				body+='<p style="padding-left: 250px">AVAILABLE SLOT: '+e.available+'</p>';
// 				body+='</div>';
// 				body+='<div class="card-action">';
// 				body+='<button type="submit" onclick="createResume(\''+e.id+'\')" >CREATE A RESUME</button></div></div></div></div></div></div></div>';
// 			});
// 			$('#showData').html(body);
// 		}
// 	});
// }

// function createResume(id){
// 	$.ajax({
// 		url:"http://localhost/irec_app/www/include/createresume.php?id="+id,
// 		method:"GET",
// 		data:{id:id},
// 		dataType:"JSON",
// 		success:function(data){
// 			window.location.assign("../pages/index.html#profile.php?id="+id);
// 			localStorage.setItem("work_data",JSON.stringify(data));
// 		}


// 	});
// }