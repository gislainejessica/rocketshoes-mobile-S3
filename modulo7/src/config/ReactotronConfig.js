import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if ( process.env.NODE_ENV === 'development'){
  const tron = Reactotron.configure({host: '192.168.15.9'})
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect()
  console.tron = tron
  tron.clear()
}
