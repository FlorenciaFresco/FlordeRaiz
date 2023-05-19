import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.svg';
import promo1 from '../../assets/Images/Sahumerio1.svg';
import promo2 from '../../assets/Images/Vela1.svg';
import promo3 from '../../assets/Images/Caldero.svg';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../component/LoadingSpinner/index';


function Inicio() {

    document.title = 'Flor de Raiz - Inicio';


    if (promo3 === undefined) {
        return <section id="menu" className="py-5 text-center container">
            <div className="album bg-degrade py-5">
                <div className="container">
                    <div className="">
                        <LoadingSpinner />
                    </div></div></div>
        </section>
    }
    return (
        <div>
            <section className="main position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
                {/* Overlay */}
                <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
                {/* Contenido */}
                <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
                    <div className="row row-grid align-items-center">
                        <div className="col-lg-8 text-center text-lg-start">
                            {/* Título */}
                            <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                                Bienvenido a la tienda esoterica de Flor
                            </h1>
                            {/* Texto */}
                            <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
                                Tenemos las mejores los mejores productos y complementos a los mejores precios y al alcance de un click.
                                {/* Botones */}
                            </p><div className="mt-10 mx-n2">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <article>
                    <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
                        <img className="d-block mx-auto img-fluid mb-4" src={logo} alt="Mundo Tech" />
                        <h1 className="display-5 fw-bold">¡Productos nuevos todas las semanas!</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Nos encanta que formes parte de nuestro mundo, buscamos llevar armonia y paz a tu hogar.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Menú</button></Link>
                                
                            </div>
                        </div>
                    </div>
                    {/* Para Desktops */}
                    <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <p className="lead">¡Bienvenidos a nuestra tienda de teléfonos y tecnología! Somos un equipo apasionado por la tecnología y nos encanta ayudar a nuestros clientes a encontrar el dispositivo perfecto que se ajuste a sus necesidades y presupuesto.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menú</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="pricing-header p-3 py-2 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">¡Promociones!</h1>
                    <p className="fs-5">Debes sentarte sin juzgar, observando los pensamientos que fluyen a través de ti. Sin interferir. Si juzgas, si dices “esto es bueno” o “esto es malo”, has perdido la pura observación. </p>
                </div>
                <div className="mundos text-center container col-xxl-8 px-4 py-2 d-lg-block">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                                    <h4 className="my-0 fw-normal">Sahumos</h4>
                                </div>
                                <div className="card-bodyjimp rounded-bottom" >
                                    <img src={promo1} height="380" width="350" alt="comboamericanaconfritas" className="img-fluid" />
                                    <h1 className="card-title pricing-card-title mt-3 text-white">Precios bajos</h1>
                                   
                                    <Link to="/category/Saumerios&Hierbas"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                                    <h4 className="my-0 fw-normal">Mundo velas</h4>
                                </div>
                                <div className="card-bodyjimp rounded-bottom">
                                    <img src={promo2} height="280" width="230" alt="comboamericanaconfritas" className="img-fluid" />
                                    <h1 className="card-title pricing-card-title mt-3 text-white">Desde $500</h1>
                                    
                                    <Link to="/category/Velas"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                <div className="card-header py-3 text-white bg-primary bg-success border-primary">
                                    <h4 className="my-0 fw-normal">¡Complementos!</h4>
                                </div>
                                <div className="card-bodyjimp rounded-bottom">
                                    <img src={promo3} height="380" width="280" alt="comboamericanaconfritas" className="img-fluid" />
                                    <h1 className="card-title pricing-card-title mt-3 text-white">Desde $500</h1>
                                    
                                    <Link to="/category/Complementos"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Inicio; 