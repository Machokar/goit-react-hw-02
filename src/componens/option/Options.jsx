import css from './Options.module.css';
export const Options = ({ onclickgood, onclickbad, onclickneutral, ishidden, onreset }) => {
  return (
    <div className={css.model}>
      <button onClick={onclickgood} className={css.button}>
        Good
      </button>
      <button onClick={onclickneutral} className={css.button}>
        Neutral
      </button>
      <button onClick={onclickbad} className={css.button}>
        Bad
      </button>
      {!ishidden && (
        <button onClick={onreset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};
