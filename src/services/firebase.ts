import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAdjx7e0ZE_mUzt5CsUTwScTtJde9G9RnE',
  authDomain: 'cursos-rodrigal.firebaseapp.com',
  projectId: 'cursos-rodrigal',
  storageBucket: 'cursos-rodrigal.firebasestorage.app',
  messagingSenderId: '624734015119',
  appId: '1:624734015119:web:84d37cff2a973d5659aafa',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app