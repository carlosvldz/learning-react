import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badge
        firstName="Carlos"
        lastName="Sánchez"
        avatarUrl="https://s.gravatar.com/avatar/4742948c26b62bc7b6ff5d00e0bcaffd?s=80"
        jobTitle="Software Engineer"
        twitter="carlosvldzzz"
        />, container);
