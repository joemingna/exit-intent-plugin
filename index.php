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
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        

        <div id="popUpOverlay">
           <div id="overlay"></div>
            <div class="overlayContent">
                <h1>Leaving already ?</h1>
                <p>
                    Before you go, can you tell us why you're leaving ?
                </p>
                <form>
                    <textarea type='text' placeholder="I'm leaving because..." id='textMessage' ></textarea>
                    <input type="submit" value="Send" id='sendButton'>
                </form>
            </div>
        </div>

        <script type="text/javascript">
            $(document).ready(function() {
                 $('#popUpOverlay').exit_intent({
                    'location'         : 'center',
                    'animation-in'     : 'fadeIn',
                    'animation-out'    : 'fadeOut',
                    'speed'            : 'fast',
                    'overlayColor'     : '#000000',
                    'overlayOpacity'   : '0.8',
                    'nbTimepopupCanApear':1,
                    'cookieLife'       :30,
                    'width'            : '584',
                    'height'           : '368'
                 });


            });
        </script>

    </body>
</html>