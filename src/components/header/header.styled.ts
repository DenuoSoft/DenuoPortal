import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #c8d2e6;
  flex-shrink: 0;
  -webkit-sticky: sticky;
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;
export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  li {
    padding-left: 15px;
  }
`;
export const HeaderLink = styled(NavLink)<{isActive: boolean}>`
  text-decoration: none;
  font-size: 22px;
  padding-left: 25px;
  &:hover {
    color: #d7ff23;
  }
  
`;
export const HeaderSearch = styled.div`
  display: flex;
  flex-direction: row;
`;
