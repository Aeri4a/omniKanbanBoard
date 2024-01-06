import { Provider } from 'react-redux'
import store from './store'
import './App.css'

import Guard from './components/Guard'

function App() {

  return (
    <main>
      <Provider store={store}>
        <Guard/>
      </Provider>
    </main>
  )
}

export default App
