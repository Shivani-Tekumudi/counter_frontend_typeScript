import {  useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0);


    

return(
    <>
    <h3>Counter App</h3>
    <h4>Count: {count}</h4>
    <button type="button" name="Increment" onClick={(e:React.MouseEvent<HTMLButtonElement>) => setCount(count+1)}> Increment</button>
    <button type="button" name="Decrement" onClick={(e:React.MouseEvent<HTMLButtonElement>) => setCount(count-1)}>Decrement</button>
    </>
)

}