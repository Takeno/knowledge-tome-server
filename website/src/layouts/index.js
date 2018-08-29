import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const Layout = ({children, data}) => (
    <React.Fragment>
        <Helmet title={data.site.siteMetadata.title} />
        <Header />

        {children()}

        <footer className="footer has-text-centered is-size-6">
            <p>
                Tolaria.academy is unofficial Fan Content permitted under the{' '}
                <a
                    href="http://company.wizards.com/fancontentpolicy"
                    target="_blank"
                    rel="noreferrer noopener">
                    Fan Content Policy
                </a>
                . Not approved/endorsed by Wizards. Portions of the materials
                used are property of Wizards of the Coast. ©Wizards of the Coast
                LLC. All trademarks are property of Wizards of the Coast LLC in
                the U.S.A. and other countries. ©2018 Wizards.
            </p>
        </footer>
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
