import {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import Profile from './profile/profile';
import PropTypes from 'prop-types';
import { Logo } from '../../assets/img/logo';
import {
	HeaderBlock,
	HeaderContainer,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderProfile,
	ThemeBlock,
	LightLabel,
	DarkLabel,
	
} from './header.styled';
import {ThemeContext} from '../themes/ThemeContext';
import Switch from '@mui/material/Switch';

const Header = ({userInfo}) => {
	const {theme, toggleTheme} = useContext(ThemeContext);
	
	return (
		<>
			<HeaderBlock>
				<HeaderContainer>
					<HeaderNav>
						<Logo theme={theme} />
						<HeaderList>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/main">News</HeaderLink>
							<HeaderLink to="/hr">HR</HeaderLink>
							<HeaderLink to="/marketing">Marketing</HeaderLink>
							<HeaderLink to="/it">IT</HeaderLink>
							<HeaderLink to="/forms">Forms</HeaderLink>
							<HeaderLink to="/phonebook">Phone Book</HeaderLink>
						</HeaderList>
					</HeaderNav>
					<HeaderProfile>
						<Profile userInfo={userInfo} />
						<ThemeBlock>
							<LightLabel>Light</LightLabel>
							<Switch checked={theme === 'dark'} onClick={toggleTheme} />
							<DarkLabel>Dark</DarkLabel>
						</ThemeBlock>
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
