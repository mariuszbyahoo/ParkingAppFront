/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */

Ext.define('ParkingAppFront.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    onItemSelected: function (sender, record) {
        let store = Ext.data.StoreManager.lookup('slots');
            Ext.Ajax.request({
                url: 'http://localhost:54790/api/Slots/' + record.id,
                method: 'PUT',
                body: {

                },
                callback: function() {
                    store.load();
                }
            });
    },

    addClick: function () {
        let store = Ext.data.StoreManager.lookup('slots');
        Ext.Ajax.request({
            url: 'http://localhost:54790/api/Slots',
            method: 'POST',
            body: {

            },
            callback: function () {
                store.load();
            }
        });
    },

    removeClick: function () {
        let store = Ext.data.StoreManager.lookup('slots');
        Ext.Ajax.request({
            url: 'http://localhost:54790/api/Slots/random',
            method: 'DELETE',
            body: {

            },
            callback: function() {
                store.load();
            }
        })
    }
});
