export function Home(){
    return(
        <div>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/theme/img/carousel-1.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Professional</p>
                            <h1 className="animated fadeInLeft">For Your Dream Project</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="/theme/img/carousel-2.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Professional Builder</p>
                            <h1 className="animated fadeInLeft">We Build Your Home</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="/theme/img/carousel-3.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">We Are Trusted</p>
                            <h1 className="animated fadeInLeft">For Your Dream Home</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
            <div className="feature wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Expert Worker</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Quality Work</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>24/7 Support</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="/theme/img/about.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Welcome to Builderz</p>
                                <h2>25 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a className="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="fact">
                <div className="container-fluid">
                    <div className="row counters">
                        <div className="col-md-6 fact-left wow slideInLeft">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-worker"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">109</h2>
                                        <p>Expert Workers</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">485</h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fact-right wow slideInRight">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-address"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">789</h2>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-crane"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">890</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            
           
            <div className="video wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div className="modal fade" id="videoModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                           
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video"  allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Team</p>
                        <h2>Meet Our Engineer</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/theme/img/team-1.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>CEO & Founder</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/theme/img/team-2.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Civil Engineer</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/theme/img/team-3.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Jhon Doe</h2>
                                    <p>Interior Designer</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="/theme/img/team-4.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Painter</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="faqs">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Frequently Asked Question</p>
                        <h2>You May Ask</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion-1">
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            Lorem ipsum dolor sit amet?
                                        </a>
                                    </div>
                                    <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial-slider-nav">
                                <div className="slider-nav"><img src="/theme/img/testimonial-1.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-2.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-3.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-4.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-1.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-2.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-3.jpg" alt="Testimonial" /></div>
                                <div className="slider-nav"><img src="/theme/img/testimonial-4.jpg" alt="Testimonial" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial-slider">
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                                <div className="slider-item">
                                    <h3>Customer Name</h3>
                                    <h4>profession</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Latest Blog</p>
                        <h2>Latest From Our Blog</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/theme/img/blog-1.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/theme/img/blog-2.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="/theme/img/blog-3.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Construction</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}