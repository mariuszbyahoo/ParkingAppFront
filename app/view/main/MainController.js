/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var id ;
Ext.define('ParkingExt.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Do you want to occupy this slot?', 'onConfirm', this);
        id = record.id;
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            Ext.Msg.alert('Info', 'You may find your ticket in the Tickets grid', 'getTicket', this);
        }
    },

    getTicket: function() {
        Ext.Ajax.request({
                    url: 'http://localhost:54790/api/Slots/' + id,
                    method: 'PUT',
                    body: {

                    }
                });
        Ext.Msg.alert('Result','Succesfully occupied a slot');
    }
});
