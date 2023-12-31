import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../../components/SignUpForm/SignUpForm';
import LoginForm from '../../../components/LoginForm/LoginForm';
import Logo from '../../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <main className="AuthPage">
      <div>
        <Logo />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}