import Footer from '@organisms/footer/Footer';
import Header from '@organisms/header/Header';
import HeroSection from '@organisms/section/HeroSection';
import HowToPlay from '@organisms/section/HowToPlay';
import TryItNow from '@organisms/section/TryItNow';

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
