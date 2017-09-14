// JavaScript Document

function setHeight(){
	var ifheight = $(window).height() - 50;
	$('iframe.webapp').height(ifheight);
}

function cbLogin() {
	$('.main-content').html('');
	$('#app .main-content').html('<iframe id="webapp" class="webapp" src=#"></iframe>');
	setHeight();
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
	
//	// link_test.html iframe on home page
//	var iframe = document.getElementById("webapp2");
//	iframe.onload = function(){
//		iframe.contentWindow.cordova = window.cordova;
//	};
//	iframe.src = 'https://solasus.com/html/clients/da/follett_vbp/link_test.html';
	
});

$(document).on('pagebeforeshow','#forgotpass' ,function(e,data){  
	$('.main-content').html('');
	$('#forgotpass .main-content').html('<iframe id="forgotpassword" class="webapp" src=#"></iframe>');
	setHeight();
	var iframe2 = document.getElementById("forgotpassword");
	iframe2.onload = function(){
		iframe2.contentWindow.cordova = window.cordova;
	};
	iframe2.src = 'https://virtualbackpack.follett.com/forgotpassword.aspx';
});

$(document).on('pagebeforeshow','#changepass' ,function(e,data){ 
	$('.main-content').html('');
	$('#changepass .main-content').html('<iframe id="changepassword" class="webapp" src=#"></iframe>');
	setHeight();
	var iframe3 = document.getElementById("changepassword");
	iframe3.onload = function(){
		iframe3.contentWindow.cordova = window.cordova;
	};
	iframe3.src = 'https://virtualbackpack.follett.com/changepassword.aspx';
});

$(document).on('pagebeforeshow','#site' ,function(e,data){  
	$('#site .main-content').html('<iframe id="efollettstore" class="webapp" src=#"></iframe>');
	setHeight();
	var iframe4 = document.getElementById("efollettstore");
	iframe4.onload = function(){
		iframe4.contentWindow.cordova = window.cordova;
	};
	iframe4.src = 'https://www.bkstr.com/efollettstore/home/';
});


