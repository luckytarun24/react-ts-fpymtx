import * as React from 'react';
import './style.css';
import WithoutUseCallback from './WithoutUseCallback';
import WithoutUseMemo from './WithoutUseMemo';
import WithUseCallback from './WithUseCallback';
import WithUseMemo from './WithUseMemo';

export default function App() {
  return (
    <div>
      <WithoutUseMemo />
      <WithUseMemo />
      <WithoutUseCallback />
      <WithUseCallback />
    </div>
  );
}
