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

1-"popUpOverlay" is the id of your main container of your popup
2-"overlay" is the id of your background that will hide the whole page. (You can change the color and apacity with the parameters listed bellow)
3-"closeExitIntentOverlay" is the id of your button to close the popup. you can place it anywhere inside the div "overlayContent" as long as its there.
4-"overlayContent" is the class of the div witch you will design to create your own popup.
