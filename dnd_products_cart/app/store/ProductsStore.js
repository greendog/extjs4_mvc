Ext.define('My.store.ProductsStore', {
            extend:'Ext.data.Store',
            model:'My.model.Product',
            data:
                    [
                        { productName : "Rec 0", desc : "0dfdsf", price : 112 },
                        { productName : "Rec 1", desc : "1fgfdg", price : 4321 },
                        { productName : "Rec 2", desc : "2fdgfdg", price : 242 },
                        { productName : "Rec 3", desc : "3fdgfdg", price : 323.23 },
                        { productName : "Rec 4", desc : "4dgfdg", price : 423.14 },
                        { productName : "Rec 5", desc : "5gfdg", price : 523.56 },
                        { productName : "Rec 6", desc : "sdgfdg6", price : 623.35 },
                        { productName : "Rec 7", desc : "7sdfgfdg", price : 37.46 },
                        { productName : "Rec 8", desc : "dfgfdg8", price : 328 },
                        { productName : "Rec 9", desc : "9sfdgfdg", price : 934 }
                    ]
        });