import React, {PureComponent} from 'react';
import format from 'date-fns/format';
import Link from 'gatsby-link';

export default class NewsCard extends PureComponent {
    render() {
        return (
            <a
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'block'}}
                className="card large">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <h4 className="title is-4 no-padding no-margin">
                                {this.props.title}
                            </h4>
                            <p className="subtitle is-6 no-margin no-padding">
                                {format(this.props.pubDate, 'D MMM')} -{' '}
                                {this.props.blogTitle}
                            </p>
                        </div>
                    </div>
                    <div
                        className="content is-clipped"
                        dangerouslySetInnerHTML={{
                            __html: this.props.description,
                        }}
                    />
                </div>
            </a>
        );
    }
}
