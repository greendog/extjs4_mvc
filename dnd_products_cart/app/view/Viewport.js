Ext.define('My.view.Viewport', {
            extend:'Ext.window.Window',
            alias:'widget.myviewport',
            closable:true,
            title:'Главное окно',
            plain : true,
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'stretch'
            },
            defaults: { flex : 1, frame : false },
            border:false,
            items:[
                {
                    xtype:'productlist',
                    itemId:'myProductList'
                }

                ,
                {
                    xtype:'productcart',
                    itemId:'myProductCart'
                }
            ],
            fbar : [
                {
                    id: 'buttonOK',
                    text : 'OK',
                    width : 100,
                    disabled : true,
                    handler : function () {
                        var records = Ext.StoreMgr.lookup("choosed_goods").getGroups();
                        var total = 0;
                        for (idx in records) {
                            total = total + records[idx].name;
                        }
                        alert(total);

                    } //eo handler
                }
            ]
        });