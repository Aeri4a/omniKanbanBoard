import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import 'react-toastify/dist/ReactToastify.min.css';

import Guard from './components/Guard'
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#b0c418'
      },
      secondary: {
        main: '#c3c912'
      },
    },
  });

  return (
    <main id="main">
      <ToastContainer
        position='top-center'
        draggable={false}
        hideProgressBar={false}
        closeOnClick
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Guard/>
        </ThemeProvider>
      </Provider>
    </main>
  )
}

export default App
