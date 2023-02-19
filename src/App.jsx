import {ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import Topbar from './scense/global/Topbar'; 
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Dashboard from './scense/dashboard';
// import { Sidebar } from 'react-pro-sidebar';
import Sidebars from './scense/global/Sidebar'
import Team from './scense/team/Team'
import Contacts from './scense/contacts/Contacts'
import Invoices from './scense/invoices/Invoices'
import Calender from './scense/calender/Calender'
import Form from './scense/form/UserForm'
import Bar from './scense/bar/BarChat'
// Line from './scense/line'
import Pie from './scense/pie/PieChat'
import FAQ from './scense/faq/FAQ'
import Geography from './scense/geo/GeoChat';
import Line from './scense/line/LineChat';
import PagenotFound from './components/PagenotFound';

function App() {
  const [theme,colorMode]=useMode();



  return (
    <ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>

  <CssBaseline/>


    <div className="App">
      <Sidebars/>
      <main className='content'>
         <Topbar/>
    
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/invoices' element={<Invoices/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/bar' element={<Bar/>} />
        <Route path='/pie' element={<Pie/>} />
        <Route path='/line' element={<Line/>} />
        <Route path='/geography' element={<Geography/>} />
        <Route path='/*' element={<PagenotFound/>} />
      </Routes>
    </main>
    </div>
</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
