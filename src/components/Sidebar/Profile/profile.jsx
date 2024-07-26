import {ProfileBlock, ProfilImage, PrInfoBlock, PrInfoBlockName, PrInfoBlockEmail} from './style'
import noImg from "../../../assets/images/noUser.webp";

function Profile() {
  return (
    <ProfileBlock>
        <ProfilImage src={noImg} />
        <PrInfoBlock >
            <PrInfoBlockName>Rustamov Khumoyun</PrInfoBlockName>
            <PrInfoBlockEmail>humoyuntech@gmail.com</PrInfoBlockEmail>
        </PrInfoBlock>
    </ProfileBlock>
  )
}

export default Profile