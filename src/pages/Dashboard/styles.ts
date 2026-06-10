import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  background: #0b0d13;
  color: #fff;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.aside`
  width: 260px;
  background: #11141d;
  border-right: 1px solid rgba(255, 208, 0, 0.15);
  padding: 28px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Logo = styled.div`
  margin-bottom: 40px;

  strong {
    display: block;
    font-size: 30px;
    letter-spacing: 3px;
  }

  span {
    color: #ffd000;
    letter-spacing: 6px;
    font-size: 12px;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    text-align: left;
    padding: 15px;
    border-radius: 12px;
    background: transparent;
    color: #aaa;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  .active,
  button:hover {
    background: rgba(255, 208, 0, 0.12);
    color: #ffd000;
  }
`

export const LogoutButton = styled.button`
  margin-top: auto;
  padding: 14px;
  border-radius: 10px;
  background: #ffd000;
  color: #111;
  font-weight: 900;
  border: none;
  cursor: pointer;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`

export const Content = styled.section`
  flex: 1;
  padding: 34px;
  overflow-y: auto;

  h2 {
    margin: 32px 0 20px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const Header = styled.header`
  min-height: 90px;
  background: #141824;
  border: 1px solid rgba(255, 208, 0, 0.12);
  border-radius: 18px;
  padding: 22px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 28px;
  }

  p {
    color: #aaa;
    margin-top: 6px;
  }

  span {
    background: rgba(255, 208, 0, 0.12);
    color: #ffd000;
    padding: 10px 16px;
    border-radius: 999px;
    font-weight: 800;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 23px;
    }
  }
`

export const Stats = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

export const ProgressBox = styled.div`
  background: #141824;
  border-radius: 16px;
  padding: 22px;
  border: 1px solid rgba(255, 208, 0, 0.12);

  strong {
    display: block;
    font-size: 28px;
    color: #ffd000;
  }

  span {
    color: #aaa;
    font-size: 14px;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const CourseCard = styled.article`
  background: #141824;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 208, 0, 0.12);

  .banner {
    height: 150px;
    display: flex;
    align-items: end;
    padding: 18px;
    font-size: 28px;
    font-weight: 900;
    color: white;
  }

  .mid {
    background: linear-gradient(135deg, #3a0ca3, #f72585);
  }

  .jungle {
    background: linear-gradient(135deg, #064e3b, #22c55e);
  }

  .adc {
    background: linear-gradient(135deg, #1e3a8a, #38bdf8);
  }

  .rank {
    background: linear-gradient(135deg, #713f12, #ffd000);
  }

  h3 {
    padding: 18px 18px 8px;
    font-size: 18px;
  }

  p {
    padding: 0 18px;
    color: #aaa;
    font-size: 14px;
    min-height: 52px;
  }

  span {
    display: block;
    margin: 18px;
    color: #ffd000;
    font-weight: 900;
  }
`