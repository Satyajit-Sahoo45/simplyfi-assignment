import React from 'react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="diamond">
                <div class="conner top left cor-1"></div>
                <div class="conner top right cor-2"></div>
                <div class="conner bottom left cor-3"></div>
                <div class="conner bottom right cor-4"></div>

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
