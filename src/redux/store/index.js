import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import watch from 'redux-watch'
import { checkFinishCondition } from '../actions/finishCondition'

const initialState = {}

const middleware = [
  thunk
]

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

const composeEnhancers = composeWithDevTools({ trace: true })

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

const w = watch(store.getState, 'vim')

store.subscribe(w(() => {
  store.dispatch(checkFinishCondition())
}))

export default store