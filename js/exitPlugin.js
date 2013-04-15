
(function($){
    //$.fn.extend({ 
        var globalSettings;

        var methods = {
            init : function(option) {
                //alert(option['location'])
                console.log(option)
                globalSettings = $.extend({}, {
                 'location'         : 'center',
                 'animation-in'     : 'show',
                 'animation-out'    : 'hide',
                 'speed'            : 'normal',
                 'overlayColor'     : '#ff3399',
                 'overlayOpacity'   : '0.5',
                 'width'            : '800',
                 'height'           : '200'
                 }, option);

                //alert(globalSettings['width'])

                 var lastmousex=-1;
                 var lastmousey=-1;
                 var lastmousetime;
                 var mousetravel = 0;
                 var pageWidth = $(window).width();
                 var pageheight = $(window).height();
                 var mousey, mousex;

                 var overlayId=this;
                $(overlayId).hide();

                cookieFunction();

                 changePosision();
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
                        showOverlay(overlayId);
                   }
                });


                $("#closeExitIntentOverlay").click( function(){
                        hideOverlay(overlayId);
                });

                // screen resising-----------------------

                $(window).bind("resize", function(){
                    changePosision();
                    colorOverlay();
                });


            },
            show : function(animationType,animationSpeed) {
                 var overlayId=this;
                 if(animationType){globalSettings['animation-in']=animationType;}
                 if(animationSpeed){globalSettings['speed']=animationSpeed;}
                 showOverlay(overlayId);

            },
            hide : function(animationType,animationSpeed) {
                var overlayId=this;
                 if(animationType){globalSettings['animation-out']=animationType;}
                 if(animationSpeed){globalSettings['speed']=animationSpeed;}
                hideOverlay(overlayId);
             },
            setPosition : function(newPosition) {
                globalSettings['location']=newPosition;
                changePosision();
             },
            colorTheOverlay : function(newColor,newAlpha) {
                globalSettings['overlayColor']=newColor;
                globalSettings['overlayOpacity']=newAlpha;
                colorOverlay();
             },
            checkCookies : function( ) {
                cookieFunction();
             }
        };


        function showOverlay(overlayId){
          if(globalSettings["animation-in"]=='show'){$(overlayId).show(globalSettings["speed"]);}
          else if(globalSettings["animation-in"]=='fadeIn'){$(overlayId).fadeIn(globalSettings["speed"]);}
        }

        function hideOverlay(overlayId){
          if(globalSettings["animation-out"]=='hide'){$(overlayId).hide(globalSettings["speed"]);}
          else if(globalSettings["animation-out"]=='fadeOut'){$(overlayId).fadeOut(globalSettings["speed"]);}
        }

        function colorOverlay(){
            $("#overlay").css({
                    "position" : "absolute",
                    "left" : 0,
                    "top" : 0
                });
            $("#overlay").css('width', pageWidth);
            $("#overlay").css('height', pageHeight);
            $("#overlay").css('background-color', globalSettings["overlayColor"]);
            $("#overlay").css('opacity', globalSettings["overlayOpacity"]);
        }


        function changePosision(){
            var imageHeight = globalSettings['height'];
            var imageWidth = globalSettings['width'];
            pageWidth = $(window).width();
            pageHeight = $(window).height();

            if(globalSettings["location"]=="center")  {
                $(".overlayContent").css({
                    "position" : "absolute",
                    "left" : pageWidth / 2 - imageWidth / 2,
                    "top" : pageHeight /2 - imageHeight / 2
                });
            }
            else if (globalSettings["location"]=="top"){
                $(".overlayContent").css({
                    "position" : "absolute",
                    "left" : pageWidth / 2 - imageWidth / 2,
                    "top" : 0
                });
            }
             else if (globalSettings["location"]=="right"){
                $(".overlayContent").css({
                    "position" : "absolute",
                    "left" : pageWidth - imageWidth,
                    "top" : pageHeight /2 - imageHeight / 2
                });
            }
             else if (globalSettings["location"]=="bottom"){
                $(".overlayContent").css({
                    "position" : "absolute",
                    "left" : pageWidth / 2 - imageWidth / 2,
                    "top" : pageHeight - imageHeight
                });
            }
             else if (globalSettings["location"]=="left"){
                $(".overlayContent").css({
                    "position" : "absolute",
                    "left" : 0,
                    "top" : pageHeight /2 - imageHeight / 2
                });
            }

        }

        function cookieFunction(){
            $.cookie.raw = true;
            if(!$.cookie("exit-intent-cookie")){
                var comfirmExitIntent=confirm("Do you want to enable exit-intent ?");
                if (comfirmExitIntent===true){
                    $.cookie('exit-intent-cookie', 'true', { expires: 30, path: '/' });
                }
                else{
                     $.cookie('exit-intent-cookie', 'false', { expires: 30, path: '/' });
                 }
             }
        }





     $.fn.exit_intent = function( method ) {
        // Method calling logic
        if ( methods[method] ) {
             return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
             return methods.init.apply( this, [method] );
        } else {
             $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

    //});
})(jQuery);