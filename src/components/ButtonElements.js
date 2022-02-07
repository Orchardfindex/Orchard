import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  outline: none;
  background: ${({primary}) => (primary ? '#00B200' : '#00F400')};
  padding: ${({big}) => (big ? '15px 45px' : '10px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#000')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#00F400' : '#00B200')};
  }
`