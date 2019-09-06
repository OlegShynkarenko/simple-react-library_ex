import * as React from 'react';
import styled from "styled-components";

import {buttonAppearance} from "./buttonAppearance";

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  outline: none;
  border: none;  
  font-weight: 500; 
  cursor: pointer;
  color: ${props => props.appearance ? buttonAppearance[props.appearance].color : buttonAppearance.default.color};
  background: ${props => props.appearance ? buttonAppearance[props.appearance].background : buttonAppearance.default.background};
    &:hover {
      ${props => props.appearance ? buttonAppearance[props.appearance]['&:hover'] : buttonAppearance.default['&:hover']};
    }
    &:active {
      ${props => props.appearance ? buttonAppearance[props.appearance]['&:active'] : buttonAppearance.default['&:active']};
      color: ${props => props.appearance ? buttonAppearance[props.appearance]['&:active'].color : null };
    } 
`;

 export const ButtonComponent = (props) => {

  return(
      <StyledButton type='button' onClick={props.onClick}
        appearance={props.appearance}>
        {props.children}
      </StyledButton>
  )
};
