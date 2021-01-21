import './App.css';
import { useDispatch } from 'react-redux';
import increment from './actions/actions';

import View from './components/View';

function App() {
  //Dispatch används för att trigga igång en action där man skickar med vald action
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment(1));
  }

  return (
    <div className="App">
      <button onClick={ handleClick }>Uppdatera med 1</button>
      <View />
    </div>
  );
}

export default App;
