import './App.css';
import { useState, useEffect } from 'react';
import { Description } from './componens/descript/Description';
import { Options } from './componens/option/Options';
import { Feedback } from './componens/Feedback/Feedback ';
import { Notis } from './componens/option/Notis';
export const App = () => {
  const [clicks, setClick] = useState(() => {
    const savedclicks = window.localStorage.getItem('commens');

    if (savedclicks !== null) {
      return JSON.parse(savedclicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100);
  const isHidden = totalFeedback === 0;
  const handelgood = () => {
    setClick({ ...clicks, good: clicks.good + 1 });
  };
  const handelbad = () => {
    setClick({ ...clicks, bad: clicks.bad + 1 });
  };
  const handelneutral = () => {
    setClick({ ...clicks, neutral: clicks.neutral + 1 });
  };
  const onReset = () => {
    setClick({
      ...clicks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    window.localStorage.setItem('commens', JSON.stringify(clicks));
  }, [clicks]);
  return (
    <>
      <Description />
      <Options
        onclickgood={handelgood}
        onclickbad={handelbad}
        onclickneutral={handelneutral}
        onreset={onReset}
        ishidden={isHidden}
      />
      {isHidden ? (
        <Notis />
      ) : (
        <Feedback clicks={clicks} total={totalFeedback} positive={positiveFeedback} />
      )}
    </>
  );
};
