import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/firebase'

import {
  Container,
  Sidebar,
  Logo,
  Menu,
  Content,
  Header,
  Stats,
  CardGrid,
  CourseCard,
  ProgressBox,
  LogoutButton,
} from './styles'

function Dashboard() {
  const navigate = useNavigate()

  async function handleLogout() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <Container>
      <Sidebar>
        <Logo>
          <strong>NEXUS</strong>
          <span>ACADEMY</span>
        </Logo>

        <Menu>
          <button className="active">🎓 Meus cursos</button>
          <button>⚔️ Aulas</button>
          <button>📈 Desempenho</button>
          <button>🏆 Ranking</button>
          <button>📅 Campeonatos</button>
          <button>👤 Perfil</button>
        </Menu>

        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Sidebar>

      <Content>
        <Header>
          <div>
            <h1>Bem-vindo, Invocador</h1>
            <p>Continue sua jornada rumo ao Challenger.</p>
          </div>

          <span>Estudante</span>
        </Header>

        <Stats>
          <ProgressBox>
            <strong>Platina II</strong>
            <span>Elo atual</span>
          </ProgressBox>

          <ProgressBox>
            <strong>74%</strong>
            <span>Progresso nas aulas</span>
          </ProgressBox>

          <ProgressBox>
            <strong>18</strong>
            <span>Aulas concluídas</span>
          </ProgressBox>

          <ProgressBox>
            <strong>#128</strong>
            <span>Ranking da turma</span>
          </ProgressBox>
        </Stats>

        <h2>Meus cursos</h2>

        <CardGrid>
          <CourseCard>
            <div className="banner mid">MID LANE</div>
            <h3>Como subir de elo jogando Mid</h3>
            <p>Controle de wave, roaming e pressão de mapa.</p>
            <span>EM ANDAMENTO</span>
          </CourseCard>

          <CourseCard>
            <div className="banner jungle">JUNGLE</div>
            <h3>Macro game para Junglers</h3>
            <p>Rotas, objetivos, ganks e leitura do mapa.</p>
            <span>EM ANDAMENTO</span>
          </CourseCard>

          <CourseCard>
            <div className="banner adc">ADC</div>
            <h3>Posicionamento em team fight</h3>
            <p>Aprenda a causar dano sem morrer.</p>
            <span>NOVO</span>
          </CourseCard>

          <CourseCard>
            <div className="banner rank">RANKING</div>
            <h3>Desafio Challenger 30 dias</h3>
            <p>Missões diárias para evoluir sua gameplay.</p>
            <span>BLOQUEADO</span>
          </CourseCard>
        </CardGrid>
      </Content>
    </Container>
  )
}

export default Dashboard