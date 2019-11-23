Ext.define('ParkingExt.model.Slot', {
    extend: 'Ext.data.Model',
    fields: ['id', 'isOccupied', 'desc'],
    alias: 'Slot',
    proxy:{
        type: 'rest',
        url: 'http://localhost:54790/api/Slots/',
        reader: {
            type: 'json'
        }
    }
})