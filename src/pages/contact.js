import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact Page.</h1>
        <p>The best way to reach me is via <Link to="https://www.twitter.com/@iusenenow" target="_blank">Twitter</Link> on Twitter.</p>
      </Layout>
    </div>
  )
}

export default ContactPage
