/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ParkingExt.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    store: {
        type: 'ticket'
    },

    data: {
        name: 'ParkingExt',

        loremIpsum: 'lorem ispum'
    }

    //TODO - add data, formulas and/or methods to support your view
});
