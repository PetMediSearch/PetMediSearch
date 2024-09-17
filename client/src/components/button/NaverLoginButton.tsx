import styled from 'styled-components';
import naverLogo from '../../assets/images/naverLogo.png';

const SocialNaver = () => {
  const Rest_api_key = ''; // eslint-disable-line no-unused-vars
  const redirect_uri = ''; // eslint-disable-line no-unused-vars
  const kakaoURL = ``;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <NaverButton>
      <LogoImage src={naverLogo} onClick={handleLogin} />
      네이버 계정으로 로그인
    </NaverButton>
  );
};
export default SocialNaver;

// 네이버 버튼 스타일
const NaverButton = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #00c73c;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//로고 스타일
const LogoImage = styled.img`
  margin-right: 30px;
  width: 60px;
  height: auto;
`;
