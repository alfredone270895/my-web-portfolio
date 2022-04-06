import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { JobExperience } from '../pages/Job';
import { Graduation } from '../pages/Graduation';
import { Technology } from '../pages/Technology';
import { Contact } from '../pages/Contact';

/**
 * Application routes
 * @constructor
 */
export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-experience" element={<JobExperience />} />
      </Routes>
    </BrowserRouter>
  );
};
