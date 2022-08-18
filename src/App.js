import Footer from './components/Footer';
import GraphicDesktop from './components/GraphicDesktop';
import GraphicMobile from './components/GraphicMobile';
import GridDesktop from './components/GridDesktop';
import GridMobile from './components/GridMobile';
import Header from './components/Header';
import Showcase from './components/Showcase';
import StandOut from './components/StandOut';
import Testimonials from './components/Testimonials';
import Transform from './components/Transform';

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      <div className='block md:hidden'>
        <GraphicMobile />
      </div>
      <div className='hidden md:block'>
        <GraphicDesktop />
      </div>
      <Testimonials />
      <div className ='block md:hidden' >
        <GridMobile />
      </div>
      <div className ='hidden md:block' >
        <GridDesktop />
      </div>
      <Footer />
    </>
  );
}

export default App;
