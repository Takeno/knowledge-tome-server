import React, {PureComponent} from 'react';
import Link from 'gatsby-link';

export default class Header extends PureComponent {
    state = {
        menuOpen: false,
    };

    toggleMenu = () =>
        this.setState({
            menuOpen: !this.state.menuOpen,
        });

    render() {
        return (
            <nav className="navbar is-tablet is-spaced has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <h1>Tolaria Academy</h1>
                        </Link>
                        <div
                            className="navbar-burger burger"
                            onClick={this.toggleMenu}>
                            <span /> <span /> <span />
                        </div>
                    </div>

                    <div
                        className={`navbar-menu ${
                            this.state.menuOpen ? 'is-active' : ''
                        }`}>
                        <div className="navbar-start">
                            <Link
                                onClick={this.toggleMenu}
                                className="navbar-item"
                                to="/about">
                                About
                            </Link>
                            <Link
                                onClick={this.toggleMenu}
                                className="navbar-item"
                                to="/custom-rss">
                                RSS Feed
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
