/**
 * This view is an example list of people.
 */
Ext.define('ParkingExt.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ParkingExt.store.Ticket'
    ],

    title: 'Parking',

    store: {
        type: 'ticket'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id', flex: 1},
        { text: 'Is this slot occupied?', dataIndex: 'isOccupied', flex: 0.3 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
