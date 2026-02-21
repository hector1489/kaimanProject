import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-cyber">
      <p className="m-0">
        Gracias por visitar mi sistema, ¡buena exploración! 
        <span className='text-neon-purple fw-bold'> !</span> 🚀 
        <a 
          href="https://github.com/hector1489" 
          target='_blank' 
          rel="noopener noreferrer"
          className="ms-2 neon-link-green"
        >
          @Hector_Gonzalez
        </a> 
        , {currentYear}.
      </p>
    </footer>
  );
}

export default Footer;