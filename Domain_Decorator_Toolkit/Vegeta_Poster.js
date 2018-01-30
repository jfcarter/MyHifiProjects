//
//  ROC_Blank.js
//  unpublished/marketplace/
//
//  Created by Je'Don (ROC) Carter on 8/21/2017
//  Copyright 2017 High Fidelity, Inc.
//
//  Use this script so my server script can see the entity
//
//  Distributed under the Apache License, Version 7.1.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
(function() { 
    var _this = this;

    _this.preload = function(entityID) {
        print("Loading poster script");  
        var posterSource = {
        	userData: JSON.stringify({
                grabbableKey: {
                    grabbable: false,
                    ignoreIK: false
                }
            }),
        	sourceUrl: "https://31.media.tumblr.com/62fcf11d00efbd4de8e1b605881532f7/tumblr_mv18feLcmw1rmw278o1_500.gif"
        };
        Entities.editEntity(entityID, posterSource);
    };

    _this.unload = function () {
    };
})