import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()

    const validationErrors = []

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      validationErrors.push('Please fill in all fields')
    }

    if (
      fullName.trim() &&
      !fullName.trim().includes(' ')
    ) {
      validationErrors.push('Please enter your first and last name')
    }

    if (
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      validationErrors.push('Please enter a valid email address')
    }

    if (
      password &&
      confirmPassword &&
      password !== confirmPassword
    ) {
      validationErrors.push('Passwords do not match')
    }

    if (password && password.length < 6) {
      validationErrors.push(
        'Password must be at least 6 characters'
      )
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      setSuccess('')
      return
    }

    setErrors([])
    setSuccess('')

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        )

      const user = userCredential.user

      await updateProfile(user, {
        displayName: fullName.trim()
      })

      await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName.trim(),
        email: email.trim()
      })

      setSuccess('Account created successfully! Redirecting to login...')
      
      // No alert popup
      window.location.href = '/login'
    } catch (error) {
      console.log(error)

      if (error.code === 'auth/email-already-in-use') {
        setErrors(['This email is already registered'])
      } else if (error.code === 'auth/invalid-email') {
        setErrors(['Please enter a valid email address'])
      } else if (error.code === 'auth/weak-password') {
        setErrors(['Password must be at least 6 characters'])
      } else {
        setErrors(['Unable to create account. Please try again.'])
      }

      setSuccess('')
    }
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-box">
          <h1>Sign Up</h1>

          <form
            className="auth-form"
            onSubmit={handleSignUp}
            noValidate
          >
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                setErrors([])
                setSuccess('')
              }}
              required
            />

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

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                setErrors([])
                setSuccess('')
              }}
              required
            />

            <button type="submit">
              Create Account
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
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SignUp
