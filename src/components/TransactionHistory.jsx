import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>{items.map(TransactionItem)}</tbody>
  </table>
);
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
