
import { Intro, Description, Video, Footer, MainGallery, } from '../../components/index.jsx'
import './Home.css'

const Home = () => {


  return (
    <>
      <div className='container-Home'>
        <div className="p-2">
          <Intro />
        </div>

        <div className="mt-2">
          <MainGallery />
        </div>

        <div className="mt-5">
          <Video />
        </div>

        <div className="mt-5 p-2">
          <Description />
        </div>

      </div>

      <div className="container-arrow d-flex mt-4">
        <a href="#top" className="social-icon">
          <i className="fa-solid fa-angle-up fa-flip fa-2xl"></i>
        </a>
      </ div>

      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}

export default Home