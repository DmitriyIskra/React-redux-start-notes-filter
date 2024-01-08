import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Layout from './layout/Layout';

import InputWrapper from './components/inputNote/wrapper/InputWrapper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<InputWrapper />}/>
        <Route path='/notes/edit/:id' element={<InputWrapper />}/>
        <Route path='/main' element={<Navigate to='/'/>}/>
      </Route>
    </Routes> 
  );
}

export default App;
