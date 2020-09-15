let app = require('./app');

app.listen(app.get('port'), ()=> {
    console.log('Server up: http://localhost:' + app.get('port'));
});