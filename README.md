Exit-intent plugin
------------------

Html integration
****

	<div id="popUpOverlay">
		<div id="overlay"></div>
		<div class="overlayContent">
			
			// style your popUp here
			// design example -------------------------------------------------------------------
			<input type="button" id="closeExitIntentOverlay" value="X" script="" style="float:right;">
			<h2>Subscribe to our newsletter</h2>
			<p>Enter your Email bellow to receive all news from our awesome web site.</p>
			<input type='email' placeholder="email@hotmail.com">
			<input type='submit' >   
			//-----------------------------------------------------------------------------------   
		</div>
	</div>

The id "popUpOverlay", "overlay", "closeExitIntentOverlay" and the class "overlayContent" are 4 id's that the plugin uses to run.

* "popUpOverlay" is the id of your main container of your popup
* "overlay" is the id of your background that will hide the whole page. (You can change the color and apacity with the parameters listed bellow)
* "closeExitIntentOverlay" is the id of your button to close the popup. you can place it anywhere inside the div "overlayContent" to close the popup automaticaly or call the hide method when you want to close it later.
* "overlayContent" is the class of the div witch you will design to create your own popup.

Parameters
----------

Call the plugin to initialise it with the exit-intent functions.

When you call the plugin for the first time, you can modify the right parameters to customise your popup

	$('#popUpOverlay').exit_intent({
	    'location'         : 'center',
	    'animation-in'     : 'fadeIn',
	    'animation-out'    : 'fadeOut',
	    'speed'            : 'fast',
	    'overlayColor'     : '#378ed5',
	    'overlayOpacity'   : '0.5',
	    'nbTimepopupCanApear':1,
	    'cookieLife'       :30,
	// those last two are the width and height of the class "overlayContent"
	    'width'            : '680',
	    'height'           : '400'
	});


1. 'location' : you can position your content by entering _**'center','top','right','bottom' or 'left'**_
2. 'animation-in' : chose between either 'show' or 'fadeIn' for the animation. By default, it will take show if not specified.
3. 'animation-out' : chose between either 'hide' or 'fadeOut' for the animation. By default, it will take hide if not specified.
4. 'speed' : its the speed of your animation, chose either default speed setting, 'fast', 'normal' or 'slow' or chose a number in millisecond.(1000 for 1 second).
5. 'overlayColor' : chose the collor of your overlay in hexadicimal (#000000).
6. 'overlayOpacity' : chose between 0 to 1 where 0 is invisible (ex : 0.5).
7. 'nbTimepopupCanApear' : Set the number of time your popup will appear.
8. 'cookieLife' :The life spawn of your cookie. by default, its 30 days. The user wont see your popup after it reaches the limit of time it can appear with the 'nbTimepopupCanApear' parameter. Until the cookie is destroyed after the day limit you setted (numbers = number of day)
9. 'width' : Enter the exact width of your div "overlayContent" for a good positionning.
10. 'height'  : Enter the exact height of your div "overlayContent" for a good positionning.

Methods
-------

* init : call this method to initialise the plugin. $('#popUpOverlay').exit_intent('init',{rest of you settings}). By default it will do it.
* show : will make the popup appear when you desire. It will accept two more parameters. One for the desired animation and the second for the speed. $('#popUpOverlay').exit_intent('show','animation parameter','speed parameter').
* hide :will make the popup dissapear when you desire. It will accept two more parameters. One for the desired animation and the second for the speed. $('#popUpOverlay').exit_intent('hide','animation parameter','speed parameter').
* setPosition : change the position of you div  "overlayContent". It accept 'center', 'top', 'right', 'bottom', 'left'. $('#popUpOverlay').exit_intent('setPosition','desired position')
* colorTheOverlay : Change the color of the overlay anytime you want by giving the color and opacity has parameter. $('#popUpOverlay').exit_intent('colorTheOverlay','desired color','disired opacity')
* checkCookies : check if the cookie is created. If it is created, it will return the number of time the popup has appeared to the function of the exit-intent.
* resetCookie : this method permits you to reset the cokkie. So the next time the user goes on your site, he will see your popup. $('#popUpOverlay').exit_intent('resetCookie')


>** Be sure to not make mistakes in the parameters if you want the plugin to work correctly.


