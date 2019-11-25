Ext.define('ParkingAppFront.store.Slots', {
    extend: 'Ext.data.Store',
    model: 'ParkingAppFront.model.Slot',
    storeId: 'slots',
    alisas: 'slots',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:54790/api/Slots/json',
        reader: {
            type: 'json',
        },
        autoLoad: true,
    }
})