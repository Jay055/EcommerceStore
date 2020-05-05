// Styled Button Components 

import styled from 'styled-components';

// Styled Component, New method to style components which is extremely reusable
// We can add props to styled components for multiple use   
export const ButtonContainer = styled.button`
text-transform: capitalize;
font - size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);


border-color: ${props => 
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => 
  props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};



border - radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline - color: red;
cursor: pointer;
display: inline-block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
  &: hover {
  background: ${props => 
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--mainBlue);

}
&:focus {
  outline: none;
}


`;
