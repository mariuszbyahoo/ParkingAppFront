var store = Ext.create('Ext.data.Store', {
    model: 'ParkingAppFront.model.Slot',

    id: 'slots',
    alias: 'store.slots',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:54790/api/Slots/json',
        autoLoad: true,
    }
});