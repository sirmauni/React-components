/**
* Calculator Component
*/

import './Calculator.css';
import CalcTitle from "./CalcTitle";
import CalcScreen from './CalcScreen';
import CalcButton from "./CalcButton";

import { useState } from 'react';

function Calculator() {

    const [calcData, setCalcData] = useState({
        displayNum: 0,
        prevTotal: undefined,
        action: undefined,
        clearCount: 0
    });

    /* Calc functions */
    function clear() {

        var newCalcData = calcData;

        newCalcData.displayNum = 0;

        if(newCalcData.clearCount > 0) {
            newCalcData.prevTotal = undefined;
            newCalcData.action = undefined
            newCalcData.clearCount = 0;
        } else {
            newCalcData.displayNum = 0;
            newCalcData.clearCount += 1;
        }

        // initailize current display number to 0
        newCalcData.displayNum = 0;
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function invert() {
        var newCalcData = calcData;

        newCalcData.displayNum = newCalcData.displayNum * -1;

        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function divide() {
        
        var newCalcData = calcData;

        if(newCalcData.action !== undefined) {
            // perform previous action
            equals();
        }

        // set action to add
        newCalcData.action = "divide";

        // set previous number to current number
        newCalcData.prevTotal = newCalcData.displayNum;

        // initailize current display number to 0
        newCalcData.displayNum = 0;
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function percentage() {
        var newCalcData = calcData;

        newCalcData.displayNum = newCalcData.displayNum * 0.01;

        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function decimal() {
        var newCalcData = calcData;

        // initailize current display number to 0
        newCalcData.displayNum = newCalcData.displayNum + ".";
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function multiply(btnText) {
        var newCalcData = calcData;

        if(newCalcData.action !== undefined) {
            // perform previous action
            equals();
        }

        // set action to add
        newCalcData.action = "multiply";

        // set previous number to current number
        newCalcData.prevTotal = newCalcData.displayNum;

        // initailize current display number to 0
        newCalcData.displayNum = 0;
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function subtract(btnText) {
        var newCalcData = calcData;

        if(newCalcData.action !== undefined) {
            // perform previous action
            equals();
        }

        // set action to add
        newCalcData.action = "subtract";

        // set previous number to current number
        newCalcData.prevTotal = newCalcData.displayNum;

        // initailize current display number to 0
        newCalcData.displayNum = 0;
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }
    
    function add(btnText) {
        console.log("Adding...");

        var newCalcData = calcData;

        if(newCalcData.action !== undefined) {
            // perform previous action
            equals();
        }

        // set action to add
        newCalcData.action = "add";

        // set previous number to current number
        newCalcData.prevTotal = newCalcData.displayNum;

        // initailize current display number to 0
        newCalcData.displayNum = 0;
        
        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function equals() {
        console.log("calculating total");

        var total = 0;
        var newCalcData = calcData;

        if(newCalcData.prevTotal === undefined ) {
            if(newCalcData.displayNum === undefined) {
                total = "ERR";
            } else {
                total = newCalcData.displayNum;
            }
        } else {
            if(newCalcData.displayNum === undefined) {
                total = "ERR";
            } else {
                if(newCalcData.action === "add") {
                    total = parseFloat(newCalcData.prevTotal) + parseFloat(newCalcData.displayNum);
                } else if(newCalcData.action === "subtract") {
                    total = parseFloat(newCalcData.prevTotal) - parseFloat(newCalcData.displayNum);
                } else if(newCalcData.action === "multiply") {
                    total = parseFloat(newCalcData.prevTotal) * parseFloat(newCalcData.displayNum);
                } else if(newCalcData.action === "divide") {
                    total = parseFloat(newCalcData.prevTotal) / parseFloat(newCalcData.displayNum);
                } else {
                    alert("Action not recognized!");
                }
            }
        }

        // set new display data
        newCalcData.prevTotal = "";
        newCalcData.displayNum = total;
        newCalcData.action = undefined;

        // set calculator data
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    function appendNumString(btnText) {
        // append number to display num

        var newCalcData = calcData;

        if(calcData.displayNum !== undefined && calcData.displayNum !== 0) {
            newCalcData.displayNum = calcData.displayNum + btnText;
        } else {
            newCalcData.displayNum = btnText;
        }
        
        //setCalcData(newCalcData);
        setCalcData(calcData => ({
            ...calcData,
            ...newCalcData
        }));
    }

    return (<div className="calculatorContainer">
        <CalcTitle name="React-o-lator"/>
        <CalcScreen data={calcData} setCalcData={setCalcData}/>
        <CalcButton btnText={"AC"} btnType={"mod"} action={clear}/>
        <CalcButton btnText={"+/-"} btnType={"mod"} action={invert}/>
        <CalcButton btnText={"/"} btnType={"mod"} action={divide}/>
        <CalcButton btnText={"%"} btnType={"mod"} action={percentage}/>
        <CalcButton btnText={"9"} action={appendNumString}/>
        <CalcButton btnText={"8"} action={appendNumString}/>
        <CalcButton btnText={"7"} action={appendNumString}/>
        <CalcButton btnText={"x"} btnType={"action"} action={multiply}/>
        <CalcButton btnText={"6"} action={appendNumString}/>
        <CalcButton btnText={"5"} action={appendNumString}/>
        <CalcButton btnText={"4"} action={appendNumString}/>
        <CalcButton btnText={"-"} btnType={"action"} action={subtract}/>
        <CalcButton btnText={"3"} action={appendNumString}/>
        <CalcButton btnText={"2"} action={appendNumString}/>
        <CalcButton btnText={"1"} action={appendNumString}/>
        <CalcButton btnText={"+"} btnType={"action"} action={add}/>
        <CalcButton btnText={"0"} span={1} action={appendNumString}/>
        <CalcButton btnText={"."} action={decimal}/>
        <CalcButton btnText={"="} btnType={"action"} action={equals}/>
    </div>);
}

export default Calculator;