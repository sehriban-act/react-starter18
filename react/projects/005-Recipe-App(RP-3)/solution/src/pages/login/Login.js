import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealSvg from "../../assets/meal.svg"
<<<<<<< HEAD
=======

>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17
const Login = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        window.location.href="/"
    }
<<<<<<< HEAD
=======

>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17
    return (
     <LoginContainer>
         <FormContainer>
         <StyledImg src={mealSvg}/>
         <Header>{"<Clarusway/>"}Recipe</Header>
<<<<<<< HEAD
=======

>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="username" required/>
            <StyledInput type="password" placeholder="password" required/>
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        </FormContainer>
     </LoginContainer>
    )
}
export default Login



