import React from 'react';
import {Logo} from "./Logo";
import {MainNavigation} from "./MainNavigation";

export function NavSection() {
    return (
        <div id='nav-section'>
            <div className='container'>
                <Logo/>
                <MainNavigation/>
            </div>
        </div>
    );
}