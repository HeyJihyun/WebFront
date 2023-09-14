import { useState } from 'react';
function Login(){


    const [id, setId] = useState('')
    const [pwd, setPw] = useState('')

    const inputText = (e) => {
        const {value} = e.target
        setId(value)
    }

    const inputPw = function(e){
        setPw(e.target.value)
    }

    return <>
    <div>ID : <input value={id} onChange={inputText}/></div>
    <div>PASSWORD : <input type="password" value={pwd} onChange={inputPw}/></div>
    <hr/>
    </>
}

export default Login