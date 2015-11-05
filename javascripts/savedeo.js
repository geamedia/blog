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
		beforeSend: setHeader
	}).done(function(data) {
		var el = $(data).find("data-event").val();  
		$("#log").html(el); 
	});
}

function setHeader(xhr) {
  xhr.setRequestHeader('host', 'www.savedeo.com');
  xhr.setRequestHeader('scheme', 'https');
  xhr.setRequestHeader('version', 'HTTP/1.1');
  xhr.setRequestHeader('accept', 'accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
  xhr.setRequestHeader('accept-encoding', 'gzip, deflate, sdch');
  xhr.setRequestHeader('accept-language', 'en-US,en;q=0.8,id;q=0.6');
  xhr.setRequestHeader('cache-control', 'max-age=0');
  xhr.setRequestHeader('cookie', '__cfduid=de5247865377b7b356853f8bc634255ed1446754259; lang_code=en; _ga=GA1.2.290088645.1446754271; _g.pop=3|Thu, 05 Nov 2015 21:30:31 GMT');  
  xhr.setRequestHeader('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36');  
  xhr.setRequestHeader('upgrade-insecure-requests', 1);
  xhr.setRequestHeader('origin', 'https://www.savedeo.com');  
  xhr.setRequestHeader('referer', 'http://blog.geamedia.xyz/javascripts/savedeo.html');  
}
