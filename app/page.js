"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [hexadecimal, setHexadecimal] = useState("0");
  const [decimal, setDecimal] = useState('0');
  const [octal, setOctal] = useState("0");
  const [binary, setBinary] = useState("0");
  const [progValue, setProgValue] = useState("dec");

  const [currentScreen, setCurrentScreen] = useState("0");
  const [firstInput, setFirstInput] = useState(null);
  const [secondInput, setSecondInput] = useState(null);
  const [operator, setOperator] = useState(false);
  const [operatorSymbol, setOperatorSymbol] = useState(null);

  const handleProgValue = (prog) =>{
    setProgValue(prog);

    const value = currentScreen;

    if (progValue === 'hex') {
      setHexadecimal(value);
      convertFromHexadecimal(value);
    } else if (progValue === 'dec') {
      setDecimal(value);
      convertFromDecimal(value);
    } else if (progValue === 'oct') {
      setOctal(value);
      convertFromOctal(value);
    } else if (progValue === 'bin') {
      setBinary(value);
      convertFromBinary(value);
    }
  }

  const handleInputChange = () => {
    const value = currentScreen;

    if (progValue === 'hex') {
      setHexadecimal(value);
      convertFromHexadecimal(value);
    } else if (progValue === 'dec') {
      setDecimal(value);
      convertFromDecimal(value);
    } else if (progValue === 'oct') {
      setOctal(value);
      convertFromOctal(value);
    } else if (progValue === 'bin') {
      setBinary(value);
      convertFromBinary(value);
    }
  }

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
    setHexadecimal('0');
    setDecimal('0');
    setBinary('0');
    setOctal('0');
  }

  const convertFromHexadecimal = () => {
    const value = currentScreen;
    const decimalValue = parseInt(value, 16);
    setDecimal(decimalValue.toString());
    setOctal(decimalValue.toString(8));
    setBinary(decimalValue.toString(2));
  };

  const convertFromDecimal = () => {
    const value = currentScreen;
    const decimalValue = parseInt(value);
    setHexadecimal(decimalValue.toString(16));
    setOctal(decimalValue.toString(8));
    setBinary(decimalValue.toString(2));
  };

  const convertFromOctal = () => {
    const value = currentScreen;
    const decimalValue = parseInt(value, 8);
    setHexadecimal(decimalValue.toString(16));
    setDecimal(decimalValue.toString());
    setBinary(decimalValue.toString(2));
  };

  const convertFromBinary = () => {
    const value = currentScreen;
    const decimalValue = parseInt(value, 2);
    setHexadecimal(decimalValue.toString(16));
    setDecimal(decimalValue.toString());
    setOctal(decimalValue.toString(8));
  };


  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.inputs}>
          <input type="text" id="current" placeholder={currentScreen} />
        </div>

        <div className={styles.prog}>
          <div className={styles.myprog}>
            <label
              htmlFor="hexadecimal"
              className={progValue === "hex" ? "active" : "labeling"}
            >
              Hex:
            </label>
            <input className="uppercase" type="text" id="hexadecimal" placeholder={hexadecimal} onChange={handleInputChange} />
          </div>

          <div className={styles.myprog}>
            <label
              htmlFor="decimal"
              className={progValue === "dec" ? "active" : "labeling"}
            >
              Dec:
            </label>
            <input type="text" id="decimal" placeholder={decimal} onChange={handleInputChange} />
          </div>

          <div className={styles.myprog}>
            <label
              htmlFor="octal"
              className={progValue === "oct" ? "active" : "labeling"}
            >
              Oct:
            </label>
            <input type="text" id="octal" placeholder={octal} onChange={handleInputChange} />
          </div>

          <div className={styles.myprog}>
            <label
              htmlFor="binary"
              className={progValue === "bin" ? "active" : "labeling"}
            >
              Bin:
            </label>
            <input type="text" id="binary" placeholder={binary} onChange={handleInputChange} />
          </div>
        </div>
      </div>

      <div className="btns">
        <div className="up-btns">
          <div className="letters">
            <button className="btn" onClick={() => handleLetters('A')}>A</button>
            <button className="btn" onClick={() => handleLetters('B')}>B</button>
            <button className="btn" onClick={() => handleLetters('C')}>C</button>
            <button className="btn" onClick={() => handleLetters('D')}>D</button>
            <button className="btn" onClick={() => handleLetters('E')}>E</button>
            <button className="btn" onClick={() => handleLetters('F')}>F</button>
          </div>
        </div>

        <div className="down-btns">
          <div className="rows">
            <button className="btn" onClick={() => handleProgValue("hex")}>
              HEX
            </button>
            <button className="btn" onClick={() => handleProgValue("dec")}>
              DEC
            </button>
            <button className="btn" onClick={() => handleProgValue("oct")}>
              OCT
            </button>
            <button className="btn" onClick={() => handleProgValue("bin")}>
              BIN
            </button>
          </div>

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
