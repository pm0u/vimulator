import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}

const middleware = [
  thunk
]

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store