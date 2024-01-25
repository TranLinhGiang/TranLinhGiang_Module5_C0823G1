import { useState } from "react";

function Counter(){
    const [countOne,setCounOne]= useState(0);
    const [countTwo,setCounTwo]= useState(0);
    const click = (countOne) => setCounOne(prev=> prev+1) 
    const clicks = (countTwo) => setCounTwo(prev=> prev+2) 
    return(
        <>
        <h1>Bộ đếm</h1>
        <h1>Count :{countOne} </h1>
        <button onClick={click}>Add 1</button>
        <h1>Count :{countTwo}</h1>
        <button onClick={clicks}>Add 2</button>
        </>
    )
}
export default Counter;