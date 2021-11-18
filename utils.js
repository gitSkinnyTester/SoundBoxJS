/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */

class Beat {
   constructor(audioSrc){
       this.a = new Audio(audioSrc);
   }

   playFunc = () =>{
    this.a.currentTime = 0;
    this.a.play();
    this.a.volume = 0.2;
    }

}


/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode, pic, pic2){
        this.pic = pic;
        this.pic2 = pic2;
        this.color = color;
        
        /** note that the keyCode VALUE here is an ID property of an element of a specific button,
         * this was already a default set from the computer/browser... */
        this.element = document.getElementById(keyCode)
        this.setButtonBorderColorInHTML();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonBorderColorInHTML = () => {
        this.element.style.borderColor = this.color;
        this.element.style.backgroundImage = this.pic;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundImage= this.pic2;
        this.element.style.backgroundColor= this.color;
        this.element.style.boxShadow= `0px 0px 2px 5px ${this.color}`
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundImage= this.pic;
        this.element.style.backgroundColor= '';
        this.element.style.borderColor = '';
        this.element.style.boxShadow= '';
    }
}