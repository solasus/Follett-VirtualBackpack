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
		var iframe = document.getElementById("webapp");
		iframe.onload = function(){
			iframe.contentWindow.cordova = window.cordova;
		};
		iframe.src = 'login.html';
		//$('#webapp').attr('src', 'login.html')
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
	
	$('#app a.applink').click(function(e){ 
		e.preventDefault();
		var target = "https://virtualbackpack.follett.com/default.aspx";
		var cbname = $.cookie('cbname');
		if (cbname.substring(0, 1) === "*") { // set action for redirect to staging
			target = "https://virtualbackpackstage.follett.com/default.aspx"; 
		}
		$('#webapp').attr('src',target);
	});
	
	var iframe = document.getElementById("webapp2");
	iframe.onload = function(){
		iframe.contentWindow.cordova = window.cordova;
	};
	iframe.src = 'https://solasus.com/html/clients/da/follett_vbp/link_test.html';
	
});

$(document).on('pagebeforeshow','#forgotpass' ,function(e,data){    
	setHeight();
	var iframe = document.getElementById("forgotpassword");
	iframe.onload = function(){
		iframe.contentWindow.cordova = window.cordova;
	};
	iframe.src = 'https://virtualbackpack.follett.com/forgotpassword.aspx';
});

$(document).on('pagebeforeshow','#changepassword' ,function(e,data){    
	setHeight();
	var iframe = document.getElementById("changepassword");
	iframe.onload = function(){
		iframe.contentWindow.cordova = window.cordova;
	};
	iframe.src = 'https://virtualbackpack.follett.com/changepassword.aspx';
});

$(document).on('pagebeforeshow','#site' ,function(e,data){    
	setHeight();
	var iframe = document.getElementById("efollettstore");
	iframe.onload = function(){
		iframe.contentWindow.cordova = window.cordova;
	};
	iframe.src = 'https://www.bkstr.com/efollettstore/home/';
});


