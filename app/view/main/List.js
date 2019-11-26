Ext.define('ParkingAppFront.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    title: 'Slots',

    store: {
        type: 'slots'
    },

    items: [
        {
            xtype: 'dataview',
           
            reference: 'slotsList',
           
            store: 'slots',
           
            tpl: new Ext.XTemplate(
                '<h1>Tu Mają być przyciski</h1>',
                '<tpl for="slots">',
                    '<div class="data-view">',
                        '<button class="slot">P</button>',    
                    '</div>',
                '</tpl>'
            ),
            itemSelector: 'div.data-view',
       }
    ]
});

console.log(Ext.data.StoreManager.lookup('slots'));