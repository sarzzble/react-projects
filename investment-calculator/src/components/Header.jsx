import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={img} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
