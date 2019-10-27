const EXPRESS = require('express');
const CONFIG = require('config/env');

const PORT = CONFIG.API.PORT;
var app = EXPRESS();

//app.use(EXPRESS.static('./../client/app/'));
app.use(BodyParser.json()); // Parse body input from the requests
app.listen(PORT, () => {console.log('Access http://localhost'.concat(':', SERVER_PORT))});
