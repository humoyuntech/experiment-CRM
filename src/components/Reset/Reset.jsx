import {Wrapper, Title, Description, InputWrapper, Label, Input, Button} from './style'
import {Container} from '../../root/style'

function Reset() {
  return (
    <Container>
      <Wrapper>
        <Title>Reset Password</Title>
        <Description>Enter your email to reset your password.</Description>

        <InputWrapper>
          <Label htmlFor="fname">Phone </Label>
          <Input type="text" id="fname" name="fname" placeholder='Enter your email address' />
        </InputWrapper>

        <Button> <a href='verification'>Reset Password</a></Button>
    </Wrapper>

    </Container>


  )
}

export default Reset