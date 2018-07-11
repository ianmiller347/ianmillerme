import React from 'react';
import FeatherIcon from 'feather-icons-react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className='app-footer'>
    <p><em>Made with:&nbsp;
      <a
        href='https://reactjs.org/'
        title='React JS'
        target='_blank'
        rel='noopener noreferrer'>
        React
      </a>,&nbsp;
      <a
        href='https://redux.js.org/'
        title='Redux JS'
        target='_blank'
        rel='noopener noreferrer'>
        Redux
      </a>, and the&nbsp;
      <a
        href='https://developer.wordpress.org/rest-api/'
        title='WordPress REST API'
        target='_blank'
        rel='noopener noreferrer'>
        WP API
      </a>.
    </em></p>
    <p><em>
      Check out the source on&nbsp;
      <a
        href='https://github.com/ianmiller347/ianmillerme'
        title='ianmiller.me on github'
        target='_blank'
        rel='noopener noreferrer'>
        GitHub
      </a>.
    </em></p>
    <h5>Find me elsehwere</h5>
    <div className='display-flex fully-centered social-container'>
      <a
        href='https://github.com/ianmiller347'
        title='GitHub'
        target='_blank'
        rel='noopener noreferrer'>
        <FeatherIcon icon='github' />
      </a>
      <a
        href='https://gitlab.com/ianmiller347'
        title='GitLab'
        target='_blank'
        rel='noopener noreferrer'>
        <FeatherIcon icon='gitlab' />
      </a>
      <a
        href='https://twitter.com/ianmiller347'
        title='Twitter'
        target='_blank'
        rel='noopener noreferrer'>
        <FeatherIcon icon='twitter' />
      </a>
    </div>
    <p className='copyright small'><small>&copy; 2018 Ian J. Miller</small></p>
  </footer>
);
 
export default Footer;
