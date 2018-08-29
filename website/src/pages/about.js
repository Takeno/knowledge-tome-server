import React, {PureComponent} from 'react';

export default class About extends PureComponent {
    render() {
        return (
            <article className="container section">
                <h2 className="title is-1">About the project</h2>
                <p>
                    Tolaria Academy is an RSS Feed which aggregates multiple
                    news sites about Magic Judge's world. It scrapes the
                    following channels looking for new articles. It parses them
                    and detects the language, so you will stop to receive
                    uncomprehensible articles that are not in your speaking
                    language.
                </p>
                <p>
                    The aim is to help judges around the world to stay updated.
                    Stop checking dozens of sites weekly!
                </p>
                <p>
                    This is still a Proof of Concept, and it is{' '}
                    <a href="https://github.com/Takeno/knowledge-tome-server/">
                        open source
                    </a>
                    .
                </p>

                <p>
                    If you want to report a new site or submit feedbacks, please
                    open an{' '}
                    <a href="https://github.com/Takeno/knowledge-tome-server/issues">
                        issue
                    </a>{' '}
                    or contact me on{' '}
                    <a href="https://apps.magicjudges.org/judges/Takeno/">
                        JudgeApps
                    </a>
                    .
                </p>
            </article>
        );
    }
}
