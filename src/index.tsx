import { ThemeProvider } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ConnectedAppContainer from './app';
import './index.scss';
import { initAPIInterceptor } from './interceptors';
import reportWebVitals from './reportWebVitals';
import { store } from './store/configureStore';

import i18n from './translation/config';

initAPIInterceptor(store);

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <ConnectedAppContainer />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('kolaygelsin')
);

reportWebVitals();
