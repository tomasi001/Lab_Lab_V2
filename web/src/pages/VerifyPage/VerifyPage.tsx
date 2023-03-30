import { Form, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'
import TextInput from 'src/components/TextInput/TextInput'

interface FormValues {
  otp: string
}

const VerifyPage = () => {
  const onSubmit = async (data: FormValues) => {
    console.log( "on_success" )
    navigate(routes.userDetails())
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
                    name="otp"
                    label="OTP"
                    validation={{
                      required: {
                        value: true,
                        message: 'OTP is required',
                      },
                    }}
                  />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Verify</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
  // return (
  //   <>
  //     <MetaTags title="Verify" description="Verify page" />

  //     <h1>VerifyPage</h1>
  //     <p>
  //       Find me in <code>./web/src/pages/VerifyPage/VerifyPage.tsx</code>
  //     </p>
  //     <p>
  //       My default route is named <code>verify</code>, link to me with `
  //       <Link to={routes.verify()}>Verify</Link>`
  //     </p>
  //   </>
  // )
}

export default VerifyPage
