import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}

const middleware = [
  logger,
  thunk
]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store