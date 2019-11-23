Ext.define('ParkingExt.model.Ticket', {
    extend: 'Ext.data.Model',
    fields: ['id', 'isOccupied'],
    proxy:{
        type: 'ajax',
        url: 'http://localhost:54790/api/Slots/',
        appendId: true
    }
})