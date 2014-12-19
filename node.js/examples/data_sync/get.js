/* ---------------------------------------------------------------------------

 Init PubNub and Get your PubNub API Keys:
 http://www.pubnub.com/account#api-keys

 --------------------------------------------------------------------------- */

var PUBNUB = require("../../pubnub.js")

var pubnub = PUBNUB({
    write_key     : "pub-c-bf446f9e-dd7f-43fe-8736-d6e5dce3fe67",
    read_key      : "sub-c-d1c2cc5a-1102-11e4-8880-02ee2ddab7fe",
    origin        : "dara25.devbuild.pubnub.com"

});

function log2(r) {
    console.log(JSON.stringify(r.value(), null, 2));
}

function log(r) {
    console.log(JSON.stringify(r));
}

pubnub.snapshot({"object_id":"home", "path":"occupants", "callback":log2, "error":log2});

pubnub.snapshot({"object_id":"home.occupants", "callback":log2, "error":log2});

pubnub.snapshot({"object_id":"home", "callback":log2, "error":log2});