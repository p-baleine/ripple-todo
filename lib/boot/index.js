var AppView = require('app-view');
var seedData = require('./seed-data');

var view = new AppView({ data: { items: seedData } });

view.appendTo(document.body);
