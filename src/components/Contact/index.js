import React from 'react';
import { Link } from 'react-router-dom';
import { EmailLogo, LinkedInLogo, TwitterLogo, GitHubLogo } from '../Logos';
import './Contact.css'

function Contact() {


  return (
    <section className='contact'>
      <ul className='contact-list'>
        <li className='contact-tile'>
          <Link className='glow' to="mailto:nathan.shown@gmail.com" target="_blank">
            <EmailLogo className="contact-logo" />
            <span>Email</span>
          </Link>
        </li>
        <li className='contact-tile'>
          <Link className='glow' to="https://github.com/nshown" target="_blank">
            <GitHubLogo className="contact-logo" />
            <span>GitHub</span>
          </Link>
        </li>
        <li className='contact-tile'>
          <Link className='glow' to="https://www.linkedin.com/in/nathan-shown-0b202571/" target="_blank">
            <LinkedInLogo /> 
            <span>LinkedIn</span>
          </Link>
        </li>
        <li className='contact-tile'>
          <Link className='glow' to="https://twitter.com/ShownNathan" target="_blank">
            <TwitterLogo className="contact-logo" />
            <span>Twitter</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
