import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TFunction } from 'i18next';
import { JobExperience } from '../app/JobExperience';
import { Home } from '../app/Home';
import { Graduation } from '../app/Graduation';
import { Technology } from '../app/Technology';
import { Contact } from '../app/Contact';

type AppRoutesProps = {
  t: TFunction;
};
/**
 * Application routes
 * @param t
 * @constructor
 */
export const AppRoutes: React.FC<AppRoutesProps> = ({ t }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology t={t} />} />
        <Route path="/graduation" element={<Graduation t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/job-experience" element={<JobExperience t={t} />} />
      </Routes>
    </BrowserRouter>
  );
};
