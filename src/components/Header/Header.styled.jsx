import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
  :hover: not(.active),
  :focus-visible:not(.active) {
    color: #f37a7a;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  height: 70px;
  align-items: center;
  margin-left: 20px;
`;

export const Box = styled.header`
  height: 70px;
  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
`;
