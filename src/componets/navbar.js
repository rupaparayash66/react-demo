import React from "react";


function Navbar() {

    return (
        <div className="main flex">
            <div className="img">
                <img src="https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e" />
            </div>
            <div className="section-n flex justiy">
                <li class="li1"><a href="https://rickandmortyapi.com/documentation">Docs</a></li>
                <li class="li1"><a href="https://rickandmortyapi.com/about">About</a></li>
                <button class="btn"><a href="https://rickandmortyapi.com/support-us">SUPPORT US</a></button>
            </div>
        </div>
    )

}

    

export default Navbar;