// enable and configure loader
Ext.Loader.setConfig({
            enabled:true,
            paths:{
                Ext:'../../src',
                My:'app'
            }
        });

/**
 *  require dependencies
 */
Ext.require([
    'My.view.Viewport'
]);
Ext.application({
            name:'My',
            appFolder:'app',
            autoCreateViewport:false,
            controllers:['Products'],
            launch:function() {
                this.viewport = Ext.create('My.view.Viewport', {
                            width:800
                            ,height:300
                            ,stateId:'myWindow'
                        });
                window[this.name].app = this;

                this.viewport.show();
            }
        });