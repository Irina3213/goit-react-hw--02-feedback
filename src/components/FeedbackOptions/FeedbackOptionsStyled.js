import styled from 'styled-components';

export const ControlsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const Button = styled.button`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 5px;
  color: black;
  :hover {
    color: grey;
    background-color: blue;
  }
`;
