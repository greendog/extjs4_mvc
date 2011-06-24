Ext.define('My.controller.Products', {

            extend:'Ext.app.Controller',

            models:[
                'Product'
            ],
            stores:[
                'ProductsStore'
                ,'CartStore'
            ],

            views:[
                'product.List'
                ,'product.Cart'
            ],

            refs:[
                {
                    ref:'ProductList'
                    ,selector:'productlist'
                }

                ,{
                    ref:'Cart',
                    selector:'productcart'
                }
            ],

            init:function(app) {

                this.control({
                            'productlist button':{
                                click:this.onButtonClick
                            }
                        });

            }

            ,onButtonClick:function(btn, e) {

                // get the reference to Products Store
                var store = this.getProductsStore();

                switch (btn.operation) {
                    case 'refresh':
                        store.load();
                        break;

                    case 'add':
                        store.addBlankRecord();
                        break;

                    case 'delete':
                        var sm = this.getProductList().getSelectionModel();
                        var records = sm.getSelection();
                        sm.deselectAll();
                        store.remove(records);
                        break;

                    default:
                        console.warn('Button misconfiguration. Add "operation" property.')
                        break;
                }
            }
        });