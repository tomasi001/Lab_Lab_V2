import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser, logOut } = useAuth()
  console.log(currentUser)

  useEffect(() => {
    if (!currentUser) {
      navigate(routes.login())
    }
  }, [ currentUser])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <div>
        <span>Logged in as {currentUser?.email}</span>{' '}
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
