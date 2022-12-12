import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ history }) => (
    <table className={css.transactionhistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {history.map(({ id, amount, currency, type }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.string,
  })),
  
};