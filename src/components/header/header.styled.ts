import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBlock = styled.header`
	height: var(--header-height);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	background-color: #c8d2e6;
	position: fixed;
	z-index: 999;	
	width: 100%;
	
`;
export const HeaderContainer = styled.div`
    width: 1440px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const HeaderNav = styled.nav`
	display: flex;
	align-items: center;
	img {
	width: 100px;
	overflow: hidden;
	}
`;
export const HeaderList = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	li {
		padding-left: 15px;
	}
`;

export const HeaderLink = styled(NavLink)`
	text-decoration: none;
	font-size: 22px;
	font-weight: 300;
	color: #000;
	padding-left: 25px;
    &:hover, &:focus {
		color: #d7ff23;
	}
	&.active {
        color: #d7ff23;
    }	
`;
export const HeaderSearch = styled.div`
	display: flex;
	flex-direction: row;
`;
