Ext.define('ParkingAppFront.model.Slot', {
    extend: 'Ext.data.Model',

    fields: [
        'id', 'isOccupied', 'desc'
    ],

    alias: 'slot',

    proxy:{
        type: 'rest',
        url: 'http://localhost:54790/api/Slots/',
        reader: {
            type: 'json'
        }
    }
})