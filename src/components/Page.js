import React from 'react';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';

const Page = () => (
  <section className='main-section grid grid--has-sidebar'>
    <Sidebar />
    <Main />
  </section>
);

export default Page;
