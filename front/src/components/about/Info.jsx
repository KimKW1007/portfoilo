import Link from 'next/link';
import profileImg from '../../assests/images/profileImg.png';
import { ImgBox, InfoBox, InfoContent } from './infoStyle';


export default function Info() {
  return (
    <InfoBox>
      <ImgBox image={profileImg.src}>
        <div className="imgBg"></div>
      </ImgBox>
      <InfoContent>
        <ul>
          <li>NAME . 김경원</li>
          <li>E-Mail . face676934@gmail.com</li>
          <li>GitHub .<Link href="https://github.com/KimKW1007"><a target={"_blank"}>GitHubLink</a></Link></li>
          <li>#프론트엔드 #미래의 개발자</li>
        </ul>
      </InfoContent>
    </InfoBox>
  );
}
