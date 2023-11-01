import { Provider } from 'react-redux'

import { MainRouter } from "./routes"
import {store} from './store'



export const DogctionaryApp = () => {
  return (
    <Provider store={ store }>
      <MainRouter />
    </Provider>
  )
}
