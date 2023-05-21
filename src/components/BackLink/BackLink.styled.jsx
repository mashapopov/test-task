import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  padding: 8px;
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border-radius: 5px;
  color: #373737;
  background-color: #ebd8ff;
  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
