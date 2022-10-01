import './assets/scss/index.scss';

import { store } from '@store/configureStore';
import { ThemeProvider } from 'react-bootstrap';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ConnectedAppContainer from './app';
import { initAPIInterceptor } from './interceptors';
import reportWebVitals from './reportWebVitals';
import i18n from './translation/config';

initAPIInterceptor(store);

const container = document.getElementById('kolaygelsin')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <ToastContainer />
          <ConnectedAppContainer />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
