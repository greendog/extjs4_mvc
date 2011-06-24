Ext.define('My.model.Product', {

            extend:'Ext.data.Model',
            idProperty:'productId',

            fields:[
                {name:'productId', type:'int'}
                ,
                {name:'productName', type:'string'}
                ,
                {name:'desc', type:'string'}
                ,
                {name:'price', type:'float'}
            ]

            /*
            ,proxy: {
             type:'localstorage',
             id:'mvc'
             }

             , constructor:function() {
             this.callParent(arguments);
             this.set('productName', this.get('productName'));
             }

             ,set:function(fieldName, value) {

             if ('desc' === fieldName) {
             this.set('desc', this.get('desc'));
             return;
             }

             if ('price' === fieldName) {
             this.set('price', this.get('price'));
             }
             }*/
        });