import React from 'react';

const Footer = () => {
    let footeerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    
    return (
        <>
            
            <footer className='bg-dark text-light py-3' style={footeerStyle}>
                <p className="text-center">
                    Copyright &#169; R-deal.in
                </p>
            </footer>
        </>
    )
};
export default Footer;