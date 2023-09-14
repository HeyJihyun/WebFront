import { useState } from 'react';
function Login(){

    const[inputs, setInputs] = useState({id:'', pwd:''})
    const {id, pwd} = inputs

    const onInput = function(e){
        const {value, name} = e.target
        setInputs({...inputs, [name]:value})
    }

    return <>
    <h1>{id}님 환영!!!</h1>
    <div>ID : <input value={id} onChange={onInput} name="id"/></div>
    <div>PASSWORD : <input type="password" value={pwd} name="pwd" onChange={onInput}/></div>
    <hr/>
    </>
}

export default Login