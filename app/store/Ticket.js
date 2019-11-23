Ext.define('ParkingExt.store.Ticket', {
    extend: 'Ext.data.Store',

    alias: 'store.ticket',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:54790/api/Slots/json'
    },
    autoLoad: true

})