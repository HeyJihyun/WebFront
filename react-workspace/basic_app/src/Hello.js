import './Hello.css'

function Hello(props) {

    const msg = '안녕하세요 React 세계에 오신것을 환영합니다'

    const style = {
        color: 'blue',
        backgroundColor: 'orange'
    }

    return(
    <>
        <h1 style={style}>Hello React!!!!!!!!!</h1>
        <h1 className="hstyle">{msg}</h1>
        <h1>안녕하세요 {props.name}{props.childern}!</h1>
    </>
    )
}

Hello.defaultProps = {
    name: 'REACT.JS'
}

export default Hello