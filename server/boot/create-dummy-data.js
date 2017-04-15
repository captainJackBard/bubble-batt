module.exports = function(app){
    app.dataSources.pgdb.automigrate('BatteryShop', function(err) {
        if(err) throw err;

        app.models.BatteryShop.create([{
            name: 'Sample Shop Ni Bob',
            latitude: 120,
            longitude: 240,
            active: true
        }, {
            name: 'Sample Shop Ni Dyno',
            latitude: 420,
            longitude: 360,
            active: true
        }], function(err, shops) {
            if (err) throw err;

            console.log('Shops Created: \n', shops);
        });
    });
}