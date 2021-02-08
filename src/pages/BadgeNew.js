import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Carlos"
                                lastName="Sánchez"
                                twitter="carlosvldzzz"
                                jobTitle="Software Engineer"
                                avatarUrl="https://s.gravatar.com/avatar/4742948c26b62bc7b6ff5d00e0bcaffd?s=80"
                            />    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;