import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from '../../services/firebase'

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
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

async function handleSubmit() {
  setError('')

  try {
    if (isRegister) {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      await sendEmailVerification(
        userCredential.user
      )

      setError(
        'Conta criada! Verifique seu e-mail antes de fazer login.'
      )

      setIsRegister(false)

      return
    }

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

    await userCredential.user.reload()

    if (!userCredential.user.emailVerified) {
      setError(
        'Você precisa verificar seu e-mail primeiro.'
      )
      return
    }

    navigate('/dashboard')
  } catch (err: any) {
    console.log(err.code)

    if (err.code === 'auth/email-already-in-use') {
      setError('Este e-mail já está cadastrado.')
      return
    }

    if (err.code === 'auth/weak-password') {
      setError(
        'A senha precisa ter pelo menos 6 caracteres.'
      )
      return
    }

    if (err.code === 'auth/invalid-email') {
      setError('Digite um e-mail válido.')
      return
    }

    if (err.code === 'auth/invalid-credential') {
      setError('E-mail ou senha incorretos.')
      return
    }

    setError('Erro: ' + err.code)
  }
}

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

        <StartButton type="button">▷ COMECE SUA JORNADA ❯</StartButton>

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
          <button
            type="button"
            className={!isRegister ? 'active' : ''}
            onClick={() => setIsRegister(false)}
          >
            LOGIN
          </button>

          <button
            type="button"
            className={isRegister ? 'active' : ''}
            onClick={() => setIsRegister(true)}
          >
            CADASTRO
          </button>
        </Tabs>

        <Crown>♛</Crown>

        <h2>{isRegister ? 'CRIE SUA CONTA!' : 'BEM-VINDO DE VOLTA!'}</h2>

        <p>
          {isRegister ? 'Cadastre-se e comece sua evolução.' : 'Entre na sua conta e continue '}
          {!isRegister && <span>evoluindo.</span>}
        </p>

        <Form>
          {isRegister && (
            <input
              type="text"
              placeholder="Nome de usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <small style={{ color: '#ff5555' }}>{error}</small>}

          {!isRegister && (
            <Options>
              <label>
                <input type="checkbox" defaultChecked />
                Lembrar de mim
              </label>

              <a href="#">Esqueci minha senha</a>
            </Options>
          )}

          <LoginButton type="button" onClick={handleSubmit}>
            {isRegister ? 'CADASTRAR ❯' : 'ENTRAR ❯'}
          </LoginButton>
        </Form>

        <Divider>OU ENTRE COM</Divider>

        <Socials>
          <button type="button">Google</button>
          <button type="button">Discord</button>
          <button type="button">Riot ID</button>
        </Socials>

        <CreateAccount>
          {isRegister ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'}

          <a href="#" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? ' Entrar agora ❯' : ' Criar conta agora ❯'}
          </a>
        </CreateAccount>
      </Card>
    </Page>
  )
}

export default Login