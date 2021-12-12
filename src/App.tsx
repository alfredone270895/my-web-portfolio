import React, { Suspense } from 'react';
import { Layout } from './layout';

/**
 * App as react element
 * @constructor
 */
function App(): React.ReactElement {
  return (
    <Suspense fallback="loading">
      <Layout />
    </Suspense>
  );
}

export default App;
