import { formatter } from "../util/investment";

export function Result({ result }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
            <td>{formatter.format(row.valueEndOfYear - row.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}