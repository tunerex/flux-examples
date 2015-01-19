var showChat = require('../actions/showChat');

module.exports = {
    home: {
        path: '/',
        method: 'get',
        action: function (context, payload, done) {
            context.executeAction(showChat, {}, done);
        }
    },
    thread_pageload: {
        path: '/thread/:id',
        method: 'get',
        navigate: {
            type: "pageload",
        },
        action: function (context, payload, done) {
            context.executeAction(showChat, {}, function() {
                context.dispatch('OPEN_THREAD', { threadID: payload.params.id });
                done();
            });
        }
    },
    thread_click: {
        path: '/thread/:id',
        method: 'get',
        navigate: {
            type: "click",
        },
        action: function (context, payload, done) {
            context.dispatch('OPEN_THREAD', { threadID: payload.params.id });
            done();
        }
    }
};
