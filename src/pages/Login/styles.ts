import styled from 'styled-components'
import bg from '../../assets/images/login-bg.png.png'

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding: clamp(20px, 4vw, 34px) clamp(18px, 5vw, 72px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: white;
  background: url(${bg}) center/cover no-repeat;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    background-position: center top;
  }
`

export const Left = styled.section`
  position: relative;
  z-index: 2;
  width: min(58%, 760px);

  @media (max-width: 1100px) {
    width: 100%;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: clamp(45px, 8vw, 105px);

  .symbol {
    color: #ffd000;
    font-size: clamp(38px, 5vw, 54px);
    text-shadow: 0 0 20px #ffd000;
  }

  h1 {
    font-size: clamp(30px, 4vw, 42px);
    letter-spacing: 4px;
    font-weight: 900;
  }

  span {
    color: #ffd000;
    letter-spacing: 8px;
    font-size: 13px;
    font-weight: 800;
  }
`

export const Hero = styled.div`
  h2 {
    font-size: clamp(40px, 6vw, 62px);
    line-height: 1.05;
    font-weight: 900;
    text-shadow: 0 5px 12px #000;
  }

  strong {
    color: #ffd000;
    font-size: clamp(42px, 7vw, 70px);
    font-style: italic;
    text-shadow: 0 0 22px rgba(255, 208, 0, 0.6);
  }

  p {
    margin-top: 24px;
    max-width: 550px;
    font-size: clamp(16px, 2vw, 21px);
    line-height: 1.45;
    color: #eee;
  }

  span {
    color: #ffd000;
  }
`

export const Features = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 38px;
  flex-wrap: wrap;

  div {
    padding: 15px 18px;
    border-radius: 13px;
    border: 1px solid rgba(255, 208, 0, 0.18);
    background: rgba(7, 10, 14, 0.82);
    font-size: 14px;
    font-weight: 800;
  }

  @media (max-width: 500px) {
    div {
      width: 100%;
    }
  }
`

export const StartButton = styled.button`
  margin-top: 30px;
  width: min(420px, 100%);
  height: 64px;
  border: 1px solid #ffd000;
  background: linear-gradient(90deg, #ffba00, #ffe13b);
  color: #111;
  font-size: clamp(15px, 2vw, 19px);
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 0 32px rgba(255, 208, 0, 0.8);
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 7% 50%);
`

export const Stats = styled.div`
  margin-top: 45px;
  width: min(620px, 100%);
  min-height: 92px;
  display: flex;
  align-items: center;
  border-radius: 18px;
  background: rgba(7, 9, 13, 0.85);
  border: 1px solid rgba(255, 208, 0, 0.18);
  overflow: hidden;

  div {
    flex: 1;
    text-align: center;
    padding: 15px 8px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  div:last-child {
    border-right: none;
  }

  strong {
    display: block;
    font-size: clamp(18px, 2vw, 23px);
  }

  span {
    display: block;
    font-size: 10px;
    color: #ccc;
    margin-top: 5px;
  }

  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div {
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

export const RankCard = styled.div`
  position: absolute;
  z-index: 3;
  left: 41%;
  bottom: 7%;
  width: 250px;
  height: 250px;
  border-radius: 24px;
  background: rgba(8, 10, 14, 0.86);
  border: 1px solid rgba(255, 208, 0, 0.35);
  box-shadow: 0 0 35px rgba(255, 208, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .badge {
    color: #ffd000;
    font-size: 76px;
    line-height: 1;
  }

  span {
    font-size: 13px;
  }

  strong {
    color: #ffd000;
    font-size: 31px;
    margin-top: 8px;
  }

  p {
    font-size: 13px;
    margin-top: 6px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`

export const Card = styled.section`
  position: relative;
  z-index: 2;
  width: min(500px, 100%);
  padding: clamp(28px, 4vw, 42px);
  border-radius: 28px;
  background: rgba(6, 9, 14, 0.92);
  border: 1px solid rgba(255, 208, 0, 0.4);
  box-shadow: 0 0 55px rgba(255, 208, 0, 0.22);
  backdrop-filter: blur(14px);

  h2 {
    text-align: center;
    font-size: clamp(21px, 3vw, 25px);
  }

  p {
    text-align: center;
    color: #ddd;
    margin-top: 8px;
  }

  span,
  a {
    color: #ffd000;
    text-decoration: none;
    font-weight: 800;
  }

  @media (max-width: 1100px) {
    margin-bottom: 40px;
  }
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 34px;

  button {
    background: none;
    border: none;
    color: #aaa;
    font-size: 17px;
    font-weight: 900;
    padding-bottom: 15px;
    cursor: pointer;
  }

  .active {
    color: #ffd000;
    border-bottom: 3px solid #ffd000;
  }
`

export const Crown = styled.div`
  text-align: center;
  color: #ffd000;
  font-size: 46px;
  margin-bottom: 16px;
`

export const Form = styled.form`
  margin-top: 32px;

  input {
    width: 100%;
    height: 58px;
    margin-bottom: 14px;
    padding: 0 18px;
    border-radius: 10px;
    border: 1px solid rgba(255, 208, 0, 0.25);
    background: rgba(17, 21, 29, 0.96);
    color: white;
    font-size: 16px;
    outline: none;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0 26px;
  font-size: 13px;

  label {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  input {
    width: auto;
    height: auto;
    margin: 0;
    accent-color: #ffd000;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 61px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #ffba00, #ffe13b);
  color: #111;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
`

export const Divider = styled.div`
  margin: 31px 0 20px;
  text-align: center;
  color: #999;
  font-size: 13px;
`

export const Socials = styled.div`
  display: flex;
  gap: 12px;

  button {
    flex: 1;
    height: 52px;
    border-radius: 9px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: #11151d;
    color: white;
    font-weight: 800;
    cursor: pointer;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

export const CreateAccount = styled.p`
  margin-top: 34px;

  a {
    display: block;
    margin-top: 7px;
  }
`