import "./TabButton.css";

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* children başka bir component'te bu componenti kullanınca içerisindeki metni ifade eder. */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
