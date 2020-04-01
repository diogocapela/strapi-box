import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Gh from '../../assets/images/social_gh.png';
import Slack from '../../assets/images/social_slack.png';
import Medium from '../../assets/images/social_medium.png';
import So from '../../assets/images/social_so.png';
import Twitter from '../../assets/images/social_twitter.png';
import Reddit from '../../assets/images/social_reddit.png';
import Facebook from '../../assets/images/social_facebook.png';
import Instagram from '../../assets/images/social_instagram.png';
import LinkedIn from '../../assets/images/social_linkedin.png';
import Pinterest from '../../assets/images/social_pinterest.png';
import Tumblr from '../../assets/images/social_tumblr.png';
import YouTube from '../../assets/images/social_youtube.png';

import { SocialLinkWrapper } from './components';

function getSrc(name) {
  switch (name) {
    case 'GitHub':
      return Gh;
    case 'Reddit':
      return Reddit;
    case 'Medium':
      return Medium;
    case 'Slack':
      return Slack;
    case 'Stack Overflow':
      return So;
    case 'Facebook':
      return Facebook;
    case 'Instagram':
      return Instagram;
    case 'LinkedIn':
      return LinkedIn;
    case 'Pinterest':
      return Pinterest;
    case 'Tumblr':
      return Tumblr;
    case 'YouTube':
      return YouTube;
    default:
      return Gh;
  }
}

const SocialLink = ({ link, name }) => {
  return (
    <SocialLinkWrapper className="col-6">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={getSrc(name)} alt={name} />
        <span>{name}</span>
      </a>
    </SocialLinkWrapper>
  );
};

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(SocialLink);
