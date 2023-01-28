import * as React from 'react';

const WithoutUseMemo = () => {
  const [value, changeValue] = React.useState(100);
  const [theme, changeTheme] = React.useState('white');
  // Here if i change theme component will render and recalculated for same value.So it cost more.
  const valuePercentage = (() => {
    console.log('i am called!');
    return value * 0.1;
  })();
  return (
    <div className={theme}>
      <h1>Without Use Memo</h1>
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
export default WithoutUseMemo;
