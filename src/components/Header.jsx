import Logo from '../assets/investment-calculator-logo.png';

export function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Money bag logo" />
      <h1>
        Investment Calculator
      </h1>
    </header>
  );
}