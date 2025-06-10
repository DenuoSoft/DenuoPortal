import AuthComponent from '../auth/authComponent';
import AppContent from './AppContent';
import {ThemeProvider} from '../themes/ThemeProvider';

export const App = () => {
	return (
		<AuthComponent>
			<ThemeProvider>
				<AppContent />
			</ThemeProvider>
		</AuthComponent>
	);
};
export default App;
