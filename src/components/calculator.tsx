import { useState, useRef } from "react"

export default function Calculator(){

    const [inputVal,setVal] =useState<string>("");
    const [finalResult, setFinalResult] =useState<number|string>(0);
      const inputRef = useRef<string>(""); 


     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const value = e.currentTarget.value;
      console.log(typeof(value))

    // Update state and ref
    setVal((prev) => {
      const updated = prev + value;
      inputRef.current = updated; // Keep latest value in ref
      return updated;
    });
  };


const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVal('');
    setFinalResult(0)
}

  const finalCalculation =(e: React.MouseEvent<HTMLButtonElement>) =>{
    if(inputVal.trim() === ''){
         setFinalResult("Error");
         console.log("finalResult",finalResult); return
    }
    const numbersArr:number[]= [];
    const operatorsArr:string[]=[];
  let  currentVal = "";
   for(let i=0 ; i< inputVal.length; i++){
    if(inputVal[i]==='*' || inputVal[i]=== "/" || inputVal[i]=== "-" || inputVal[i]=== "+"){
   numbersArr.push(Number(currentVal));
   currentVal='';
operatorsArr.push(inputVal[i]);

    }
    else{

        currentVal+=inputVal[i];
    }
   }

   if(currentVal !== ''){
     numbersArr.push(Number(currentVal));
   }
  
for(let i =0; i< operatorsArr.length; i++){
if(operatorsArr[i] === "*" || operatorsArr[i] === '/'){
const a= numbersArr[i];
const b= numbersArr[i+1];
if(a===0 && b===0){
setFinalResult("NaN");
return;
}
const result= operatorsArr[i]==="*"? a*b:  Math.floor(a/b);
numbersArr.splice(i, 2, result);
operatorsArr.splice(i,1);
i--;
}


}
let final = numbersArr[0];
  for (let i = 0; i < operatorsArr.length; i++) {
    const op = operatorsArr[i];
    const num = numbersArr[i + 1];

    if (op === "+") final += num;
    else final -= num;
  }
 console.log("numbersArr----------",numbersArr);
   console.log("operatorsArr----------",operatorsArr);

setFinalResult(final);
  }
 

    return(
        <>
        <h2> Calculator</h2>
        <div style={{paddingTop:'30px'}}>
        <input type="text" value={inputVal} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)}}/>
        
        <div style={{paddingTop:'30px'}}>
            {finalResult ? finalResult: (finalResult== 'NaN'? 'NaN' : '')}
            {/* {finalResult} */}
        </div>
       
        
            <button value={7} type="button" onClick={handleClick}>7</button>
              <button value={8} type="button"  onClick={handleClick}>8</button>
              <button value={9} type="button" onClick={handleClick}>9</button>
               <button value='+' type="button" onClick={handleClick}>+</button>
        <br />
             <button value={4} type="button" onClick={handleClick}>4</button>
             <button value={5} type="button" onClick={handleClick}>5</button>
              <button value={6} type="button" onClick={handleClick}>6</button>
               <button value='-' type="button" onClick={handleClick}>-</button>
               <br />
             <button value={1} type="button" onClick={handleClick}>1</button>
             <button value={2} type="button" onClick={handleClick}>2</button>
              <button value={3} type="button"onClick={handleClick}>3</button>
               <button value='*' type="button"onClick={handleClick}>*</button>
               <br />
             <button value={7} type="button" onClick={handleClear}>C</button>
             <button value={0} type="button" onClick={handleClick}>0</button>
              <button value='=' type="button" onClick={finalCalculation}>=</button>
               <button value='/' type="button" onClick={handleClick}>/</button>
        </div>



      
        </>
    )
}