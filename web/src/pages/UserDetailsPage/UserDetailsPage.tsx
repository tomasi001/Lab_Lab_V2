import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'
import TextInput from 'src/components/TextInput/TextInput'

interface FormValues {
  firstName: string
  lastName: string
}

const UserDetailsPage = () => {
  const onSubmit = async (data: FormValues) => {
    console.log("on_success")
    navigate(routes.home())
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
                    name="firstName"
                    label="First name"
                    validation={{
                      required: {
                        value: true,
                        message: 'First Name is required',
                      },
                    }}
                  />
                  <TextInput
                    name="lastName"
                    label="Last name"
                    validation={{
                      required: {
                        value: true,
                        message: 'Last Name is required',
                      },
                    }}
                  />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Update Information
                    </Submit>
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
  //     <MetaTags title="UserDetails" description="UserDetails page" />

  //     <h1>UserDetailsPage</h1>
  //     <p>
  //       Find me in{' '}
  //       <code>./web/src/pages/UserDetailsPage/UserDetailsPage.tsx</code>
  //     </p>
  //     <p>
  //       My default route is named <code>userDetails</code>, link to me with `
  //       <Link to={routes.userDetails()}>UserDetails</Link>`
  //     </p>
  //   </>
  // )
}

export default UserDetailsPage
