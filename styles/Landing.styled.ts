import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  min-height: 100vh;
  padding: 0 2.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  height: 100vh;
  /* fallback for old browsers */
  background: #abbaab;
  /* for Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #ffffff, #abbaab);
  /* for W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ffffff, #abbaab);

  @media (min-width: 710px) {
    padding: 0 9.3rem;
  }
`;

const LandingPageMainContentContainer = styled.div<{ showbackgroundimage: boolean }>`
  background-image: url(${(props) => (props.showbackgroundimage ? '/banner-image.png' : '')});
  background-image: '/banner-image.png';
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  /* border: 1px solid yellow; */
`;
const LandingPageMainDescriptionContainer = styled.div`
  /* border: 1px solid green; */
  @media (min-width: 900px) {
    width: 58%;
  }
`;
const LandingPageMainDescriptionHeading = styled(Typography)`
  font-size: 4rem;
  line-height: 5.937rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;
const LandingPageDescriptionSubtitle = styled(Typography)`
  font-size: 1.312rem;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
  line-height: 2.25rem;
  margin-bottom: 2rem;
`;

export {
  LandingPageContainer,
  LandingPageMainContentContainer,
  LandingPageMainDescriptionContainer,
  LandingPageMainDescriptionHeading,
  LandingPageDescriptionSubtitle,
};
