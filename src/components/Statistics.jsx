import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    {stats.map(StatisticItem)}
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
