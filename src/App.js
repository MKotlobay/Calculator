import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';


function App() {

  const [resultValue, setResultValue] = useState("0");

  const clickedButton = (buttonValue) => {
    if (resultValue === "0") {
      setResultValue(buttonValue)
    }
    else {
      setResultValue(resultValue + buttonValue)
    }
  }

  const clearClicked = () => {
    setResultValue("0")
  }



  return (
    <div className="App">

      <div>
        <Button onClick={clearClicked} value="Clear" />
      </div>

      <div className='numFunc'>
        <Button onClick={() => clickedButton("0")} value="0" />
        <Button onClick={() => clickedButton("1")} value="1" />
        <Button onClick={() => clickedButton("2")} value="2" />
        <Button onClick={() => clickedButton("3")} value="3" />
        <Button onClick={() => clickedButton("4")} value="4" />
        <Button onClick={() => clickedButton("5")} value="5" />
        <Button onClick={() => clickedButton("6")} value="6" />
        <Button onClick={() => clickedButton("7")} value="7" />
        <Button onClick={() => clickedButton("8")} value="8" />
        <Button onClick={() => clickedButton("9")} value="9" />
        <Button onClick={() => clickedButton(".")} value="." />
        <Button onClick={() => clickedButton("=")} value="=" />
      </div>

      <div className='calcFunc'>
        <Button value="+" />
        <Button value="-" />
        <Button value="*" />
        <Button value="/" />
      </div>

      <div>
        <Input value={resultValue}/>
      </div>

    </div>
  );
}

export default App;
