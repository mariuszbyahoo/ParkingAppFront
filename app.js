/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ParkingAppFront.Application',

    name: 'ParkingAppFront',

    requires: [
        // This will automatically load all classes in the ParkingAppFront namespace
        // so that application classes do not need to require each other.
        'ParkingAppFront.*'
    ],

    // The name of the initial view to create.
    mainView: 'ParkingAppFront.view.main.Main',
});
