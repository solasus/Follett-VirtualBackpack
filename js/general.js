// JavaScript Document

function setHeight(){
	var ifheight = $(window).height() - 50;
	$('iframe.webapp').height(ifheight);
}

function cbLogin() {
	var cbname = $.cookie('cbname');
	var cbpw = $.cookie('cbpw');
	if (!cbname) { // no cookie
		$.mobile.navigate('#settings');
	} else { // yes cookie
		// post to ektron
		$('#webapp').attr('src', 'login.html')
	}
}

function openLink(url) {
	alert(url);
	ref = window.open('http://google.com', '_system');
}

$(document).on('pagebeforeshow','#app' ,function(e,data){    
	setHeight();
	cbLogin()
});

$( window ).on( "orientationchange", function( event ) {
	setHeight();
});

$(document).on('pagebeforeshow','#settings' ,function(e,data){    
	// fill fields if vals exists
	var cbname = $.cookie('cbname');
	var cbpw = $.cookie('cbpw');
	if (cbname != '' && cbpw != ''){
		$('#uname').val($.cookie('cbname'));
		$('#pword').val($.cookie('cbpw'));
	}
	// submit and redirect
	$('form#cblogin').off('submit').on('submit', function( event ) {
		event.preventDefault();
		// clear existing
		$.removeCookie('cbname');
		$.removeCookie('cbpw');
		// save new cookie
		$.cookie('cbname', $('#uname').val(), { expires: 9999 });
		$.cookie('cbpw', $('#pword').val(), { expires: 9999 });
		// redirect to #app
        //alert('123');
        $.mobile.navigate('#app');
	});
	
	$('#app a#applink').click(function(e){ 
		e.preventDefault();
		var target = "https://virtualbackpack.follett.com/default.aspx";
		var cbname = $.cookie('cbname');
		if (cbname.substring(0, 1) == "*") { // set action for redirect to staging
			target = "http://www.classbook.com/apps/virtualbackpackv2/default.aspx";
		}
		$('#webapp').attr('src',target);
	});
	
});

$(document).on('pagebeforeshow','#pass' ,function(e,data){    
	setHeight();
});

$(document).on('pagebeforeshow','#site' ,function(e,data){    
	setHeight();
});

