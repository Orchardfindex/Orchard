import { configureStore } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import application from './application/reducer'
import { updateVersion } from './global/actions'
import user from './user/reducer'
import transactions from './transactions/reducer'
import swap from './swap/reducer'
import mint from './mint/reducer'
import lists from './lists/reducer'
import burn from './burn/reducer'
import multicall from './multicall/reducer'
import pair from './pair/reducer'
import pools from './pools/reducer'
import farms from './farms/reducer'
import vesting from './vesting/reducer'

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists']

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists,
    pair,
    pools,
    farms,
    vesting,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, immutableCheck: false, serializableCheck: false }).concat(
      save({ states: PERSISTED_KEYS, debounce: 1000 }),
    ),
  preloadedState: load({ states: PERSISTED_KEYS }),
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
