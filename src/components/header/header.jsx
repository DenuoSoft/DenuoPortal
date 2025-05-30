import {Outlet} from 'react-router-dom';
import Profile from './profile/profile';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import {
	HeaderBlock,
	HeaderContainer,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderSearch,
} from './header.styled';

const Header = ({userInfo}) => {
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
						<img src={logo} alt="logo" />
						<HeaderList>
							<HeaderLink to="/" >
								Main
							</HeaderLink>
							<HeaderLink to="/hr" >
								HR
							</HeaderLink>
							<HeaderLink to="/marketing" >
								Marketing
							</HeaderLink>
							<HeaderLink to="/it" >
								IT
							</HeaderLink>
							<HeaderLink to="/forms" >
								Forms
							</HeaderLink>
							<HeaderLink to="/phonebook" >
								Phone Book
							</HeaderLink>
						</HeaderList>
					</HeaderNav>
					<HeaderSearch>
						<Profile userInfo={userInfo} />
					</HeaderSearch>
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
