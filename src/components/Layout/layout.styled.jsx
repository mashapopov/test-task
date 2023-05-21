import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
    gap: 15px;
  }
`;
export const StyledLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #373737;
  background-color: #ebd8ff;
  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
