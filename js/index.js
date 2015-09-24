// JavaScript Document

/*BACKGROUND IMAGE ROTATE*/	
$(function ()
{
	setInterval("rotateImg()", 10000);
	setInterval("rotateImg2()", 10000);
});
	
function rotateImg()
{
	var currImg = $('#bckRotate li.current');
	var currNext = currImg.next();
	if(currNext.length == 0)
	currNext = $('#bckRotate li:first');
	currImg.removeClass('current').addClass('previous');
	currNext.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImg.removeClass('previous');
	});
};

function rotateImg2()
{
	var currImg2 = $('#bckRotateChrome li.currentChrome');
	var currNext2 = currImg2.next();
	if(currNext2.length == 0)
	currNext2 = $('#bckRotateChrome li:first');
	currImg2.removeClass('currentChrome').addClass('previousChrome');
	currNext2.css({opacity: 0.0}).addClass('currentChrome').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImg2.removeClass('previousChrome');
	});
};

var homePage = $("#home");
var clients = $("#clients");
var about = $("#about");
var contact = $("#contact");
var linkHome = $("#linkHome");
var linkClients = $("#linkClients");
var linkAbout = $("#linkAbout");
var linkContact = $("#linkContact");
var thumbsNthchild = $("#thumbs li:nth-child(1)");
var thumbsNthchild2 = $("#thumbs li:nth-child(2)");
var thumbsNthchild3 = $("#thumbs li:nth-child(3)");
var thumbsNthchild4 = $("#thumbs li:nth-child(4)");
var thumbsNthchild5 = $("#thumbs li:nth-child(5)");
var thumbsNthchild6 = $("#thumbs li:nth-child(6)");
var thumbsNthchild7 = $("#thumbs li:nth-child(7)");
var thumbsNthchild8 = $("#thumbs li:nth-child(8)");
var thumbsNthchild9 = $("#thumbs li:nth-child(9)");
var thumbsNthchild10 = $("#thumbs li:nth-child(10)");
var thumbsNthchild11 = $("#thumbs li:nth-child(11)");
var thumbsNthchild12 = $("#thumbs li:nth-child(12)");
var thumb1 = $("#thumb1");
var thumb2 = $("#thumb2");
var thumb3 = $("#thumb3");
var thumb4 = $("#thumb4");
var thumb5 = $("#thumb5");
var thumb6 = $("#thumb6");
var thumb7 = $("#thumb7");
var thumb8 = $("#thumb8");
var thumb9 = $("#thumb9");
var thumb10 = $("#thumb10");
var thumb11 = $("#thumb11");
var thumb12 = $("#thumb12");
var uiTxt = $(".uiTxt");
var issue1 = $("#prob1");
var issue2 = $("#prob2");
var solution1 = $("#solu1");
var solution2 = $("#solu2");
var treat1 = $("#treat1");
var treat2 = $("#treat2");

$(document).ready(function()
{
	/*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
	$(window).scrollTop(0);
	/**/
	
	
	
	if (navigator.userAgent.indexOf('Safari') != -1)
	{
		$("#clients").addClass("safClients").removeClass("clientsBck");
		$("#contact").addClass("safContact").removeClass("contactBck");
		$("#about").addClass("safAbout").removeClass("aboutBck");
	}
	
	if (navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Safari') != -1)
	{
		$("#bck").css("display", "none");
		$("#bckChrome").css("display", "block");
	}
	
	if (navigator.userAgent.indexOf('Chrome') != -1)
	{
		$("#welcome div div div div").addClass("introChrome").removeClass("intro");
		$("#homeWrap").css("background-color", "rgba(47, 158, 72, .4)");
	}
	
	if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Opera') != -1)
	{
		$("#clients").addClass("clientsBck").removeClass("safClients");
		$("#contact").addClass("contactBck").removeClass("safContact");
		$("#about").addClass("aboutBck").removeClass("safAbout");
	}
	
	if (navigator.userAgent.indexOf('Opera') != -1)
	{
		$(".top-bar-section ul li a").css("font-size", "1em");
		$("#welcome h1").css("font-size", "8em");
		$("#welcome h2, #welcome h3").css("font-size", "2em");
		$("#number").css("font-size", "3em");
		$("#paraPic").css("font-size", ".8em");
		$("#videoWrap h1").css("font-size", "1.6em");
		$("#clients h1").css("font-size", "1.8em");
		$("#clients h2").css("font-size", "1.6em");
		$("#clients div ul li").css("font-size", "1.4em");
		$("#about h1").css("font-size", "2em");
		$("#copy1 p").css("font-size", ".7em");
		$("#icons div p").css("font-size", "1.1em");
	}
	
	else if(!navigator.userAgent.indexOf('Firefox') != -1 || !navigator.userAgent.indexOf('Chrome') != -1 || !navigator.userAgent.indexOf('Opera') != -1 || !navigator.userAgent.indexOf('Safari') != -1)
	{
		$("#clients").addClass("ieClients").removeClass("safClients, clientsBck");
		$("#contact").addClass("ieContact").removeClass("safContact, contactBck");
		$("#about").addClass("ieAbout").removeClass("safAbout, aboutBck");
	}

	
	$("#bck").css("opacity", "1");
	$("#bck").animate({"opacity": "1"}, 2000);
	
	
	
	/*ANCHOR LINK SCROLLING*/
	jQuery(function()
	{
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				var target = jQuery(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length)
				{
					jQuery('html,body').animate({scrollTop: target.offset ().top}, 2000);
					return false;
				}
			}
		});
	});
	
	
	
	$(".intro div").click(function()
	{
		$("#homeVideo").animate({"z-index": "999"}, 0,
		function()
		{
			$("#homeVideo").animate({"opacity": "1"}, 500);
		});
		
		$("#closeBTN").animate({"z-index": "9999"}, 0,
		function()
		{
			$("#closeBTN").animate({"opacity": "1"}, 500);
		});
	});	
	
	$("#closeBTN").click(function()
	{
		$("#closeBTN, #homeVideo").animate({"opacity": "0", "z-index": "-1"}, 500)
		$("video").each(function()
		{
			this.pause();
			$("video").currentTime = 0;
		});
	});
	
	
	
	/*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{		
		if(homePage.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkHome.addClass('currentLink'); 
			linkClients.removeClass('currentLink'); 
			linkAbout.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			$("#bck").stop().fadeIn({"opacity": "1"}, 1000);
			$("#bckChrome").stop().fadeIn({"opacity": "1"}, 1000);		
			
			if (navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Safari') != -1)
			{
				$("#bck").css("display", "none");
			}
		}
		
		if(clients.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkClients.addClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkAbout.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			$("#bck").stop().fadeOut({"opacity": "0"}, 1000);
			$("#bckChrome").stop().fadeOut({"opacity": "0"}, 1000);
			$("#videoWrap").stop().animate({"opacity": "1", "margin-top": "0"}, 500);
			$("#clientInfo").stop().animate({"opacity": "1"}, 700);
		}
		
		if(about.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkAbout.addClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkClients.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			$("#bck").stop().fadeOut({"opacity": "0"}, 1000);
			$("#bckChrome").stop().fadeOut({"opacity": "0"}, 1000);
		}
		
		if(contact.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass('currentLink'); 
			linkAbout.removeClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkClients.removeClass('currentLink');
			$("#bck").stop().fadeOut({"opacity": "0"}, 1000);
			$("#bckChrome").stop().fadeOut({"opacity": "0"}, 1000);
		}       
	});
	/**/
	
	
	
	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkHome.click(function()
	{
		linkHome.addClass("currentLink");
		linkHome.removeClass("slideUnder");
		linkClients.removeClass("currentLink");
		linkAbout.removeClass("currentLink");
		linkContact.removeClass("currentLink");
		$("#bck").stop().fadeIn({"opacity": "1"}, 1000);
	});
	
	linkClients.click(function()
	{
		linkClients.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkAbout.removeClass("currentLink");
		linkContact.removeClass("currentLink");
		$("#bck").stop().fadeOut({"opacity": "0"}, 1000);
		$("#videoWrap").stop().fadeIn({"opacity": "1", "margin-top": "0"}, 500);
	});
	
	linkAbout.click(function()
	{
		linkAbout.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkClients.removeClass("currentLink");
		linkContact.removeClass("currentLink");
		$("#bck").stop().fadeOut({"opacity": "1"}, 1000);
	});
	
	
	linkContact.click(function()
	{
		linkContact.addClass("currentLink");
		linkContact.removeClass("slideUnder");
		linkHome.removeClass("currentLink");
		linkClients.removeClass("currentLink");
		linkAbout.removeClass("currentLink");
		$("#bck").stop().fadeOut({"opacity": "1"}, 1000);
	});
	/**/
	
	
	
	/*STICKY NAV*/
	var navOffset = $("nav").offset().top;
	
	$(window).scroll(function()
	{
		var scrollPos = $(window).scrollTop();
		
		if(scrollPos >= navOffset)
		{
			$("#header2").stop().animate({"opacity": "1", "z-index": "999"}, 100);
			$("#header1").stop().fadeOut(400);
		}
		
		else
		{
			$("#header2").stop().animate({"opacity": "0", "z-index": "997"}, 300);
			$("#header1").stop().fadeIn(100);
		}
	});
});