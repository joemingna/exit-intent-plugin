jQuery(document).ready(function($) {
    
     var mrefreshinterval = 500; // update display every 500ms
     var lastmousex=-1; 
     var lastmousey=-1;
     var lastmousetime;
     var mousetravel = 0;
     var pageWidth = $(window).width();
     var mousey, mousex;
     
    $(document).mousemove(function(e) {
        mousex = e.pageX;
        mousey = e.pageY;

        if (lastmousex > -1)
            mousetravel = Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );

        lastmousex = mousex;
        lastmousey = mousey;
    });

    $(document).on("mouseout", function(){
         if(mousey < 50 && mousetravel > 9 && mousex <400) {
            $("#showpopup").show();
            setTimeout(function(){$("#showpopup").hide();}, 4000);
        }
    })
});