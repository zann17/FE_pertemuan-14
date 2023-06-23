import styled, { css } from "styled-components";

const colors = {
  primary: "#4B0082",
  secondary: "#B0C4DE",
  danger: "red",
  success: "",
  warning: "yellow",
};

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: #fff;
background-color: #4361ee;
cursor: pointer;

// tangkap variant
background-color: ${function(props) {
  if (props.variant) {
    return  props.theme.colors[props.variant];
  }else {
    return props.theme.colors["primary"];
  }
}};

// props full
${function(props) {
  return props.full && css`
  width: 100%;
  display: block;
  `
}}
`;

export default Button;