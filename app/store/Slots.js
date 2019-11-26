Ext.define('ParkingAppFront.store.Slots' , {
    extend: 'Ext.data.Store', 

    alias: 'store.slots',

    model: 'ParkingAppFront.model.Slot',

    storeId: 'slots',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:54790/api/Slots/json',
        reader: {
            type: 'json',
            rootproperty: 'items'
        }
    },
    autoLoad: true,
    autoSync: true
});

