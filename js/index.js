// JavaScript Document

/*BACKGROUND IMAGE ROTATE*/	
$(function ()
{
	setInterval("rotateImg()", 10000);
	setInterval("rotateCircle()", 10000);
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

function rotateCircle()
{
	var currImgCir = $('#circles li.currentCir');
	var currNextCir = currImgCir.next();
	if(currNextCir.length == 0)
	currNextCir = $('#circles li:first');
	currImgCir.removeClass('currentCir').addClass('previousCir');
	currNextCir.css({opacity: 0.0}).addClass('currentCir').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImgCir.removeClass('previousCir');
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
var compWrap = $("#compWrap .panel div ul");
var product = $("#product #prodWrap .panel div");
var titleOne = $("#about #aboutWrap div");
var titleHR = $("#about #aboutWrap div ul hr");
var titleTwo = $("#about #aboutWrap div ul li:last-child");
var bio = $("#about #aboutWrap div > ul:last-child");

$(document).ready(function()
{
	/*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
	$(window).scrollTop(0);
	/**/
	
	
	
	if (navigator.userAgent.indexOf('Safari') != -1)
	{
		$("#clients").addClass("safClients").removeClass("clientsBck");
		$("#about").addClass("safAbout").removeClass("aboutBck");
	}
	
	if (navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Safari') != -1)
	{
		$("#bck, .intro div, #circles").css("display", "none");
		$("#bckChrome").css("display", "block");
	}
	
	if (navigator.userAgent.indexOf('Chrome') != -1)
	{
		$("#welcome div div.panel div.row div.intro").addClass("introChrome").removeClass("intro");
		$("#homeWrap").css("background-color", "rgba(47, 158, 72, .4)");
	}
	
	if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Opera') != -1)
	{
		$("#clients").addClass("clientsBck").removeClass("safClients");
		$("#about").addClass("aboutBck").removeClass("safAbout");
	}
	
	if (navigator.userAgent.indexOf('Opera') != -1)
	{
		$(".top-bar-section ul li a").css("font-size", "1em");
		$("#welcome h1").css("font-size", "8em");
		$("#welcome h2, #welcome h3").css("font-size", "2em");
		$("#number").css("font-size", "3em");
		$("#paraPic").css("font-size", ".8em");
		$("#compWrap h1").css("font-size", "1.6em");
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
		$("#about").addClass("ieAbout").removeClass("safAbout, aboutBck");
	}

	
	$("#bck, .intro div, #circles").css("opacity", "1");
	$("#bck, .intro div, #circles").animate({"opacity": "1"}, 2000);
	
	
	
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
	
	$("#circles li:nth-child(1)").click(function()
	{
		$("#bck #bckRotate li:nth-child(1)").addClass("current");
		$("#bck #bckRotate li:nth-child(2)").removeClass("current");
		$("#bck #bckRotate li:nth-child(3)").removeClass("current");
		$("#bck #bckRotate li:nth-child(4)").removeClass("current");
		
		$("#circles li:nth-child(1)").addClass("currentCir");
		$("#circles li:nth-child(2)").removeClass("currentCir");
		$("#circles li:nth-child(3)").removeClass("currentCir");
		$("#circles li:nth-child(4)").removeClass("currentCir");
		
		/*For Chrome*/
		$("#bckRotateChrome li:nth-child(1)").addClass("currentChrome");
		$("#bckRotateChrome li:nth-child(2)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(3)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(4)").removeClass("currentChrome");
	});
	
	$("#circles li:nth-child(2)").click(function()
	{
		$("#bck #bckRotate li:nth-child(2)").addClass("current");
		$("#bck #bckRotate li:nth-child(1)").removeClass("current");
		$("#bck #bckRotate li:nth-child(3)").removeClass("current");
		$("#bck #bckRotate li:nth-child(4)").removeClass("current");
		
		$("#circles li:nth-child(2)").addClass("currentCir");
		$("#circles li:nth-child(1)").removeClass("currentCir");
		$("#circles li:nth-child(3)").removeClass("currentCir");
		$("#circles li:nth-child(4)").removeClass("currentCir");
		
		/*For Chrome*/
		$("#bckRotateChrome li:nth-child(2)").addClass("currentChrome");
		$("#bckRotateChrome li:nth-child(1)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(3)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(4)").removeClass("currentChrome");
	});
	
	$("#circles li:nth-child(3)").click(function()
	{
		$("#bck #bckRotate li:nth-child(3)").addClass("current");
		$("#bck #bckRotate li:nth-child(1)").removeClass("current");
		$("#bck #bckRotate li:nth-child(2)").removeClass("current");
		$("#bck #bckRotate li:nth-child(4)").removeClass("current");
		
		$("#circles li:nth-child(3)").addClass("currentCir");
		$("#circles li:nth-child(1)").removeClass("currentCir");
		$("#circles li:nth-child(2)").removeClass("currentCir");
		$("#circles li:nth-child(4)").removeClass("currentCir");
		
		/*For Chrome*/
		$("#bckRotateChrome li:nth-child(3)").addClass("currentChrome");
		$("#bckRotateChrome li:nth-child(1)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(2)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(4)").removeClass("currentChrome");
	});
	
	$("#circles li:nth-child(4)").click(function()
	{
		$("#bck #bckRotate li:nth-child(4)").addClass("current");
		$("#bck #bckRotate li:nth-child(1)").removeClass("current");
		$("#bck #bckRotate li:nth-child(2)").removeClass("current");
		$("#bck #bckRotate li:nth-child(3)").removeClass("current");
		
		$("#circles li:nth-child(4)").addClass("currentCir");
		$("#circles li:nth-child(1)").removeClass("currentCir");
		$("#circles li:nth-child(2)").removeClass("currentCir");
		$("#circles li:nth-child(3)").removeClass("currentCir");
		
		/*For Chrome*/
		$("#bckRotateChrome li:nth-child(4)").addClass("currentChrome");
		$("#bckRotateChrome li:nth-child(1)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(2)").removeClass("currentChrome");
		$("#bckRotateChrome li:nth-child(3)").removeClass("currentChrome");
	});
	
	
	
	$(".intro div, .introChrome div").click(function()
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
	
	
	
	compWrap.hover(function()
	{
		$(this).find("+ li").stop().animate({"opacity": "0"}, 200);
		$(this).find("li:nth-child(2)").stop().animate({"z-index": "1"}, 100);
	},
	
	function()
	{
		$(this).find("+ li").stop().animate({"opacity": "1"}, 200);
		$(this).find("li:nth-child(2)").stop().animate({"z-index": "-1"}, 100);
	});
	
	
	
	product.hover(function()
	{
		$(this).find("div").addClass("productHover");
		$(this).find("div div").css("background", "none");
		$(this).find("div hr").css({"background": "#FFFFFF", "border-color": "#FFFFFF"});
	},
	
	function()
	{
		$(this).find("div").removeClass("productHover");
		$(this).find("div hr").css({"background": "#0B492C", "border-color": "#0B492C"});
	});
	
	
	
	titleHR.hide();
	titleTwo.hide();
	bio.hide();
	titleOne.click(function()
	{
		$(this).find("ul li:first-child").next().slideToggle(300).next().slideToggle(300);
		$(this).find("> ul:last-child").slideToggle(300);
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
			$("#bck, .intro div, #circles").stop().fadeIn({"opacity": "1"}, 1000);
			$("#bckChrome").stop().fadeIn({"opacity": "1"}, 1000);		
			
			if (navigator.userAgent.indexOf('Chrome') != -1 || navigator.userAgent.indexOf('Safari') != -1)
			{
				$("#bck, .intro div, #circles").css("display", "none");
			}
		}
		
		if(clients.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkClients.addClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkAbout.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "0"}, 1000);
			$("#bckChrome").stop().fadeOut({"opacity": "0"}, 1000);
			$("#compWrap").stop().animate({"opacity": "1", "margin-top": "0"}, 500);
			$("#clientInfo").stop().animate({"opacity": "1"}, 700);
		}
		
		if(about.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkAbout.addClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkClients.removeClass('currentLink');
			linkContact.removeClass('currentLink');
			$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "0"}, 1000);
			$("#bckChrome").stop().fadeOut({"opacity": "0"}, 1000);
		}
		
		if(contact.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass('currentLink'); 
			linkAbout.removeClass('currentLink'); 
			linkHome.removeClass('currentLink'); 
			linkClients.removeClass('currentLink');
			$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "0"}, 1000);
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
		$("#bck, .intro div, #circles").stop().fadeIn({"opacity": "1"}, 1000);
	});
	
	linkClients.click(function()
	{
		linkClients.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkAbout.removeClass("currentLink");
		linkContact.removeClass("currentLink");
		$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "0"}, 1000);
		$("#compWrap").stop().fadeIn({"opacity": "1", "margin-top": "0"}, 500);
	});
	
	linkAbout.click(function()
	{
		linkAbout.addClass("currentLink");
		linkHome.removeClass("currentLink");
		linkClients.removeClass("currentLink");
		linkContact.removeClass("currentLink");
		$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "1"}, 1000);
	});
	
	
	linkContact.click(function()
	{
		linkContact.addClass("currentLink");
		linkContact.removeClass("slideUnder");
		linkHome.removeClass("currentLink");
		linkClients.removeClass("currentLink");
		linkAbout.removeClass("currentLink");
		$("#bck, .intro div, #circles").stop().fadeOut({"opacity": "1"}, 1000);
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