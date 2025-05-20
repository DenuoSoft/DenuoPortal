import { Outlet } from 'react-router-dom';
import Profile from './profile/profile';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/authProvider.jsx';
import logo from '../../assets/img/logo.png';
import {
	HeaderBlock,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderSearch,
} from './header.styled';

const Header = () => {
	const { authenticated, userInfo} = useAuth();
	const getActive = ({ isActive }) => {
		return {
      color: isActive ? '#d7ff23' : '#28282d',
      
		};
	};
	return (
		<>
			<HeaderBlock>
				<HeaderNav>
					<img src={logo} alt='logo' />
					<HeaderList>
						<HeaderLink to='/' style={getActive}>
							Main
						</HeaderLink>
						<HeaderLink to='/hr' style={getActive}>
							HR
						</HeaderLink>
						<HeaderLink to='/marketing' style={getActive}>
							Marketing
						</HeaderLink>
						<HeaderLink to='/it' style={getActive}>
							IT
						</HeaderLink>
						<HeaderLink to='/forms' style={getActive}>
							Forms
						</HeaderLink>
						<HeaderLink to='/phonebook' style={getActive}>
							Phone Book
						</HeaderLink>
						{authenticated && (
							<HeaderLink to="/admin" style={getActive}>
								Admin page
							</HeaderLink>
						)}
					</HeaderList>
				</HeaderNav>
				<HeaderSearch>
					<Profile name={userInfo.name} />
				</HeaderSearch>
			</HeaderBlock>
			<Outlet />
		</>
	);
};
Header.propTypes = {
	name: PropTypes.string,
	isAuthenticated: PropTypes.bool
}
export default Header