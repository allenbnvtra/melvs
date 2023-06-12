"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [currentScreen, setCurrentScreen] = useState("0");
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [operator, setOperator] = useState(false);
  const [operatorSymbol, setOperatorSymbol] = useState(null);

  const handleFirstInput = (number) => {
    if (firstInput === null) {
      setFirstInput(number);
      setCurrentScreen(number);
      return;
    } else {
      setFirstInput(firstInput + number);
      setCurrentScreen(firstInput + number);
      return;
    }
  };

  const handleSecondInput = (number) => {
    if (secondInput === null) {
      setSecondInput(number);
      setCurrentScreen(number);
      return;
    } else {
      setSecondInput(secondInput + number);
      setCurrentScreen(secondInput + number);
      return;
    }
  };

  const handleOperator = (oper) => {
    setOperator(true);
    setOperatorSymbol(oper);

    if (operator !== true) {
      setCurrentScreen(oper);
    }
  };

  const handleSubmit = () => {
    if (operatorSymbol === "+") {
      const val = parseInt(firstInput) + parseInt(secondInput);
      setCurrentScreen(val);
      setOperator(false);
      setOperatorSymbol(null);
      setFirstInput(val);
      setSecondInput(null);
    } else if (operatorSymbol === "-") {
      const val = parseInt(firstInput) - parseInt(secondInput);
      setOperator(false);
      setOperatorSymbol(null);
      setFirstInput(val);
      setSecondInput(null);
      setCurrentScreen(val);
    } else if (operatorSymbol === "x") {
      const val = parseInt(firstInput) * parseInt(secondInput);
      setOperator(false);
      setOperatorSymbol(null);
      setFirstInput(val);
      setSecondInput(null);
      setCurrentScreen(val);
    } else if (operatorSymbol === "/") {
      const val = parseInt(firstInput) / parseInt(secondInput);
      setOperator(false);
      setOperatorSymbol(null);
      setFirstInput(val);
      setSecondInput(null);
      setCurrentScreen(val);
    }
  };

  const handleDelete = () => {
    setOperator(false);
    setOperatorSymbol(null);
    setFirstInput(null);
    setSecondInput(null);
    setCurrentScreen('0');
  }
  
  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.inputs}>
          <input type="text" id="current" placeholder={currentScreen} />
        </div>
      </div>

      <div className={styles.btns}>
        <div className="down-btns">
          <div className="rows">
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("9")
                  : () => handleFirstInput("7")
              }
            >
              7
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("8")
                  : () => handleFirstInput("8")
              }
            >
              8
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("7")
                  : () => handleFirstInput("9")
              }
            >
              9
            </button>
            <button
              className="btn"
              id="difcol"
              onClick={() => handleOperator("/")}
            >
              ÷
            </button>
          </div>

          <div className="rows">
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("4")
                  : () => handleFirstInput("4")
              }
            >
              4
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("5")
                  : () => handleFirstInput("5")
              }
            >
              5
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("6")
                  : () => handleFirstInput("6")
              }
            >
              6
            </button>
            <button
              className="btn"
              id="difcol"
              onClick={() => handleOperator("x")}
            >
              x
            </button>
          </div>

          <div className="rows">
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("1")
                  : () => handleFirstInput("1")
              }
            >
              1
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("2")
                  : () => handleFirstInput("2")
              }
            >
              2
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("3")
                  : () => handleFirstInput("3")
              }
            >
              3
            </button>
            <button
              className="btn"
              id="difcol"
              onClick={() => handleOperator("-")}
            >
              -
            </button>
          </div>

          <div className="rows">
            <button className="btn" id="difcol" onClick={handleDelete}>
              AC
            </button>
            <button
              className="btn"
              onClick={
                operator
                  ? () => handleSecondInput("0")
                  : () => handleFirstInput("0")
              }
            >
              0
            </button>
            <button className="btn" id="equal" onClick={handleSubmit}>
              =
            </button>
            <button
              className="btn"
              id="difcol"
              onClick={() => handleOperator("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
