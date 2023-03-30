import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import CryptoJS from 'crypto-js'
import { useEffect, useRef } from 'react'
import { useAuth } from 'src/auth'
import PasswordInput from 'src/components/PasswordInput/PasswordInput'
import TextInput from 'src/components/TextInput/TextInput'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.verify())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    console.log({ data })
    if (data.password !== data.confirmPassword) {
      toast.error('Your passwords did not match, please try again!')
      return
    }

    try {
      const response = await signUp({
        username: data.email,
        password: data.password,
      })
      if (response.message) {
        toast(response.message)
        // navigate(routes.verify())
      } else if (response.error) {
        toast.error(response.error)
      } else {
        // user is signed in automatically
        toast.success('Welcome!')
        navigate(routes.verify())
      }
      console.log({ response })
    } catch (error) {
      console.log(error)
    }

    // try {
    //   const response = await signUp({
    //     username: data.email,
    //     hashedPassword: hashedPassword,
    //     salt,
    //   })

    //   if (response.message) {
    //     toast(response.message)
    //     // navigate(routes.verify())
    //   } else if (response.error) {
    //     toast.error(response.error)
    //   } else {
    //     // user is signed in automatically
    //     toast.success('Welcome!')
    //     navigate(routes.verify())
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <>
      <MetaTags title="Signup" />
      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>
            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <TextInput
                    name="email"
                    label="Email"
                    ref={emailRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    }}
                  />
                  <PasswordInput
                    name="password"
                    label="Password"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <PasswordInput
                    name="confirmPassword"
                    label="Confirm Password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password confirmation is required',
                      },
                    }}
                  />
                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
