import React from 'react';
import {TopBar} from "./TopBar";
import {NavSection} from "./NavSection";

export function HeadSection() {
    return (
        <div id='head-section'>
            <TopBar/>
            <NavSection/>
        </div>
    );
}