
function showCharla(idCharla){
	var titCharla = $("#charlas #" + idCharla + " h2").html();
	var autorCharla = $("#charlas #" + idCharla + " h3").html();
	var abstCharla = $("#charlas #" + idCharla + " div").html();
	
	//$("#charlasPopup h2").html(titCharla);
	$("#charlasPopup #autor").html(autorCharla);
	$("#charlasPopup #abstract").html(abstCharla);
	
	var h = $(window).height() * 0.8;
	var w = $(window).width() * 0.8;
	
	$("body").css("overflow","hidden");

	$("#charlasPopup").dialog({
		  title: titCharla,
		  modal: true,
		  width: w,
		  height: h,
		  position: { my: "center top", at: "center top+" + ($("header").height() + 10) , of: window },
		  draggable:false,
		  dialogClass: 'charlasDialog',
		  show: { effect: "blind", duration: 800 },
		  close: function(){
		  	$("body").css("overflow","auto");
		  },
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

function showCharlaNew(idCharla){
	var titCharla = $("#charlas #" + idCharla + " h2").html();
	var contents = $("#charlas #" + idCharla + " div").html();
	
	$("#charlasPopupNew #contents").html(contents);
	
	var h = $(window).height() * 0.8;
	var w = $(window).width() * 0.8;
	
	$("body").css("overflow","hidden");

	$("#charlasPopupNew").dialog({
		  title: titCharla,
		  modal: true,
		  width: w,
		  height: h,
		  position: { my: "center top", at: "center top+" + ($("header").height() + 10) , of: window },
		  draggable:false,
		  dialogClass: 'charlasDialog',
		  show: { effect: "blind", duration: 800 },
		  close: function(){
		  	$("body").css("overflow","auto");
		  },
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