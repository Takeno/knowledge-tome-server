import React, {PureComponent} from 'react';
import channels from '../../../data/channels.json';

const languages = [
    {
        code: 'eng',
        name: 'English',
    },
    {
        code: 'ita',
        name: 'Italian',
    },
    {
        code: 'fra',
        name: 'French',
    },
    {
        code: 'deu',
        name: 'German',
    },
    {
        code: 'spa',
        name: 'Spanish',
    },
];

const URL =
    'https://feed.tolaria.academy/feed?lang=__LANGS__&channels=__CHANNELS__';

export default class About extends PureComponent {
    state = {
        languages: [],
        channels: [],
    };

    toggleLanguage(lang) {
        const set = new Set(this.state.languages);
        if (set.has(lang)) {
            set.delete(lang);
        } else {
            set.add(lang);
        }

        this.setState({
            languages: Array.from(set),
        });
    }

    toggleChannel(channel) {
        const set = new Set(this.state.channels);
        if (set.has(channel)) {
            set.delete(channel);
        } else {
            set.add(channel);
        }

        this.setState({
            channels: Array.from(set),
        });
    }

    generateFeedUrl() {
        return URL.replace('__LANGS__', this.state.languages.join(',')).replace(
            '__CHANNELS__',
            this.state.channels.join(',')
        );
    }

    render() {
        return (
            <article className="container section">
                <h2 className="title is-1">Create your own feed RSS</h2>
                <h4 className="is-size-4">1. Choose the languages</h4>
                <section className="section">
                    <div className="columns is-multiline">
                        {languages.map(l => (
                            <div key={l.code} className="field column is-half">
                                <div className="control">
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            onClick={() =>
                                                this.toggleLanguage(l.code)
                                            }
                                            checked={this.state.languages.includes(
                                                l.code
                                            )}
                                        />{' '}
                                        {l.name}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <h4 className="is-size-4">2. Choose the channels</h4>
                <section>
                    {channels.map((channel, i) => (
                        <section key={i} className="notification">
                            <h3 className="is-size-5">
                                {channel.title}{' '}
                                <small>{channel.description}</small>
                            </h3>
                            {channel.subchannels.map(c => (
                                <div
                                    key={c.code}
                                    className="field"
                                    style={{marginLeft: 10}}>
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            onClick={() =>
                                                this.toggleChannel(c.code)
                                            }
                                            checked={this.state.channels.includes(
                                                c.code
                                            )}
                                        />{' '}
                                        <strong>{c.title}</strong>
                                        <small>
                                            {c.description
                                                ? ' - ' + c.description
                                                : ''}
                                        </small>
                                    </label>
                                </div>
                            ))}
                        </section>
                    ))}
                </section>

                <h4 className="is-size-4">3. Get your feed</h4>
                <section className="section">
                    <input
                        className="input"
                        value={this.generateFeedUrl()}
                        type="text"
                        onFocus={e => e.target.select()}
                        readOnly
                    />
                </section>
            </article>
        );
    }
}
