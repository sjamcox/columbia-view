import App from 'next/app'
import { getMainNavigationItems, getSocialAccounts } from '../client'
import { NavBar } from '../components/NavBar/NavBar'
import { SocialBlock } from '../components/SocialBlock/SocialBlock'

const MyApp = ({ Component, pageProps, navProps, socialProps }) => {
  return (
    <>
      <NavBar items={navProps.items}/>
      <Component {...pageProps} />
      <SocialBlock links={socialProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const navProps = await getMainNavigationItems()
  const socialProps = await getSocialAccounts()
  return { ...appProps, navProps, socialProps }
}

export default MyApp