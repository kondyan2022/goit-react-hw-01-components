import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul class={css['stat-list']}>
      {stats.map(item => (
        <StatisticItem {...item} />
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
