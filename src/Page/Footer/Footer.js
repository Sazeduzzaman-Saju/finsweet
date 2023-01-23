import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-black text-white">
            <section class="d-flex justify-content-center justify-content-lg-between ">
                <div>
                    <a href="/" class="text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" class="text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/" class="text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="/" class="text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="/" class="text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="/" class="text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class=" col-lg-2 col-sm-1 mx-auto mb-4">
                            <img src="https://i.ibb.co/rpbsvnm/Logo-1.png" alt="" className='img-fluid' />
                        </div>
                        <div class="col-lg-2 col-sm-1 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Our Team
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Team</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">What we do</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Contact</a>
                            </p>
                        </div>
                        <div class="col-lg-2 col-sm-1 mx-auto mb-4 text-white">
                            <h6 class="text-uppercase fw-bold mb-4">
                                More
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Projects</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Events</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Donate</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Blog</a>
                            </p>
                        </div>
                        <div class="col-lg-2 col-sm-1 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Connect
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Facebook</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Instagram</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Twitter</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Linkdin </a>
                            </p>
                        </div>
                        <div class="col-lg-4 col-sm-1 mb-md-0 mb-4">
                            <h2 class="text-uppercase display-7 fw-bold mb-4">Subscribe to get latest updates</h2>
                            <div>
                                <div class="input-group pt-5">
                                    <input type="email" class="form-control bg-black" placeholder="Enter your email" />
                                    <span class="input-group-btn me-0">
                                        <button class="btn btn-theme bg-white " type="submit" style={{ marginLeft: "-5px" }}>Subscribe</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </footer >
    );
};

export default Footer;