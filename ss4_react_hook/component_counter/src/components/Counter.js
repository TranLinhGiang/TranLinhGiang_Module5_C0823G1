import { useState } from "react";
import "./Counter.css"
function Counter(){
    const [countOne,setCounOne]= useState(0);
    const [countTwo,setCounTwo]= useState(0);
    const click = (countOne) => setCounOne(prev=> prev+1) 
    const clicks = (countTwo) => setCounTwo(prev=> prev+2) 
    const clickss = () =>{
        setCounOne (0)
        setCounTwo (0)
    }
    return(
        <>
        <div className="my-container">
        <h1>Bộ đếm</h1>
        <h1>Count :{countOne}</h1>
        <button onClick={click} className="btn btn-success">Add 1</button>
        <h1>Count :{countTwo}</h1>
        <button onClick={clicks} className="btn btn-success">Add 2</button> 
        <br />
        <br />
        <button onClick={clickss} className="btn btn-success">clean up</button>
        </div>   
        </>
    )
 
}
export default Counter;