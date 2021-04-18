
import React ,{useState} from "react";
        
const Counter =()=>{
    const [num,setNum]=useState(0);
    const incNum=()=>{
        setNum(num+1);
    }
    const decNum=()=>{
        if(num>0){
        setNum(num-1);
        }else{
            alert("Sorry zero limit reached 😲");
        
            setNum(0);
        }
    }
    const reset=()=>{
        setNum(0);
    }
    return(
<>
<div className="main_div">
    <div className="center_div">
        <h1 > {num} </h1>
        
        <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
</div>
</>

    );
}
export default Counter;