import AuthComponent from '../auth/authComponent';
import AppContent from './AppContent';


export const App = () => {
	return (
		<AuthComponent>
			<AppContent/>
		</AuthComponent>
	);
};
export default App;
