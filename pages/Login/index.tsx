import {
  Page,
  Left,
  Logo,
  Hero,
  Features,
  StartButton,
  Stats,
  RankCard,
  Card,
  Tabs,
  Crown,
  Form,
  Options,
  LoginButton,
  Divider,
  Socials,
  CreateAccount,
} from './styles'

function Login() {
  return (
    <Page>
      <Left>
        <Logo>
          <div className="symbol">◆</div>

          <div>
            <h1>NEXUS</h1>
            <span>ACADEMY</span>
          </div>
        </Logo>

        <Hero>
          <h2>
            DOMINE.
            <br />
            EVOLUA.
            <br />
            <strong>SEJA CHALLENGER.</strong>
          </h2>

          <p>
            Cursos, coaches e estratégias para te levar ao próximo elo em{' '}
            <span>League of Legends.</span>
          </p>
        </Hero>

        <Features>
          <div>🎯 Conteúdo exclusivo</div>
          <div>🏆 Coaches Challenger</div>
          <div>📈 Evolua seu jogo todos os dias</div>
        </Features>

        <StartButton type="button">
          ▷ COMECE SUA JORNADA ❯
        </StartButton>

        <Stats>
          <div>
            <strong>25.873+</strong>
            <span>ALUNOS ATIVOS</span>
          </div>

          <div>
            <strong>180+</strong>
            <span>CURSOS</span>
          </div>

          <div>
            <strong>350+</strong>
            <span>COACHES</span>
          </div>

          <div>
            <strong>1.250+</strong>
            <span>PARTIDAS ANALISADAS</span>
          </div>
        </Stats>
      </Left>

      <RankCard>
        <div className="badge">♛</div>

        <span>ELO MÁXIMO</span>

        <strong>CHALLENGER</strong>

        <p>TOP 0.1% PLAYERS</p>
      </RankCard>

      <Card>
        <Tabs>
          <button type="button" className="active">
            LOGIN
          </button>

          <button type="button">
            CADASTRO
          </button>
        </Tabs>

        <Crown>♛</Crown>

        <h2>BEM-VINDO DE VOLTA!</h2>

        <p>
          Entre na sua conta e continue <span>evoluindo.</span>
        </p>

        <Form>
          <input
            type="text"
            placeholder="E-mail ou usuário"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <Options>
            <label>
              <input
                type="checkbox"
                defaultChecked
              />

              Lembrar de mim
            </label>

            <a href="#">
              Esqueci minha senha
            </a>
          </Options>

          <LoginButton type="button">
            ENTRAR ❯
          </LoginButton>
        </Form>

        <Divider>
          OU ENTRE COM
        </Divider>

        <Socials>
          <button type="button">
            Google
          </button>

          <button type="button">
            Discord
          </button>

          <button type="button">
            Riot ID
          </button>
        </Socials>

        <CreateAccount>
          Ainda não tem uma conta?

          <a href="#">
            Criar conta agora ❯
          </a>
        </CreateAccount>
      </Card>
    </Page>
  )
}

export default Login