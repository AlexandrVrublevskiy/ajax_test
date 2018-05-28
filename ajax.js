$(document).ready(function(){
	$('#get_users').on('click', myAJAXtable);
	/*$('#get_users').on('click', function(){
		$('#get_users').hide('slow')});*/
	$('#get_posts').on('click', myAJAXposts,);

	function myAJAX(){
		$.get(
			'https://jsonplaceholder.typicode.com/users',
			{},
			function(data){
				console.log(data);
			}
		);
	}
	
	function capitaliseFirstLetter(string){
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	
	var table_exist = 0;
	var postts_exist = 0;
	
	function myAJAXtable(){
		$('#pst').empty();
		postts_exist = 0;
		$.ajax({
			url  : "https://jsonplaceholder.typicode.com/users",
			tupe : "GET",
			statusCode: {404: function() {alert( "page not found" );}},
			error : function (){console.log("error");},
			//success : function (data){console.log(data);}
			success :  function (data){
				var items_data = '';
				if (table_exist === 0){
					table_exist = 1;
				$.each(data, function(i, val){
					items_data += '<tr>';
					items_data += '<td>'+(i + 1)+'</td>';
					items_data += '<td>'+val.name+'</td>';
					items_data += '<td>'+val.username+'</td>';
					items_data += '<td>'+val.email+'</td>';
					items_data += '<td>'+"Город: "+val.address.city+"<br>Улица: "+val.address.street+"<br>Квартира: "+val.address.suite+'</td>';
					items_data += '<td>'+val.company.name+'</td>';
					items_data += '<td><a>'+val.website+'<a/></td>';
				});
				}

				$('#items').append(items_data).hide().show('slow');
				$('#tblh').show('slow');
				
				}
		});
	}
	
	function myAJAXposts(){
		$('#tblh').hide();
		$('#items').empty();
		table_exist = 0
		$.ajax({
			url  : "https://jsonplaceholder.typicode.com/posts/",
			tupe : "GET",
			statusCode: {404: function() {alert( "page not found" );}},
			error : function (){console.log("error");},
			//success : function (data){console.log(data);}
			success :  function (data){
				var items_data = '';
				if (postts_exist === 0){
					postts_exist = 1
				//var i = 0;
				$.each(data, function(i, val){
					//items_data += '<td>'+(i + 1)+'</td>';
					items_data += '<h3 id="div_head">'+capitaliseFirstLetter(val.title)+'</h3>';
					items_data += '<div id="div_body">'+capitaliseFirstLetter(val.body)+'</div>';
				});	
				}
				$('#pst').append(items_data).hide().fadeIn('slow');
				}
		});
	}
 });
 
 
 //sidebar
 
 $("#menu-toggle, #get_test").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});


















