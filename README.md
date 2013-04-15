Exit-intent plugin
------------------

Html integration
****

	<div id="popUpOverlay">
		<div id="overlay"></div>
		<div class="overlayContent">
			
			// style your popUp here

			<input type="button" id="closeExitIntentOverlay" value="X" script="" style="float:right;">
			<h2>Subscribe to our newsletter</h2>
			<p>Enter your Email bellow to receive all news from our awesome web site.</p>
			<input type='email' placeholder="email@hotmail.com">
			<input type='submit' >      
		</div>
	</div>

The id "popUpOverlay", "overlay", "closeExitIntentOverlay" and the class "overlayContent" are 4 id's that the plugin uses to run.

*"popUpOverlay" is the id of your main container of your popup
*"overlay" is the id of your background that will hide the whole page. (You can change the color and apacity with the parameters listed bellow)
*"closeExitIntentOverlay" is the id of your button to close the popup. you can place it anywhere inside the div "overlayContent" as long as its there.
*"overlayContent" is the class of the div witch you will design to create your own popup.

Method and parameters
---------------------

Call the plugin to initialise it with the exit-intent functions.

When you call the plugin for the first time, you can modify the right parameters to customise your popup

	$('#popUpOverlay').exit_intent({
	    'location'         : 'center',
	    'animation-in'     : 'fadeIn',
	    'animation-out'    : 'fadeOut',
	    'speed'            : 'fast',
	    'overlayColor'     : '#378ed5',
	    'overlayOpacity'   : '0.5',
	// those last two are the width and height of the class "overlayContent"
	    'width'            : '680',
	    'height'           : '400'
	});


1.'location' : you can position your content by entering _**'center','top','right','bottom' or 'left'**_
2.'animation-in' : chose between either 'show' or 'fadeIn' for the animation. By default, it will take show if not specified.
3.'animation-out' : chose between either 'hide' or 'fadeOut' for the animation. By default, it will take hide if not specified.
4.'speed' : its the speed of your animation, chose either default speed setting, 'fast', 'normal' or 'slow' or chose a number in millisecond.(1000 for 1 second)
5.'overlayColor' :
6.'overlayOpacity' :
7.'width' :
8.'height'  :






