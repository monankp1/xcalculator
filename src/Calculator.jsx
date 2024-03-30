import React, {useState} from 'react'
import Button from './Button'

const Calculator = () => {
    const [input, setInput] = useState('');
    const [calculation, setCalculation] = useState('');
    const [displayOutput, setDisplayOutput] = useState(false);

    const rowStyle = {
        display: 'flex',
        // alignItems: 'center',
        justifyContent:'center'
    };

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
            setDisplayOutput(false);
        } else {
            setInput(input + value);
        }
    };

    const handleOutput = () => {
        try {
            setCalculation(eval(input).toString());
            setDisplayOutput(true);
        } catch (error) {
            setCalculation('Error');
            setDisplayOutput(true);
        }
    };

  return (
    <div>
        <h1>React Calculator</h1>
        <input type="text" value={input} style={{marginBottom:"20px"}} readOnly/>
        {displayOutput? (<p>{calculation}</p>) : ('')}

        <div style={rowStyle}>
            <Button name='7' onClick={handleClick}/>
            <Button name='8' onClick={handleClick}/>
            <Button name='9' onClick={handleClick}/>
            <Button name='+' onClick={handleClick}/>
        </div>
        <div style={rowStyle}>
            <Button name='4' onClick={handleClick}/>
            <Button name='5' onClick={handleClick}/>
            <Button name='6' onClick={handleClick}/>
            <Button name='-' onClick={handleClick}/>
        </div>
        <div style={rowStyle}>
            <Button name='1' onClick={handleClick}/>
            <Button name='2' onClick={handleClick}/>
            <Button name='3' onClick={handleClick}/>
            <Button name='*' onClick={handleClick}/>
        </div>
        <div style={rowStyle}>
            <Button name='C' onClick={handleClick}/>
            <Button name='0' onClick={handleClick}/>
            <Button name='=' onClick={handleOutput}/>
            <Button name='/' onClick={handleClick}/>
        </div>
        

    </div>
  )
}

export default Calculator