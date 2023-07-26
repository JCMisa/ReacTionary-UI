import React from 'react';

//import image
import Logo from '../images/react-logo-2.svg'

export default function Nav(){
    return(
        <>
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="https://www/facebook.com/"><img src={Logo} alt="react logo" width='30px' height='30px'/> ReacTionary</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link disabled" href="https://www/facebook.com/" tabindex="-1" aria-disabled="true">React Dictionary - UI Project 1 - JC MISA</a>
                </li>
            </ul>
        </>
    )
}