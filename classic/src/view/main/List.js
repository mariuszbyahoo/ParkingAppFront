/**
 * This view is an example list of people.
 */
Ext.define('ParkingExt.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ParkingExt.store.Ticket',
        'Ext.data.identifier.Uuid'

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
    },

    buttons: [
        {
            text: 'Add',
            handler: function() {
                var slot = Ext.create('Slot');
                slot.save();
                Ext.Msg.alert('Result','One slot has been created');
            }
        },
        {
            text: 'Delete',
            handler: function() {
                Ext.Ajax.request({
                    url: 'http://localhost:54790/api/Slots/random',
                    method: 'DELETE'
                });
                Ext.Msg.alert('Result','One slot has been deleted');
            }
        }
    ]
});
