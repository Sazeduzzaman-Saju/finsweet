import React from 'react';
import Tabss from '../../../Comps/Tabs';


const Contribute = () => {
    return (
        <section className='container padd_top mb-5'>
            <div className='row border-bottom border-1 pb-5'>
                <div className='col-lg-6  col-sm-1' data-aos="fade-up-left" data-aos-duration="1500">
                    <h1 className='fw-bold titles'>How you can contribute to protect Earth</h1>
                    <p className='contribute_para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div class="col-lg-6 " data-aos="fade-up-left" data-aos-duration="2000">
                    <Tabss></Tabss>
                </div>
            </div>
        </section >
    );
};

export default Contribute;