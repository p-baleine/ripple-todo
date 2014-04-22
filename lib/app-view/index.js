var ripple = require('ripple');
var each = require('each');
var events = require('events');
var refs = require('refs');
var enterEvent = require('enter-event');
var ItemView = require('item-view');
var template = require('./template');
var AppView = ripple(template);

AppView
  .use(each)
  .use(events)
  .use(refs)
  .use(enterEvent)
  .compose('item', ItemView);

AppView.prototype.add = function() {
  this.data.items.push({
    title: this.refs.title.value
  });
  this.refs.title.value = '';
};

module.exports = AppView;
