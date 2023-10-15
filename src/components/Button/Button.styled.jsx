import styled from "styled-components";
export const StyledButton = styled.button`
margin: 12px auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #a94b00;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

  &:hover,
  :focus {
    background-color: #a94b00;
  }`;