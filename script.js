/**
 * TODO: Create a keydown listener to track what keys are hit
 * TODO: Create a Beat class to represent the beat object in utils.js
 * TODO: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * TODO: Button pt1: Initialize color and element values
 * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * TODO: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "103": {
        beat: new Beat("assets/bulalord1.mp3"),
        button: new Button("#00fffe",103, `url(assets/bulalord1.PNG)`)
    },
    "104": {
        beat: new Beat("assets/cheese1.mp3"),
        button: new Button("#00fffe",104, `url(assets/cheese1.PNG)`)
    },
    "105": {
        beat: new Beat("assets/listen1.mp3"),
        button: new Button("#00fffe",105, `url(assets/listen1.PNG)`)
    },
    "100": {
        beat: new Beat("assets/gumalaw1.mp3"),
        button: new Button("#00fffe",100, `url(assets/gumalaw1.PNG)`)
    },
    "101": {
        beat: new Beat("assets/mabilisan2.mp3"),
        button: new Button("#00fffe",101, `url(assets/pano1.PNG)`, `url(assets/pano2.PNG)`)
    },
    "102": {
        beat: new Beat("assets/mb1.mp3"),
        button: new Button("#00fffe",102, `url(assets/pano2.PNG)`)
    },
    "97": {
        beat: new Beat("assets/batusay1.mp3"),
        button: new Button("#00fffe",97, `url(assets/guardian1.PNG)`)
    },
    "98": {
        beat: new Beat("assets/aaa.mp3"),
        button: new Button("#00fffe",98, `url(assets/yey1.PNG)`)
    },
    "99": {
        beat: new Beat("assets/budoy1.mp3"),
        button: new Button("#00fffe",99, `url(assets/budoy1.PNG)`)
    }
}
/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */


triggerBeat = (event) => {
    let x = event.keyCode
    if(x in beats){
        let bit = beats[x]
        bit.beat.playFunc()
        bit.button.select()
    }
    console.log(event)
}
document.addEventListener("keydown", triggerBeat);


triggerReset = (event) => {
    let x = event.keyCode
    if(x in beats){
        let bit = beats[x]
        bit.button.deselect();
    }
}
document.addEventListener("keyup", triggerReset);