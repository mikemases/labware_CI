define(['../views/TubeView', 'text!../tube.json', 'text!../tube_empty.json'], function(view, tubeJson, tubeEmptyJson) {

    var tubePresenter = function(owner) {
        this.owner = owner;
        this.Tubes = {};
        this.currentView = {};
        
        return this;
    };
    
    tubePresenter.prototype.init = function(jquerySelection) {
        
        this.currentView = new view(this, jquerySelection);
        
        return this;
    }

    /* Sample method to show creation of test tube image with json dummy data
     * The section IDs are currently set to #tube1 and #tube2
     *
     *
     * Arguments
     * ---------
     * container:    The selected d3 element
     *
     *
     * Returns
     * -------
     * void
     */

    tubePresenter.prototype.drawSampleTubes = function(container1, container2) {

        var tubeData = JSON.parse(tubeJson);
        var tubeEmptyData = JSON.parse(tubeEmptyJson);
        
        this.init(container1);

        // send the json data and container information to define the tube
        this.update(tubeData);
        
        this.init(container2);

        // send the json data and container information to define the tube
        this.update(tubeEmptyData);

        return this;
    };
    

/* Draws the test tube in the given container space
*
*
* Arguments
* ---------
* container:    The selected d3 element
*
* jsonData:     The received json object data for the tube
*
* 
* Returns
* -------
* void
*/
    tubePresenter.prototype.update = function(data) {

        this.currentView.update(data);
        this.Tubes[data.tube.uuid] = data;

        return this;

    };
    
    tubePresenter.prototype.release = function() {
        
        this.currentView.release();
        
        return this;    
    };
    
    tubePresenter.prototype.childDone = function(childPtr, action, data) {
         
         return this;
    };

/* Gets the HTML container given a string identifier
*
*
* Arguments
* ---------
* containerID:    The unique container ID string
*
* 
* Returns
* -------
* void
*/
tubePresenter.prototype.getContainer = function(containerID) {
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return tubePresenter;
});
