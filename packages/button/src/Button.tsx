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
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};;
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
      <StyledButton type={props.type} onClick={props.onClick}
        appearance={props.appearance}>
        width={props.width}
        height={props.height}
        {props.children}
      </StyledButton>
  )
};
