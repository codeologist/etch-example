    "use strict";

    var Compile = require("../../src/lib/Compile/Index");
    var loader = require("../../src/lib/Loader/index");
    var RenderStrategy = require("etch-render-strategy");

    Compile( "./index.html" );

    var window = loader("./a.cmp");//need a load ready
    window.renderStrategy = new RenderStrategy( window );
    window.gestureStrategy = new function(){};


    window.ready( function(){


        console.log("WINDOW READY PROMISE IS RESOLVED SO ALL CALLBACKS SHOULD NOW FIRE IN ORDER");
        var document = window.document;


        document.getElementById("one").addEventListener( "onclick", function( e ){
            console.log("HANDLER1 - document element",e.eventPhase,e.currentTarget.id)
        });

        document.getElementById("one").addEventListener( "onclick", function( e ){
            e.stopPropagation();
            e.target.style = "top:100px;left:10px;width:400px;height:400px;font-size:30px;color: yellow;background-color:red;"
            console.log("HANDLER2 - document element",e.eventPhase,e.currentTarget.id)
        });

        document.getElementById("one").addEventListener( "onclick", function( e ){
            console.log("HANDLER3 - document element",e.eventPhase,e.currentTarget.id)
        });

        document.getElementsByTagName("body")[0].addEventListener( "onclick", function( e ){
            console.log("HANDLER4 - body element",e.eventPhase,e.currentTarget.id)
        });

    });

    window.ready( function() {
        console.log("READY HANDLER 2");
    });

    console.log("SHOULD APPEAR BEFORE READY EVENT HANDLERS.");
