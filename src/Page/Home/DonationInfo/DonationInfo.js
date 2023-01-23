import React from 'react';

const DonationInfo = () => {
    return (
        <section className='container'>
            <div className='row'>
                <div className='col-lg-4 col-sm-1' data-aos="fade-up-left" data-aos-duration="1500">
                    <h1 className='fw-bold titles'>How we use your donation</h1>
                </div>
                <div className='col-lg-4 col-sm-1 ' data-aos="fade-up-left" data-aos-duration="2000">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div className='col-lg-4 col-sm-1' data-aos="fade-up-left" data-aos-duration="2500">
                    <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                </div>
            </div>
        </section>
    );
};

export default DonationInfo;