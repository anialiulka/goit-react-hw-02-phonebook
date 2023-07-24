import css from './Title.module.css';

export const Title = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};
