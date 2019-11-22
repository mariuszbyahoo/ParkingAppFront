/**
 * This view is an example list of people.
 */
Ext.define('ParkingExt.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ParkingExt.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Id',  dataIndex: 'name', flex: 1},
        { text: 'Is this slot occupied?', dataIndex: 'email', flex: 0.3 },
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
