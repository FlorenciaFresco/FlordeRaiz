import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/spinner.png';

function LoadingSpinner() {
  return (
    <Container><img src={logo} height="380" width="480" alt="logojimp" className="img-fluid" />
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </Container>
  )
}

export default LoadingSpinner