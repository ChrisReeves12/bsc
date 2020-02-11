import React from 'react';
import {ContactSection} from "./ContactSection";
import {OrderOnlineSection} from "./OrderOnlineSection";

export function TopBar() {
    return (
        <div id='top-bar'>
            <div className='container'>
                <div className='top-bar-wrapper'>
                    <OrderOnlineSection/>
                    <ContactSection/>
                </div>
            </div>
        </div>
    )
}