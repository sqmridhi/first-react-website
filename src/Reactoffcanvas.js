import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Slidemenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="--bs-tertiary-bg" size="lg" onClick={handleShow} >
      <h1>☰</h1>
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{ backgroundImage: 'url(pattern.webp)', backgroundSize: 'cover'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='' style={{listStyle: 'none'}}>
            <li><Link to="/" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>HOME</Link></li>
            <li><Link to="/fashion" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>FASHION</Link></li>
            <li><Link to="/beauty" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>BEAUTY</Link></li>
            <li><Link to="/food" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>TRAVEL</Link></li>
            <li><Link to="/travel" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>FOOD</Link></li>
            <li><Link to="/contact" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>CONTACT</Link></li>
            <li><Link to="/aboutus" onClick={handleClose} className='text-decoration-none text-dark fw-lighter' style={{ fontWeight: 'lighter', fontSize: '2.5rem' }}>ABOUT US</Link></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Slidemenu;