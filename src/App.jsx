import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Button from './components/Button';

function App() {

  return (
    <>
     <Navbar />
     <h1 className=''></h1>
     <Button variant={'transparent'}>Here are we</Button>
     <Button variant={'form'}>Here are we</Button>
     <Button>Here are we</Button>
     <Button variant={'icon'} size={'icon'}>
        Here are we
      </Button>
     <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
     </Routes>
    </>
  )
}

export default App
