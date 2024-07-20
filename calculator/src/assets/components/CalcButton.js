
import "./CalcButton.css";

function CalcButton(props) {

    var compiledClassNames = ["calcButton"];

    // determine class names
    if(props.btnType === "mod") {
        compiledClassNames.push("modBtn");
    } else if(props.btnType === "action") {
        compiledClassNames.push("actionBtn");
    } else {
        compiledClassNames.push("defaultBtn");
    }

    if(props.span !== undefined && props.span > 0) { 
        compiledClassNames.push("dbsBtn");
    }

    // compile class names
    compiledClassNames = compiledClassNames.join(" ");

    function performAction() {
        props.action(props.btnText);
    }

    return (
        <button className={compiledClassNames} onClick={performAction}>
            {props.btnText}
        </button>
    );
}

export default CalcButton;