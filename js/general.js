jQuery( document ).ready(function( $ ) {
	
	var iframe = document.getElementById("appframe");
	iframe.onload = function(){
		iframe.contentWindow.cordova = window.cordova;
	};
//	iframe.src = 'http://virtualbackpack.follett.com/';
	iframe.src = 'https://www.harken.com/apps/tradeapp/';

	function pageSize() {
		var pgWidth = $(window).width();
		var pgHeight = $(window).height();
		$('.page').css({'width':pgWidth+'px','height':pgHeight+'px'});
		$('#appframe').css({'width':pgWidth+'px','height':pgHeight+'px'});
	}
	pageSize();

	function fadeFrame() {
		$('#appframe').css({'opacity':'1'});
	}
	setTimeout(fadeFrame, 3000);

	var resizeId;
	$(window).resize(function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(pageSize, 150);
	}); 
	
});
