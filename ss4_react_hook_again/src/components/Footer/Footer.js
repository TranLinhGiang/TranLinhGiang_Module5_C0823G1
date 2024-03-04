import FastRewindIcon from "@mui/icons-material/FastRewind";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import HeadphonesBatteryIcon from '@mui/icons-material/HeadphonesBattery';
import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import { useEffect, useState } from "react";

function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after a simulated delay
    },1000 ); // Adjust the delay as needed
  }, []);
  return (
    <>
     {isLoading ? (
        <div className="loading-indicator"></div> // Display loading indicator
      ) : (
      <div className="display footer">
        <div className="col-lg-3"></div>
        <div className="col-lg-1">
          <button style={{ border: "none" }} className="none">
            <FastRewindIcon />
          </button>
        </div>
        <div className="col-lg-1">
          <button style={{ border: "none" }} className="none">
            <PauseCircleIcon />
          </button>
        </div>
        <div className="col-lg-1">
          <button style={{ border: "none" }} className="none">
            <FastForwardIcon />
          </button>
        </div>
        <div className="col-lg-6">
          <div className="music">.</div>
        </div>
        <div className="headphone">
          <HeadphonesBatteryIcon/>
        </div>
        <div className="bluetoot">
          <BluetoothAudioIcon/>
        </div>
        <div className="bluetoot">
          <VolumeDownIcon/>
        </div>
      </div>
      )}
    </>
  );
}
export default Footer;
