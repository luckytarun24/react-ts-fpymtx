import * as React from 'react';

const WithUseCallback = () => {
  const [value, changeValue] = React.useState(100);
  const [theme, changeTheme] = React.useState('white');
  // Here if i change theme of component it will re-render.but not re-create the function because of useCallback it will re-create when any dependence get change. And Value will not re-render beacuse there is no change in props.So it cost less. check console for reference.
  const getValuePercentage = React.useCallback(() => {
    return value * 0.1;
  }, []);
  return (
    <div className={theme}>
      <h1>With Use Callback</h1>
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

export default WithUseCallback;
