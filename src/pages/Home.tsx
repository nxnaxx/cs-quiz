import Header from '../components/organisms/header/Header';
import HeroSection from '../components/organisms/section/HeroSection';
import HowToPlay from '../components/organisms/section/HowToPlay';
import TryItNow from '../components/organisms/section/TryItNow';
import Footer from '../components/organisms/footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TryItNow />
      <HowToPlay />
      <Footer />
    </>
  );
}

export default Home;
