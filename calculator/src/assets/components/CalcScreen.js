/**
*   Calculator Screen
*/

import "./CalcScreen.css";

function CalcScreen(props) {
    console.log(props.data);
    return (<div className="calcScreen">
        <span>{props.data.prevTotal}</span>
        <h1>{props.data.displayNum}</h1>
    </div>);
}

export default CalcScreen;