import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';

import { ALink, Block, Container, LinkWrapper, P, Separator } from './components';
import SocialLink from './SocialLink';

const WEB_APPS_LINKS = [
  {
    name: 'Google Analytics',
    link: 'https://analytics.google.com/analytics/web',
  },
  {
    name: 'Google Tag Manger',
    link: 'https://tagmanager.google.com',
  },
  {
    name: 'Google Business',
    link: 'https://business.google.com',
  },
  {
    name: 'Buffer',
    link: 'https://buffer.com/app',
  },
  {
    name: 'Drift',
    link: 'https://app.drift.com',
  },
  {
    name: 'Disqus',
    link: 'https://disqus.com/admin',
  },
];

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html#_4-create-a-new-content-type',
    titleId: 'Title 1',
    contentId: 'Content 1 goes here...',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    titleId: 'Title 2',
    contentId: 'Content 2 goes here...',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    link: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
  },
  {
    name: 'YouTube',
    link: 'https://youtube.com',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    name: 'Pinterest',
    link: 'https://pinterest.com',
  },
  {
    name: 'Slack',
    link: 'https://slack.com',
  },
  {
    name: 'Medium',
    link: 'https://medium.com',
  },
  {
    name: 'Reddit',
    link: 'https://reddit.com',
  },
  {
    name: 'Tumblr',
    link: 'https://tumblr.com',
  },
  {
    name: 'GitHub',
    link: 'https://github.com',
  },
  {
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com',
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const hasAlreadyCreatedContentTypes =
    get(plugins, ['content-manager', 'leftMenuSections', '0', 'links'], []).filter(
      contentType => contentType.isDisplayed === true
    ).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? 'HomePage.greetings'
    : 'app.components.HomePage.welcome';
  const username = get(auth.getUserInfo(), 'username', '');

  const mainLinkProps = {
    id: 'app.components.HomePage.button.blog',
    onClick: () => {},
    type: 'blog',
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <Block>
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {msg => <h2 id="mainHeader">{msg}</h2>}
              </FormattedMessage>

              <br />

              {WEB_APPS_LINKS.map(({ name, link }, i) => (
                <>
                  <ALink
                    {...mainLinkProps}
                    href={link}
                    style={{ verticalAlign: ' bottom', marginBottom: 2 }}
                  >
                    {name}
                  </ALink>
                  <br />
                </>
              ))}

              <Separator style={{ marginTop: 27, marginBottom: 27 }} />

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? 'doc' : 'code';

                  return (
                    <LinkWrapper href={data.link} target="_blank" key={data.link} type={type}>
                      <FormattedMessage id={data.titleId}>
                        {title => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {content => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>Website</h2>
              <br />
              <ALink rel="noopener noreferrer" href="https://zonadigital.pt" target="_blank">
                https://zonadigital.pt
              </ALink>

              <Separator style={{ marginTop: 18, marginBottom: 28 }} />

              <h2>Social Networks</h2>
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
