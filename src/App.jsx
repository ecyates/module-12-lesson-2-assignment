import {Provider} from 'react-redux';
import AddExercise from './components/addExercise';
import ViewExercises from './components/viewExercises';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Fitness Tracker</h1>
        <AddExercise/>
        <br />
        <ViewExercises/>
      </div>
      
    </Provider>
  )
}

export default App
