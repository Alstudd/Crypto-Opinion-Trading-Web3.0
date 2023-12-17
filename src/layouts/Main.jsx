import React from 'react'
import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router';

function Main() {
    return (
        <div>
            <Outlet />
        </div>
    );
  }

export default Main