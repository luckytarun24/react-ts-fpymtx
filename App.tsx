import * as React from 'react';
import './style.css';
import WithoutUseMemo from './WithoutUseMemo';
import WithUseMemo from './WithUseMemo';

export default function App() {
  return (
    <div>
      <WithoutUseMemo />
      <WithUseMemo />
    </div>
  );
}
