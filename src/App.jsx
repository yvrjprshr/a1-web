import './App.css';
import './styles/card.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './styles/link.css';

import ImageSearch from './Pages/ImageSearch/ImageSearch.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/'></Route>
        <Route exact path='/image' element={<ImageSearch/>}></Route>
      </Routes>
      <div className="box">
        <Link to='/image' className='link'>
        <div className="card">
          Image Search
        </div>
        </Link>
        <div className="card">
          Map Search
        </div>
        <div className="card">
          Word Search
        </div>
      </div>
    </>
  )
}

export default App
