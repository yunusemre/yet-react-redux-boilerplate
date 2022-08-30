import './index.scss';

import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ConnectedAppContainer from './app';
import { initAPIInterceptor } from './interceptors';
import reportWebVitals from './reportWebVitals';
import { store } from './store/configureStore';
import i18n from './translation/config';
import theme from './utils/theme';

initAPIInterceptor(store);

ReactDOM.render(
  <Provider store={store}>
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
    {/* <PersistGate persistor={persistor}>
    </PersistGate> */}
  </Provider>,
  document.getElementById('kolaygelsin')
);

reportWebVitals();
