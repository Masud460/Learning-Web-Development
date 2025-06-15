import { createRoot } from 'react-dom/client'
import MyImportedApp from './App.jsx'
import PersonalCompo from './Personal.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
  <MyImportedApp />
  <PersonalCompo />
  </>
);
