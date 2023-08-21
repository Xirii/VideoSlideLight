# VideoSlideLight
Lightweight HTML5/PHP/JS based Video Slideshow for Digital Signage

Designed for use with Raspberry Digital Signage by Binary Emotions
https://www.binaryemotions.com/digital-signage-systems/raspberry-digital-signage/

Constructed with the assitance of ChatGPT 3.0 along with debug and other adjustments by myself.

Videos will automatically play matching the aspect ratio and resolution of the device used, the playlist will loop and videos advance and cache on playback ending.

# Installation
1. Simply dump the contents of the repository into any public folder.
2. Fill the `videos` directory with your content.
3. Set the URL within the RDS settings panel to match.
4. Enjoy!

You may wish to set an auto-refresh up to an hour. Theoretically, the code should 'cache' the next video. In my testing this happens in most cases but I haven't tested extensively. 

Feel free to fork, modify and extend to your own requirements. 
