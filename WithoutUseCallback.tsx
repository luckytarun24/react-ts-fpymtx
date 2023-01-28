import * as React from 'react';

const WithoutUseCallback = () => {
  const [value, changeValue] = React.useState(100);
  const [theme, changeTheme] = React.useState('white');
  // Here if i change theme of component it will re-render and re-create the function. As you can see ValueComponent wrapped by memo but after that it re-render child as you can see in console. So it cost more beacuse memo or not it sound same.
  const getValuePercentage = () => {
    return value * 0.1;
  };
  return (
    <div className={theme}>
      <h1>Without Use Callback</h1>
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
      <ValueComponent getValuePercentage={getValuePercentage} />
    </div>
  );
};

const ValueComponent = React.memo(
  ({ getValuePercentage }: { getValuePercentage: Function }) => {
    console.log('Value component re-render.');
    return <div>{`10 % of value = ${getValuePercentage()}`}</div>;
  }
);
export default WithoutUseCallback;
