Ext.define('My.view.product.Cart', {
            extend:'Ext.grid.Panel',
            alias:'widget.productcart',
            title: 'Корзина',
            store:'CartStore'
            ,stripeRows: true
            //,enableDragDrop: true
            //      ddText: 'drag and drop to change order'
            ,viewConfig: {
                plugins: {
                   /* ptype: 'gridviewdragdrop'
                    ,dragGroup: 'secondGridDDGroup'
                    ,dropGroup: 'firstGridDDGroup'*/
                    ddGroup : 'productsGroup',
					ptype : 'gridviewdragdrop'
                },
                listeners: {
                    drop: function(node, data, dropRec, dropPosition) {
                        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('productName') : ' в пустую корзину';
                        Ext.example.msg("Добавление товаров в корзину", 'Товар ' + data.records[0].get('productName') + dropOn);
                        if (this.store.getCount() >= 2) {
                            Ext.getCmp("buttonOK").enable();
                        }
                    }
                }
            }
            ,initComponent:function() {
                var columns = [
                    {
                        header:'Наименование',
                        dataIndex:'productName',
                        flex:1,
                        sortable: true,
                        field:
                        {
                            xtype:'textfield',
                            allowBlank:false,
                            selectOnFocus:true,
                            minLength:2
                        }
                    },
                    {
                        header:'Описание',
                        dataIndex:'desc',
                        flex:2,
                        field:
                        {
                            xtype:'textfield',
                            allowBlank:false,
                            selectOnFocus:true,
                            minLength:2
                        }
                    },
                    {
                        header:'Цена',
                        dataIndex:'price',
                        witdh: 100
                    }
                ];


                // prepare config object
                var config = {
                    columns: columns
                    ,selModel:{
                        selType:'rowmodel'
                        ,allowDeselect:true
                        ,mode:'MULTI'
                    }
                };

                Ext.apply(this, config);
                this.callParent(arguments);
            }

        });