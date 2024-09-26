import MainTemplate from '../components/templates/MainTemplate';
import HeroSection from '../components/organisms/section/HeroSection';
import HowToPlay from '../components/organisms/section/HowToPlay';
import TryItNow from '../components/organisms/section/TryItNow';

function Home() {
  return (
    <MainTemplate>
      <HeroSection />
      <TryItNow />
      <HowToPlay />
    </MainTemplate>
  );
}

export default Home;
