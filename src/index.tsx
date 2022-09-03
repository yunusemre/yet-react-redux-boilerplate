import './index.scss';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ConnectedAppContainer from './app';
import { initAPIInterceptor } from './interceptors';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store/configureStore';
import i18n from './translation/config';
import theme from './utils/theme';

initAPIInterceptor(store);

const container = document.getElementById('kolaygelsin')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ConnectedAppContainer />
            </ThemeProvider>
          </StyledEngineProvider>
        </I18nextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
