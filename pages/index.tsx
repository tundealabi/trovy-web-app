import { useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Typewriter from 'typewriter-effect';
import AppHeaderNav from '../components/app_header_nav/AppHeaderNav';
import AuthDialog from '../components/auth/AuthModal';
import AuthButton from '../components/shared/auth_button/AuthButton';
import { showAuthDialog } from '../redux/auth_dialog/auth-dialog.slice';
import { useAppDispatch } from '../redux/hooks';
import {
  LandingPageContainer,
  LandingPageDescriptionSubtitle,
  LandingPageMainContentContainer,
  LandingPageMainDescriptionContainer,
  LandingPageMainDescriptionHeading,
} from '../styles/Landing.styled';

const Home: NextPage = () => {
  const matchesScreen = useMediaQuery('(min-width:211100px)');
  const dispatch = useAppDispatch();
  const handleShowAuthDialog = () => dispatch(showAuthDialog('login'));
  return (
    <>
      <AuthDialog />
      <LandingPageContainer>
        <Head>
          <title>Trove - Invest in US, Chinese Stocks From Nigeria</title>
          <meta
            name='description'
            content='Start trading and investing in US stocks from Nigeria, 
          all from the tap of a button. You also have access to Nigerian and Chinese stocks on the Trove app.'
          />
          <link rel='icon' href='https://www.troveapp.co/favicon.ico' />
        </Head>
        <AppHeaderNav />
        <LandingPageMainContentContainer showbackgroundimage={matchesScreen}>
          <LandingPageMainDescriptionContainer>
            <LandingPageMainDescriptionHeading variant='h1'>
              Loaning simplified
            </LandingPageMainDescriptionHeading>
            <LandingPageDescriptionSubtitle>
              Forget high account opening fees. Become a global investor with the tap of a button.
              Invest in American, Chinese and Nigerian stocks, Bonds, ETFs and more with as little
              as ₦1,000
            </LandingPageDescriptionSubtitle>
            <AuthButton variant='contained' onClick={handleShowAuthDialog}>
              Login
            </AuthButton>
          </LandingPageMainDescriptionContainer>
        </LandingPageMainContentContainer>
      </LandingPageContainer>
    </>
  );
};

export default Home;
