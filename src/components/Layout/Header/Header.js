import React from 'react'
import './Header.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from '../../Home/Home'
import Signin from '../../Signin/Signin'
import Signup from '../../Signup/Signup'
import { useSelector } from 'react-redux'
import { logout } from '../../../redux/actions/user'
import store from '../../../redux/store/store'

export default function Header() {

  const user = useSelector(state => state.user.user)

  const logoutFunction = () => {
    store.dispatch(logout())
  }

  console.log('Header user', user)
  return (
    <div className="navbar">
      <nav className="header">
      <div>
      <Link to="/">
        LOGO 
        </Link>
        </div>
        <div>

        </div>

        { user === undefined ? 
        <div className='btnBox'>
          <button className="signupBtn"><Link to="/signup">S'inscrire</Link></button>
          <button className="signinBtn"><Link to="/signin">Se connecter</Link></button>
        </div>

        :

        <div className="btnBox">
          <h4>Bienvenue, {user.firstname}</h4>
          <button className="signinBtn" onClick={() => logoutFunction()}><Link to="/">Se déconnecter</Link></button>
        </div>

        }
      </nav>
    </div>

  )
}
