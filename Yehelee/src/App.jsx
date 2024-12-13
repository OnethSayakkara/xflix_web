import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Footer from './components/Footer';
import VideoGrid from './components/VideoGrid';




function App() {
  

  // Once loading is done, display the main content (landing page)
  return (
    <main className='overflow-x-hidden'>
          <Header />
          <HeaderTwo/>
          <VideoGrid/>
          
          <Footer/>     
    </main>

    
  );
}

export default App;
