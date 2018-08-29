import React, {PureComponent} from 'react';
import Link from 'gatsby-link';
import NewsCard from '../components/NewsCard';

class IndexPage extends PureComponent {
    state = {
        isLoading: true,
        error: null,
        articles: [],
    };

    componentDidMount() {
        fetch(
            'https://feed.tolaria.academy/articles?lang=eng,ita&channels=06d199,429ab1,0200fe,b47fa4,2fe71b,edc248,28dfdb,d11cf3,b7facc,93d252'
        )
            .then(response => response.json())
            .then(data =>
                this.setState({
                    isLoading: false,
                    articles: data,
                    error: null,
                })
            )
            .catch(e =>
                this.setState({
                    isLoading: false,
                    error: e.message || 'Errore nel caricamento',
                    articles: [],
                })
            );
    }

    renderArticles() {
        if (this.state.isLoading) {
            return (
                <div className="row has-text-centered">
                    <span className="icon">
                        <i className="fas fa-3x fa-spinner fa-pulse" />
                    </span>
                </div>
            );
        }

        if (this.state.error) {
            return (
                <div className="row notification is-danger">
                    {this.state.error}
                </div>
            );
        }

        return (
            <div className="row columns is-multiline">
                {this.state.articles.map(article => (
                    <div key={article.link} className="column is-half">
                        <NewsCard {...article} />
                    </div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <section className="hero is-dark">
                    <div className="hero-body has-margin-top-md has-margin-bottom-md">
                        <div className="container">
                            <h1 className="title is-1 is-spaced">
                                Tolaria Academy
                            </h1>
                            <p className="subtitle">
                                Read the last news from Magic: The Gathering's
                                world &amp; Magic Judge's world.
                            </p>
                        </div>
                    </div>
                </section>

                <article className="container section">
                    {this.renderArticles()}
                </article>
            </React.Fragment>
        );
    }
}

export default IndexPage;
