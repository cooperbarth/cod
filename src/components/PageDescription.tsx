import React, { Component } from "react";
import "./PageDescription.css";

import Style from "../util/StyleConstants";

class PageDescription extends Component<{}, {}> {

    render() {
        return <section className="page-description"
                        style={{ width: Style.TrackAreaWidth }}>
            <h1>Welcome to Cod!</h1>
            <p>
                Cod is an online tool for audio playback and labeling. Simply 
                import an audio file and click on the <b>Generate Labels </b>
                button to add labels to the track. Press the <b>Play </b> button 
                to play the track starting at the playhead. Select a label to move 
                the playhead to it.
            </p>
            <h3>Keyboard Navigation:</h3>
            <ol>
                <li>Select the play button or press alt + P to play or pause the audio.</li>
                <li>
                    Press the left and right arrow keys while the playhead 
                    is focused to move the playhead.
                </li>
                <li>Press enter on a label to move the playhead to that location.</li>
                <li>Press alt + L to create a new label at the playhead location.</li>
                <li>
                    Press alt + E to begin editing a label. Press this keybind again 
                    or navigate away from the label to save your edits.
                </li>
                <li>Press alt + D to remove the focused label.</li>
                <li>
                    Press alt + N to jump the playhead to the previous label and focus 
                    that label.
                </li>
                <li>
                    Press alt + the left and right arrow keys while a label is 
                    selected to focus the next or previous label with the same name.
                </li>
            </ol>
        </section>
    }

}

export default PageDescription;
