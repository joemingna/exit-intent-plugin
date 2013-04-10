
(function($){
    $.fn.extend({ 
         //plugin name - animatemenu
        exit_intent: function() {
           
		     var mrefreshinterval = 500; // update display every 500ms
		     var lastmousex=-1; 
		     var lastmousey=-1;
		     var lastmousetime;
		     var mousetravel = 0;
		     var pageWidth = $(window).width();
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
		            $(overlayId).show();
		            //setTimeout(function(){$(overlayId).hide();}, mrefreshinterval);
		        }
		    }) 
			

			$("#closeExitIntentOverlay").click( function(){
           	  $(overlayId).hide();
        	});


        	    
        }
    });
})(jQuery);