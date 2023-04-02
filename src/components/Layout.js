import AppNavBar from './Appbar';
import SocialLinksWidget from '../widgets/SocialLinksWidget';
import WelcomeSection from './WelcomeSection';

const Layout = ({ toggle, themeMode }) => {
  return (
    <>
      <AppNavBar toggle={toggle} themeState={themeMode}></AppNavBar>
      <WelcomeSection />
      <SocialLinksWidget />
    </>
  );
};

export default Layout;
