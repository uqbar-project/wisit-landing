
function showCharla(idCharla){
	var titCharla = $("#charlas #" + idCharla + " h2").html();
	var autorCharla = $("#charlas #" + idCharla + " h3").html();
	var abstCharla = $("#charlas #" + idCharla + " div").html();
	
	//$("#charlasPopup h2").html(titCharla);
	$("#charlasPopup #autor").html(autorCharla);
	$("#charlasPopup #abstract").html(abstCharla);
	
	var h = $(window).height() * 0.8;
	var w = $(window).width() * 0.8;
	
	$("#charlasPopup").dialog({
		  title: titCharla,
		  modal: true,
		  width: w,
		  height: h,
		  draggable:false,
		  dialogClass: 'charlasDialog',
		  show: { effect: "blind", duration: 800 },
		  buttons: [
		    {
		      text: "Cerrar",
		      click: function() {
		        $( this ).dialog( "close" );
		      }
		    }
		  ]
		});
}

$(document).ready(function(){
	$("#charlas").load('data/charlas.html');
});