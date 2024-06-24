import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="diamond">
                <div class="conner top left"></div>
                <div class="conner top right"></div>
                <div class="conner bottom left"></div>
                <div class="conner bottom right"></div>

                <div className="text">
                    <div className='inner_text_1'>HTML
                        <span className='andsym'>&</span>
                        CSS
                    </div>
                    <span className='desc'>design and build websites</span>
                </div>
            </div>
        </div>
    );
}

export default Logo;
