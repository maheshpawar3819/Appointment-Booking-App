import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appointment System</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-gray-300">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/modify" className="hover:text-gray-300">
                Modify Appointment
              </Link>
            </li>
            <li>
              <Link to="/cancel" className="hover:text-gray-300">
                Cancel Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
