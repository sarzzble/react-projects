import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={
              userInput.initialInvestment === 0
                ? ""
                : userInput.initialInvestment
            }
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={
              userInput.annualInvestment === 0 ? "" : userInput.annualInvestment
            }
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={
              userInput.expectedReturn === 0 ? "" : userInput.expectedReturn
            }
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration === 0 ? "" : userInput.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
            required
          />
        </p>
      </div>
    </section>
  );
}
