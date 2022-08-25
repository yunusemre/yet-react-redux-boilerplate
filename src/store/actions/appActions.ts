import { createAction } from '@reduxjs/toolkit'

const fetchAppConfigAsync = createAction(
  'app/fetchAppConfigAsync',
  ({
    callback = () => {
      /*  */
    },
    showLoading = true
  } = {}) => ({ payload: { callback, showLoading } })
)

const setAppConfig = createAction('app/setAppConfig')
const logoutAsync = createAction('app/logoutAsync')

export default {
  fetchAppConfigAsync,
  setAppConfig,
  logoutAsync
}
