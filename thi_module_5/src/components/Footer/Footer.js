import "./Footer.css";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FastForwardIcon from '@mui/icons-material/FastForward';
import React from "react";
function Footer(){
    return(
        <>
        <div className={"footer display"}>
            <div>
                <button className={"btn"}>
                    <FastRewindIcon className={"color"}/>
                </button>
                <button className={"btn"}>
                    <PauseCircleFilledIcon className={"color"}/>
                </button>
                <button className={"btn"}>
                    <FastForwardIcon className={"color"}/>
                </button>
            </div>
           <div className={"playMusic"}></div>
        </div>
        </>
    )
}
export default Footer;