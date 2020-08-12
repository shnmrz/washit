displayfetch();
function displayfetch(){

var display = 'display';

$.ajax({
	url: 'http://localhost/ajax1/php/function.php',
	method: 'POST',
	data: {task: display},
	dataType: 'JSON',
	success:function(data){
		var table = "";

		data.map((a)=>{
			table += `<tr>
						<td>${a.first_name}</td>
						<td>${a.last_name}</td>
						<td>${a.age}</td>
						<td><button class="btn waves-effect modal-trigger deep-orange lighten-1" data-target="display_" onClick="area(${a.id})">Edit</button>&nbsp;<button class="btn waves-effect deep-orange lighten-1" onClick="del(${a.id})">Delete</button></td>
					</tr>`;
		})
		$('#table_body').html(table);
	}
});	
}