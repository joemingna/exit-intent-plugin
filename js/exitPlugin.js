
(function($){
    //$.fn.extend({ 
         
        var methods = {
	    	init : function( option ) { 
		    	var settings = $.extend( {
	     		 'location'         : 'center',
	     		 'animation-in'     : 'show',
	     		 'animation-out'    : 'hide',
	     		 'speed'         	: 'normal',
	     		 'overlayColor'     : '#000000',
	     		 'overlayOpacity'   : '0.5'
	   			 }, option);
			    // var mrefreshinterval = 500; // update display every 500ms
			     var lastmousex=-1; 
			     var lastmousey=-1;
			     var lastmousetime;
			     var mousetravel = 0;
			     var pageWidth = $(window).width();
			     var pageheight = $(window).height();
			     var mousey, mousex;

			     var overlayId=this;
				$(overlayId).hide();

				$.cookie.raw = true;
				if($.cookie("exit-intent-cookie")==undefined){
				   	var comfirmExitIntent=confirm("Do you want to enable exit-intent ?");
					if (comfirmExitIntent==true){
				  		$.cookie('exit-intent-cookie', 'true', { expires: 30, path: '/' });
				  	}
					else{
				 		 $.cookie('exit-intent-cookie', 'false', { expires: 30, path: '/' });
				 	 }
				 }
			   
				 changeCss();  
				 colorOverlay();

			    $(document).mousemove(function(e) {
			        mousex = e.pageX;
			        mousey = e.pageY;
			        if (lastmousex > -1)
			            mousetravel = Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );

			        lastmousex = mousex;
			        lastmousey = mousey;
			    });

			    $(document).on("mouseout", function(){
			       if(mousey < 50 && mousex<400 || mousey <50 && mousex >pageWidth-400) {
			           var animationType=settings["animation-in"];
			            $(overlayId).show(settings["speed"]);
			       }
			    }) 
				

				$("#closeExitIntentOverlay").click( function(){
						var animationType=settings["animation-out"];
	           	  		$(overlayId).hide(settings["speed"]);
	        	});




				function colorOverlay(){
					$("#overlay").css({  
				        	"position" : "absolute",  
				        	"left" : 0,  
				       		"top" : 0 
				    	});
					$("#overlay").css('width', pageWidth)
					$("#overlay").css('height', pageHeight)
					$("#overlay").css('background-color', settings["overlayColor"])
					$("#overlay").css('opacity', settings["overlayOpacity"])
				}

				// screen resising-----------------------

				$(window).bind("resize", function(){  
				    changeCss();  
				});

				function changeCss(){  
				    var imageHeight = $(overlayId).height();  
				    var imageWidth = $(overlayId).width();  
				    pageWidth = $(window).width();  
				    pageHeight = $(window).height();  
				    

				    if(settings["location"]=="center")	{
				    	$(".overlayContent").css({  
				        	"position" : "absolute",  
				        	"left" : pageWidth / 2 - imageWidth / 2,  
				       		"top" : pageHeight /2 - imageHeight / 2  
				    	});
				    }
				    else if (settings["location"]=="top"){
				    	$(".overlayContent").css({  
				        	"position" : "absolute",  
				        	"left" : pageWidth / 2 - imageWidth / 2,  
				       		"top" : 0 
				    	});
				    }
				     else if (settings["location"]=="right"){
				    	$(".overlayContent").css({  
				        	"position" : "absolute",  
				        	"left" : pageWidth - imageWidth,  
				       		"top" : pageHeight /2 - imageHeight / 2  
				    	});
				    }
				     else if (settings["location"]=="bottom"){
				    	$(".overlayContent").css({  
				        	"position" : "absolute",  
				        	"left" : pageWidth / 2 - imageWidth / 2,  
				       		"top" : pageHeight - imageHeight  
				    	});
				    }
				     else if (settings["location"]=="left"){
				    	$(".overlayContent").css({  
				        	"position" : "absolute",  
				        	"left" : 0,  
				       		"top" : pageHeight /2 - imageHeight / 2  
				    	});
				    }

	 			};     
        	},
	    	show : function( ) {
			     var overlayId=this;
				$(overlayId).show();
	    	},
	    	hide : function( ) { 
			     var overlayId=this;
				 $(overlayId).hide();
	   		 },
	   		/*update : function( content ) { 
	      
	    	}*/
  		};

        	 


     $.fn.exit_intent = function( method ) {
	    // Method calling logic
	    if ( methods[method] ) {
	      	 return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	    	alert("rien")
	      	 return methods.init.apply( this, arguments );
	    } else {
	      	 $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
	    }    
  
    };

    //});
})(jQuery);