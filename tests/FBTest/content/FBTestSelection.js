/* See license.txt for terms of usage */

// ************************************************************************************************
// Text selection conroller.

/** @namespace */
var SelectionController =
{
    listeners: [],

    addListener: function(listener)
    {
        FBTestApp.SelectionController.addListener(listener);
        this.listeners.push(listener);
    },

    removeListener: function(listener)
    {
        FBTestApp.SelectionController.removeListener(listener);
        FW.FBL.remove(this.listeners, listener);
    },

    cleanUp: function()
    {
        // Remove all listeners registered by the current test.
        while (this.listeners.length)
            this.removeListener(this.listeners[0]);
    }
};

// ************************************************************************************************
// Clean up

window.addEventListener("unload", function testSelectionUnload() {
    FBTestApp.SelectionController.cleanUp();
}, true);
