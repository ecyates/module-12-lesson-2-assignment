import {Provider} from 'react-redux';
import HomePage from './components/HomePage';
import ExerciseForm from './components/ExerciseForm';
import ViewExercises from './components/ViewExercises';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-exercise/' element={<ExerciseForm/>} />
            <Route path='/edit-exercise/:id' element={<ExerciseForm/>} />
            <Route path='/exercises/' element={<ViewExercises/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
    </Provider>
  )
}

export default App
