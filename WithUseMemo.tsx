import * as React from 'react';

const WithUseMemo = () => {
  const [value, changeValue] = React.useState(100);
  const [theme, changeTheme] = React.useState('white');
  // Here if i change theme component  will rendered but it not recalculated for same value.So it cost less. check console for reference
  const valuePercentage = React.useMemo(() => {
    console.log('i am called!');
    return value * 0.1;
  }, [value]);

  return (
    <div className={theme}>
      <h1>With Use Memo</h1>
      <input
        type="number"
        value={value}
        onChange={(event) => changeValue(event.target.value)}
      />
      <button
        onClick={() => changeTheme(theme === 'black' ? 'white' : 'black')}
      >
        Change theme
      </button>
      <div>{`10 % of value = ${valuePercentage}`}</div>
    </div>
  );
};
export default WithUseMemo;
