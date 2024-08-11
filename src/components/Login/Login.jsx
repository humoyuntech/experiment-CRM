import {Wrapper, Title, Description, InputWrapper, Label, Input, LinkReset, Button} from './style'
import {Container} from '../../root/style'

function Login() {
  return (
    <Container>
      <Wrapper>
          <Title>Login to your account</Title>
          <Description>Enter your details to login.</Description>
          <InputWrapper>
            <Label htmlFor="fname">Email Address <span>*</span> </Label>
            <Input type="text" id="fname" name="fname" placeholder='Enter your email address' />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="pname">Password <span>*</span> </Label>
            <Input type="text" id="pname" name="fname" placeholder='***********'/>
          </InputWrapper>
          <LinkReset href='reset'>Forgot password?</LinkReset>
          <Button>Login</Button>
      </Wrapper>
    </Container>
  )
}

export default Login
