import { useState } from 'react';
import { Header } from './components/Header';
import { Result } from './components/Result';
import { UserInput } from './components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = (input) => {
    return (input.duration > 0);
  };

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInputValid(userInput) && <p className='center'>
        Please enter a duration greater than zero.
      </p>}
      {isInputValid(userInput) && <Result input={userInput} />}
    </>
  )
}

export default App
