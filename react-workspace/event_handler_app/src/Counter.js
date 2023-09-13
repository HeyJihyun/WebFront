import {useState} from 'react'

function Counter(){

    const [number, setNumber] = useState(0)

    const increaseNumber = function(){
        setNumber((num)=> num+1)
    }

    const resetNumber = () =>{
        setNumber(0)
    }

    return <>
        {number}번 클릭
        <button onClick={increaseNumber}>CLICK</button>
        <button onClick={resetNumber}>reset</button>
    </>
}

export default Counter