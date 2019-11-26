/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('ParkingAppFront.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ParkingAppFront.view.main.MainController',
        'ParkingAppFront.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'fit',

    items: [{
        title: 'Parking',
        iconCls: 'fas fa-parking',
        autoScroll: true,
        maxWidth: 1600,
        items: [
            {
                xtype: 'dataview',
                height: 500,
                reference: 'slotsList',
                
                store: {
                      type: 'slots'
                },

                tpl: new Ext.XTemplate(
                    '<h1>Parking: </h1>',
                    '<tpl for=".">',
                        '<tpl if="isOccupied == true">',
                            '<button class="occupied" id="{id}">P</button>',
                        '<tpl else>',
                            '<button class="free" id="{id}">P</button>',
                    '</tpl>',
                    '</tpl>'
                ),
                itemSelector: 'button',

                listeners: {
                    itemclick: 'onItemSelected'
                }
            }            
        ]
    }],
    buttons: [
        {
            text: '<i class="fas fa-plus"></i>',
            handler: 'addClick'
        },
        {
            text: '<i class="fas fa-minus"></i>',
            handler: 'removeClick'
        }
    ]
});
