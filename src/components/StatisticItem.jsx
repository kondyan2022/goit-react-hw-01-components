import PropTypes from 'prop-types';
export const StatisticItem = ({ id, label, percentage }) => (
  <li className="item" key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
