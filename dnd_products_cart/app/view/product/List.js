Ext.define('My.view.product.List', {
            extend:'Ext.grid.Panel'
            ,alias:'widget.productlist'
            ,title: 'Список товаров'
            ,store:'ProductsStore'
            ,stripeRows: true
            // ,enableDragDrop: true
            //       ddText: 'drag and drop to change order'
            ,viewConfig: {
                plugins: {
                    /* ptype: 'gridviewdragdrop'
                     ,dragGroup: 'firstGridDDGroup'
                     ,dropGroup: 'secondGridDDGroup'
                     ,enableDrop: false*/
                    ddGroup : 'productsGroup',
                    ptype : 'gridviewdragdrop',
                    dragText : '{0} товар{1}'
                },
                listeners: {

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