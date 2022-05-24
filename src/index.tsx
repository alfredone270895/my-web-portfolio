import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

import React, { Suspense } from 'react';
// @ts-ignore
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Loading } from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);

reportWebVitals();
