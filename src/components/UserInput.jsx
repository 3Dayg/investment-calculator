import { useState } from "react";

export function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChangev("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section >
  );
}