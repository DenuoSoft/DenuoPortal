import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './profile/profile';
import PropTypes from 'prop-types';
import logolight from '../../assets/img/logo.png';
import logodark from '../../assets/img/logo-dark.png'
import {
	HeaderBlock,
	HeaderContainer,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderProfile,
} from './header.styled';
import { ThemeSwitch } from '../shared/icons/theme-switch';
import { ThemeContext } from '../themes/ThemeContext';

const Header = ({ userInfo }) => {
	const { theme, toggleTheme } = useContext(ThemeContext)
	const headerImage = theme === 'light' ? logolight : logodark;
	/* const getActive = ({isActive}) => {
		return {
			color: isActive ? '#d7ff23' : '#28282d',
		};
	}; */
	return (
		<>
			<HeaderBlock>
				<HeaderContainer>
					<HeaderNav>
						<img src={headerImage} alt="logo" />
						<HeaderList>
							<HeaderLink to="/">Main</HeaderLink>
							<HeaderLink to="/hr">HR</HeaderLink>
							<HeaderLink to="/marketing">Marketing</HeaderLink>
							<HeaderLink to="/it">IT</HeaderLink>
							<HeaderLink to="/forms">Forms</HeaderLink>
							<HeaderLink to="/phonebook">Phone Book</HeaderLink>
						</HeaderList>
					</HeaderNav>

					<HeaderProfile>
						<Profile userInfo={userInfo} />
						<ThemeSwitch label="Dark" onClick={toggleTheme} />
					</HeaderProfile>
				</HeaderContainer>
			</HeaderBlock>
			<Outlet />
		</>
	);
};
Header.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};
export default Header;
