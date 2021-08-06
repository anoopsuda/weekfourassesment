import React from 'react';
import {NavLink} from 'reactstrap'

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>NavLinks</h5>
                    <ul className="list-unstyled">
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li><NavLink  to="/About">About</NavLink></li>
                        <li><NavLink to="/Menu">Menu</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <NavLink href="mailto:confusion@food.net">
                         confusion@food.net</NavLink>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center social-iconset">
                    <div className="text-center d-flex justify-content-start">
                        <NavLink className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></NavLink>
                        <NavLink className="btn btn-social-icon fa fa-linkedin" href="http://www.NavLinkedin.com/in/"><i className="fa fa-NavLinkedin"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></NavLink>
                        <NavLink className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></NavLink>
                        <NavLink className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></NavLink>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;