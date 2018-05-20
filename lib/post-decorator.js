module.exports = function postDecorator(post, channel, blog) {
    return {
        ...post,
        channel: channel.title,
        channelCode: channel.code,
        blogTitle: blog.title,
    };
};
