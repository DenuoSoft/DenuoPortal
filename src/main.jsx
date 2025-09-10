import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/app/App';
import {Provider} from 'react-redux';
import store from './store';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter
				future={{
					v7_relativeSplatPath: true,
					v7_startTransition: true,
				}}
			>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
//basename="/" for build insert to <BrowserRouter>
