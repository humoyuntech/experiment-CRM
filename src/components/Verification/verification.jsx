import {Wrapper, Title, Description, InputWrapper, Input, LinkReset, Button} from './style'
import {Container} from '../../root/style'

function Verification() {
  return (
    <Container>
      <Wrapper>
          <Title>Enter Verification Codet</Title>
          <Description>We’ve sent a code to <b>+998 90 000 00 00 </b></Description>

          <InputWrapper>
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
            <Input type="text" />
          </InputWrapper>

          <Button>Reset Password</Button>
          <Description>Experiencing issues receiving the code?</Description>
          <LinkReset href="3">Resend code</LinkReset>
      </Wrapper>
    </Container>
  )
}

export default Verification