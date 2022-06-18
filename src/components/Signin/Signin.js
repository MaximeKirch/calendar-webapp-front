import React, {useState} from 'react'
import './Signin.css'
import store from '../../redux/store/store'
import { login } from '../../redux/actions/auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/actions/user'

export default function Signin() {
  const userId = useSelector(state => state.auth.initialState?.userId)
  const token = useSelector(state => state.auth.initialState?.token)
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const resetErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const goToProfile = (userId) => {
    getUser(userId, token)
    navigate('/profile')
  }

  const verifyInputs = () => {
    resetErrors()
    if(email.length < 10 || !email.includes('@')) setEmailError('Veuillez entrer un email valide.')
    if(password.length < 8) setPasswordError('Votre mot de passe doit contenir au moins 8 caractères.')
    store.dispatch(login(email, password))
    .then(userId !== undefined ? navigate('/profile') : null)
    
    store.dispatch(getUser(userId))



  }

  return (
    <div className="signinContainer">
        <div className="signinFormContainer">
              <h3>Se connecter</h3>

              <form className="signinForm">
                <label>Email</label>
                <input type="mail" value={email} placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} />
                <span>{emailError}</span>
                <label>Mot de passe</label>
                <input type="password" value={password} placeholder="Votre mot de passse" onChange={(e) => setPassword(e.target.value)} />
                <span>{passwordError}</span>
              </form>
                <button className="signInBtn" onClick={() => verifyInputs()}>Se connecter</button>
        </div>
    </div>
  )
}
