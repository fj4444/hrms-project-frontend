import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='container py-5 mt-5'>
      <div className='row'>
        <Link to='/' className='navbar-brand fs-4 fw-bold'>
          <center>Soccer Betting on <span className='text-secondary'>Blockchain</span></center>
        </Link>
      </div>
    </footer>
  );
}
