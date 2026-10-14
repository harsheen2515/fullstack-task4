
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import Navbar from './Navbar'
import Footer from './Footer'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  // Redirect after showing the success message
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/')
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  const handleLogin = async (e) => {
    e.preventDefault()

    const validationErrors = []

    if (!email.trim() || !password) {
      validationErrors.push('Please fill in all fields')
    }

    if (
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      validationErrors.push('Please enter a valid email address')
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      setSuccess('')
      return
    }

    setErrors([])
    setSuccess('')

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      )

      setSuccess('Login successful! Redirecting...')
    } catch (error) {
      console.log(error)

      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrors(['Invalid email or password'])
      } else if (error.code === 'auth/invalid-email') {
        setErrors(['Please enter a valid email address'])
      } else if (error.code === 'auth/too-many-requests') {
        setErrors([
          'Too many failed attempts. Please try again later.'
        ])
      } else {
        setErrors(['Unable to log in. Please try again.'])
      }

      setSuccess('')
    }
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-box">
          <h1>Login</h1>

          <form
            className="auth-form"
            onSubmit={handleLogin}
            noValidate
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors([])
                setSuccess('')
              }}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setErrors([])
                setSuccess('')
              }}
              required
            />

            <button type="submit">
              Login
            </button>

            {errors.length > 0 && (
              <div className="error-messages">
                {errors.map((error, index) => (
                  <p key={index} className="error-message">
                    {error}
                  </p>
                ))}
              </div>
            )}

            {success && (
              <p className="success-message">
                {success}
              </p>
            )}
          </form>

          <p>
            Don't have an account?{' '}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
