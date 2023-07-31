import React from 'react';
import './Brand.css';
import { slack, google, shopify, dropbox, atlassian} from './import'


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
        <div>
          <a href='www.google.com'><img src={google} alt=' ' /></a>
        </div>
        <div>
          <a href='www.slack.com'><img src={slack} alt=' ' /></a>
        </div>
        <div>
          <a href='www.atlassian.com'><img src={atlassian} alt=' ' /></a>
        </div>
        <div>
          <a href='www.dropbox.com'><img src={dropbox} alt=' ' /></a>
        </div>
        <div>
          <a href='www.shopify.com'><img src={shopify} alt=' ' /></a>
        </div>
    </div>
  )
}

export default Brand