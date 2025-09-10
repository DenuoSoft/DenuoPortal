import {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import PropTypes from 'prop-types';
import {Logo} from '../../assets/img/logo';
import {
	HeaderBlock,
	HeaderContainer,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderProfileBlock,
	ThemeBlock,
	LightLabel,
	DarkLabel,
	LogoLink
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
						<LogoLink href="https://denuo.legal" target="_blank">
							<Logo theme={theme} />
						</LogoLink>

						<HeaderList>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/news">News</HeaderLink>
							{/* <HeaderLink to="/main">Main</HeaderLink> */}
							<HeaderLink to="/hr">HR</HeaderLink>
							<HeaderLink to="/marketing">Marketing</HeaderLink>
							<HeaderLink to="/it">IT</HeaderLink>
							<HeaderLink to="/forms">Forms</HeaderLink>
							<HeaderLink to="/phonebook">Phone Book</HeaderLink>
						</HeaderList>
					</HeaderNav>
					<HeaderProfileBlock>
						<HeaderProfile userInfo={userInfo} />
						<ThemeBlock>
							<LightLabel>Light</LightLabel>
							<Switch checked={theme === 'dark'} onClick={toggleTheme} />
							<DarkLabel>Dark</DarkLabel>
						</ThemeBlock>
					</HeaderProfileBlock>
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
