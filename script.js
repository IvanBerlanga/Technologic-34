$(document).bind('pageinit', function() {

	
	function cargarExhibitions() {
	$.get("xml/exhibitions.xml", function (data) {
			$(data).find ('exhibition').each(function(){
				var $entry = $(this)
				var $nombre= $entry.find('Nombre').text()
				var $lugar= $entry.find('Lugar').text()
				
				html ="<li class='entry'><a href='"+ $nombre+".html'>"+ $nombre + "</a>";
				html += "<span class= 'lugar'>"+ $lugar+ "</span>";
				html +="</li>"
				
				$('#content').append($(html))
				return $(html);
				})
				$("#entries").html($html); 
		})
	}
	/*$('#page1').live('pagecreate',function(event){
	cargarExhibitions() ;
	return false})*/
	
	var html="";
	$("#exhibitions").click(function(){
		$("#page1 #content").empty();
		cargarExhibitions() 
	}); 
	
	$("#teatro").click(function(){
		$("#page1 #entries").empty();
		$.get("xml/teatro.xml", function (data) {
			$(data).find ('Play').each(function(){
				var $entry = $(this)
				var $nombre= $entry.find('Nombre').text()
				var $lugar= $entry.find('Lugar').text()
				
				html ="<li class='entry'><a href='"+ $nombre+".html'>"+ $nombre + "</a>";
				html += "<span class= 'lugar'>"+ $lugar+ "</span>";
				html +="</li>"
				
				$('#content').append($(html))
				return $(html);
				})
					
					$("#entries").html(html);
	
		}); 
	})
})