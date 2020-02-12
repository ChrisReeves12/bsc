import React from 'react';
import {TopBar} from "./TopBar";
import {NavSection} from "./NavSection";
import {CenterBanner} from "./CenterBannerText";
import {BannerMarqueeSelector} from "./BannerMarqueeSelector";

export function HeadSection() {
    return (
        <div id='head-section'>
            <TopBar/>
            <NavSection/>
            <CenterBanner/>
            <BannerMarqueeSelector/>
        </div>
    );
}