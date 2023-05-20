import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import cels from '../../assets/images/main_store.png';
import './Inicio.css'
import '../../assets/css/animaciones.css'



function Inicio() {

  document.title = 'Flor de Raiz- Inicio';

  return (
    <div>
      <section className="mainjimp position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
        {/* Overlay */}
        <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
        {/* Contenido */}
        <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
          <div className="row row-grid align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              {/* Título */}
              <h1 className="ls-tight font-bolder display-5 text-white mb-5">
                ¡Bienvenidos a nuestra tienda! 
              </h1>
              {/* Texto */}
              <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
                La culpa de gastar, se acaba al estrenar.
                {/* Botones */}
              </p><div className="mt-10 mx-n2">
                <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
                  ¡Pedir Online!
                </Link>
                
  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <article>
          <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
            <img className="d-block mx-auto img-fluid mb-4" src={cels} alt="Mundo Tech" />
            <h1 className="display-5 fw-bold">Conectándote con lo que más amas.</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">¡Bienvenidos a nuestra tienda de teléfonos y tecnología! Somos un equipo apasionado por la tecnología y nos encanta ayudar a nuestros clientes a encontrar el dispositivo perfecto que se ajuste a sus necesidades y presupuesto.

</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Menú</button></Link>
                
              </div>
            </div>
          </div>
          {/* Para Desktops */}
          <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={cels} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Conectándote con lo que más amas.</h1>
                <p className="lead">¡Bienvenidos a nuestra tienda de teléfonos y tecnología! Somos un equipo apasionado por la tecnología y nos encanta ayudar a nuestros clientes a encontrar el dispositivo perfecto que se ajuste a sus necesidades y presupuesto.

</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menú</button></Link>
                </div>
              </div>
            </div>
          </div>
        </article>
        
      </section>

    </div>
  )
}

export default Inicio; 