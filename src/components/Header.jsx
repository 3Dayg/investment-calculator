import IconImg from '../assets/investment-calculator-logo.png';

export function Header() {
  return (
    <header id="header">
      <img src={IconImg} alt="Money bag" />
      <h1>
        React Investment Calculator
      </h1>
    </header>
  );
}