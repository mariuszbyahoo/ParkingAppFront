/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
var id;

Ext.define('ParkingAppFront.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        id = record.id;
    },

    onConfirm: function (choice) {
        let store = Ext.data.StoreManager.lookup('slots');
        if (choice === 'yes') {
            Ext.Ajax.request({
                url: 'http://localhost:54790/api/Slots/' + id,
                method: 'PUT',
                body: {

                },
                success: function () {
                    Ext.Msg.alert('info', 'Succeed');
                },
                failure: function () {
                    Ext.Msg.alert('info', 'Failed');
                },
                callback: function() {
                    store.load();
                }
            })
        }
    }
});
