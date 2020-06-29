import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid orange;
box-shadow: 0 2px 3px blue;
padding: 16px;
text-align: center;

@media (min-width: 500px){
    width: '450px';
}
`;

const person = (props) => {
    
    return (
    <StyledDiv>
    <p onClick={props.click}>Im {props.name} and {props.age} years old. </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed}  value={props.name}/>
    </StyledDiv>
    )
};
export default person;