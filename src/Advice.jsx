import React from "react";

const Advice = () => {

    const [advice,setAdvice] = React.useState('');



    const fetchAdvice = () => {
        fetch("	https://api.adviceslip.com/advice")
            .then(res => {
                if(!res.ok){
                    throw new Error("Network resonse was not ok")
                }
                return res.json();
            })

            .then(data => {
                setAdvice(data.slip.advice)
            })
            .catch(error => {
                console.error('there has been a problem')
            })
    }


    React.useEffect(() => {
        fetchAdvice();
    },[])

    const change = () => {
        fetchAdvice();
    }
    return(
        <div className="container">
            <div className="container-flex">
                <div>
                    <p className="container__p">Advice</p>
                </div>
                <div>
                    <h4 className="container__h4">"{advice}"</h4>
                </div>
                <div>
                    <img  src="../../images/pattern-divider-desktop.svg" alt="pattern" className="pattern" />
                </div>
            </div>
            <div className="dice-container">
                <button className="btn"><img src="../../images/icon-dice.svg" alt="dice" className="dice" onClick={change}/></button>
            </div>
        </div>
    )
}   
export default Advice;