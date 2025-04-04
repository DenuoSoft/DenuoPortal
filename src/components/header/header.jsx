import { Outlet } from 'react-router-dom';
import { Profile } from './profile/profile';
//import { Main } from "../main/main";
//import { HR } from "../main/hr/hr";
//import { Marketing } from "../main/marketing/marketing";
//import { IT } from "../main/it/it";
//import { Form } from "../main/form/form";
//import { Phonebook } from "../main/phonebook/phonebook";

//import { Search } from "./search/search";
import logo from '../../assets/img/logo.png';
import {
	HeaderBlock,
	HeaderLink,
	HeaderList,
	HeaderNav,
	HeaderSearch,
} from './header.styled';

export const Header = () => {
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
					</HeaderList>
				</HeaderNav>
				<HeaderSearch>
					<Profile />
				</HeaderSearch>
			</HeaderBlock>
			<Outlet />
		</>
	);
};
