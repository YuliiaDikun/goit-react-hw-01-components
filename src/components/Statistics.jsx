import css from './Statistic.module.css';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
        {title && (
      <h2 className={css.title}>{title}</h2>
      )}
    
    <ul className={css.statList}>
      {stats.map(el => (
        <li key={el.id} className={css.item}>
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
