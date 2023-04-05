import React from 'react';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
import { ReactComponent as Github } from '../../icons/github.svg';

const Socials = () => {
    return (
        <div className="socials">
            <span>Made with ♥️ by Zeeshan</span>
            <a href="https://www.linkedin.com/in/zeeshandossani/"><Linkedin /></a>
            <a href="https://github.com/ZeeshanZulfiqarAli/muse"><Github /></a>
        </div>
    );
};

export default Socials;
