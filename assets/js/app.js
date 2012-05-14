$(document).ready(function() {

	$.ajax({
        type: 'GET',
        url: 'http://10.21.24.120:8080/niths/applications/top/5',
        contentType: 'application/json',
        cache: false,
        success:  function(data) {
			$('#topList').html('');
			for (var i = 0; i < 5; i++) {
				$('#topList').append('<li><strong>'+ (i+1) + ': '+data[i].title+'</strong><small class="onright">'+data[i].requests+'</small></li>');					
			}
			
		},
        error: function(jqXHR, textStatus, errorThrown){
            alert(textStatus);
        },
        timeout:5000
 });

});