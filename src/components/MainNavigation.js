import React from 'react';

export function MainNavigation() {
    return (
        <div id='main-navigation'>
            <nav>
                <ul>
                    <li className='selected'><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Order</a></li>
                    <li><a href=''>Catering</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}