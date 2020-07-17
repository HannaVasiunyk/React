import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (

        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home" href="#">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to='/contactus'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                    35,  Doroshenka street<br />
                            Lviv, Ukraine<br />
                            <i className="fa fa-phone"></i>: +380 630 222 875<br />
                            <i className="fa fa-fax"></i>: +380 957 245 115<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">Nussarestorant@food.net</a>
                        </address>
                    </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
   
    );

}

export default Footer;
