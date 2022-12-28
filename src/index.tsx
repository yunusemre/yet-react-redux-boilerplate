import './assets/scss/index.scss';

import { LoaderWrapper } from '@components/ui/loader/loader-wrapper';
import { persistor, store } from '@store/configure-store';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import ConnectedAppContainer from './app';
import { initAPIInterceptor } from './interceptors';
import reportWebVitals from './reportWebVitals';
import i18n from './translation/config';

initAPIInterceptor(store);

const container = document.getElementById('app')!;
const root = createRoot(container);
const state = store.getState();
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <LoaderWrapper loaded={state.app.loading}>
            <ConnectedAppContainer />
          </LoaderWrapper>
        </I18nextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals(console.log);
