import { useState } from 'react';
import { Header } from './components/Header'
import { Result } from './components/Result'
import { UserInput } from './components/UserInput'
import { calculateInvestmentResults } from './util/investment';
import { InputGroup } from './components/InputGroup';

function App() {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  let result = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  });

  return (
    <main>
      <Header />
      <section id="user-input">
        <InputGroup name={"INITIAL INVESTMENT"} value={initialInvestment} changeHandler={setInitialInvestment} />
        <InputGroup name={"ANNUAL INVESTMENT"} value={annualInvestment} changeHandler={setAnnualInvestment} />
        <InputGroup name={"EXPECTED RETURN"} value={expectedReturn} changeHandler={setExpectedReturn} />
        <InputGroup name={"DURATION"} value={duration} changeHandler={setDuration} />
      </section>
      {/* <UserInput/> */}
      <Result result={result} />
    </main>
  )
}

export default App
