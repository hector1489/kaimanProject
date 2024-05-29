
import { Intro, Description, Video, Footer, MainGallery, } from '../../components/index.jsx'
import './Home.css'

const Home = () => {


  return (
    <>
    <div className='container-Home'>
      <div className="p-2">
        <Intro />
      </div>

      <div className="mt-2 p-2">
        <MainGallery />
      </div>

      <div className="mt-5">
        <Video />
      </div>

      <div className="m-4">
        <Description />
      </div>

      <div className="container-arrow d-flex mt-4">
        <a href="#top" className="social-icon">
          <i className="fa-solid fa-angle-up fa-flip fa-2xl"></i>
        </a>
      </ div>
    </div>
    <div className="mt-2">
    <Footer />
  </div>
  </>
  );
}

export default Home