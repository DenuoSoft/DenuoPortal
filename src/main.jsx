import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename="/denuo-ip"> 
			<App />
		</BrowserRouter>
	</StrictMode>
);
//basename="/denuo-ip" for build insert to <BrowserRouter>