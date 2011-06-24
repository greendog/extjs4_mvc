Ext.ns("maprox");

maprox.window = Ext.extend(Ext.Window, {
            plain : true,
            bodyStyle : 'padding:2px;',
            height : 500,
            width : 500,
            title : 'Тестовое задание №1',
            layout : 'fit',
            initComponent : function () {

                var win = this;

                Ext.apply(this, {
                            items : [
                                {
                                    xtype : 'panel',
                                    layout : 'border',
                                    frame : false,
                                    border : false,
                                    items : [
                                        {
                                            xtype : 'panel',
                                            region : 'center',
                                            frame : false,
                                            border : false,
                                            layout : 'fit',
                                            items : [new maprox.goods()]
                                        },
                                        {
                                            xtype : 'panel',
                                            region : 'east',
                                            margins: '0 0 0 2',
                                            frame : false,
                                            border : false,
                                            width : 240,
                                            layout : 'fit',
                                            items : [new maprox.basket()]
                                        }
                                    ]
                                }
                            ], //items of window
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
                            ]//fbar
                        }); //Ext.apply


                maprox.window.superclass.initComponent.apply(this, arguments);
            } //initComponent

        });
 