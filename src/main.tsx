import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Styles/_global.scss'
import { Provider } from 'react-redux'
import store from './Redux/Store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
)
