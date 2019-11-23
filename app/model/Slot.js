Ext.define('ParkingExt.model.Slot', {
    extend: 'Ext.data.Model',
    fields: ['isOccupied', 'desc'],
    alias: 'Slot',
    proxy:{
        type: 'rest',
        url: 'http://localhost:54790/api/Slots/',
        reader: {
            type: 'json'
        }
    }
})