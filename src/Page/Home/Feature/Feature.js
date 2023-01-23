import React from 'react';

const Feature = () => {
    return (

        <section className='container mb-5 mt-5'>
            <div
                class="bg-image p-5 text-center shadow-1-strong rounded pdd-top padd-bottom "
                style={{ backgroundImage: "url('https://i.ibb.co/44B1Kn9/BG.png')", backgroundRepeat: "no-repeat" }}
            >
                <div className='pt-5'>
                    <h1 class="mb-3 fw-bold text-white ">You can contribute to make
                        <br /> the environment greener!</h1>
                    <button className='btn-44 btn41-44'>Join as a volunteer</button>
                    <button className='btn-43 btn41-43 ms-3 mb-5 donates'>Donate</button>
                </div>
            </div>
        </section>

    );
};

export default Feature;