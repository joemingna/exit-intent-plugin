<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"><!--<![endif]--><head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/exitPlugin.js"></script>
    </head>
    <body>
        

        <div id="popUpOverlay">
           <div id="overlay"></div>
            <div class="overlayContent" style="width:680px;height:400px;color:white; background-color:#3990d7;border:5px solid white">
                <div style="margin:0 auto;width:500px;height:250px;background-color:white;border-radius:5px;margin-top: 75px;overflow:hidden;">
                    <input type="button" id="closeExitIntentOverlay" value="X" script="" style="float:right;">
                    <h2 style="clear:both;color:black;margin:30px 0 0 20px">Subscribe to our newsletter</h2>
                    <p style="clear:both;color:black;margin:55px 0 0 20px;width:350px;">Enter your Email bellow to receive all news from our awesome web site.</p>
                    <input type='email' placeholder="email@hotmail.com" style="width:300px;margin:20px 0 0 20px">
                    <input type='submit' style="height:50px;">
                </div>
            
            </div>
        </div>

        <script type="text/javascript">
            $(document).ready(function() {
                 $('#popUpOverlay').exit_intent({
                    'location'         : 'center',
                    'animation-in'     : 'fadeIn',
                    'animation-out'    : 'fadeOut',
                    'speed'            : 'fast',
                    'overlayColor'     : '#378ed5',
                    'overlayOpacity'   : '0.5',
                    'width'            : '680',
                    'height'           : '400'
                 });

            });
        </script>

    </body>
</html>