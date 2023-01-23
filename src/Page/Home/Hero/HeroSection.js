import React from 'react';

const HeroSection = () => {
    return (
        <div className='default_bg padd_top padd_bottom d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='row flex-column-reverse flex-lg-row'>
                    <div className='col-lg-1 col-sm-1' data-aos="fade-up-left" data-aos-duration="1500">
                        <p className='border-top border-3 border-secondary  side_border'></p>
                    </div>
                    <div className='col-lg-6 col-sm-1 hero_text' style={{ paddingLeft: '0px' }} data-aos="fade-up-left" data-aos-duration="1500">
                        <p className='fw-bold hero_para'>Donate</p>
                        <h1 className='hero_title'>Making a donation for Nature.</h1>
                        <p className='hero_para'>When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
                        <button className='btn-44 btn41-44 hero_para'>Donate Now</button>
                    </div>
                    <div className='col-lg-5 col-sm-1 margin_bottom' data-aos="fade-up-left" data-aos-duration="2000">
                        <img src="https://i.ibb.co/nPnzdmm/Image.png" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;