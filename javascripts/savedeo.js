function getURL(id){
	$.ajax({
		url: 'https://www.savedeo.com/download?url=http://www.redtube.com/'+id,
		//data: myData,
		type: 'GET',
		crossDomain: true,
		//async: false,
		dataType: 'html',
		success: function() {},
		error: function() { alert('Failed!'); },
	}).done(function(data) {
		var el = $(data).find("data-event").val();  
		$("#log").html(el); 
	});
}
