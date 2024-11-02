import Input from "./Components/Input";
import Button from "./Components/Button"
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleNumCurrentClear = () => {
    setCurrentNumber('0')
  };

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('0')
  };
 
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))    
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))    
      setOperation('')
    }
  }

  const handleMultpliNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))    
      setOperation('')
    }
  }

  const handleDivisNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))    
      setOperation('')
    }
  }

  const handlePorcentNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%')
    } else {
      const sum = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
          case '-':
            handleMinusNumbers();
          break;
          case '*':
            handleMultpliNumbers();
            break;
          case '/':
            handleDivisNumbers();
            break;
          case '%':
            handlePorcentNumbers();
            break;
        default:
          break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="C" onClick={handleNumCurrentClear} />
          <Button label="%" onClick={handlePorcentNumbers}/>
          <Button label="/" onClick={handleDivisNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={handleMultpliNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
