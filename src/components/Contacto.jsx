

const Contacto = () => {
    return (
        <>
            <section className="container-fluid my-5">
                <h3 className="display-4 fw-bold text-center my-4">Contacto</h3>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <form>
                            <div className="form-group mb-4">
                                <label className="mb-2">Nombre</label>
                                <input className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group mb-4">
                                <label className="mb-2">Correo electrónico</label>
                                <input className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label className="mb-2">Escribe aquí tu mensaje</label>
                                <textarea className="form-control" placeholder="Write your message here..."></textarea>
                            </div>
                            <div className="my-3 text-end">
                                <button className="btn btn-lg btn-dark text-light btn-outline-secondary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="fa-3x text-center color-dark">
                            <a className="social-icon pe-2" href="https://github.com/hector1489" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="social-icon ps-2" href="https://www.linkedin.com/in/hector-gonzalez-6ab633256/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="social-icon ps-2" href="https://www.instagram.com/agratbatmalath/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacto
