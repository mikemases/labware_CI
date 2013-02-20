/*
S2 - An open source lab information management systems (LIMS)
Copyright (C) 2013  Wellcome Trust Sanger Insitute

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 1, or (at your option)
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston MA  02110-1301 USA
*/


define(['../views/Plate96View'], function(view) {

    var platePresenter = function() {
        this.Plates = {};
    };
    
/* Sample method to show creation of plate image with json dummy data
 * The section ID is currently set to plate1
*
*
* Arguments
* ---------
* 
* Returns
* -------
* void
*/
    platePresenter.prototype.DrawSamplePlate = function() {

        var parent = this;

        // Temporary flat file call until web service calls are possible
        d3.json("./scripts/plate96_2.json", function(error, jsonData) {
                        
            // send the json data and container information to define the plate
            parent.DrawPlate("#plate1", jsonData);

            return true;
        });
    };
    
    platePresenter.prototype.DrawPlate = function(containerID, jsonData)
    {

        var plateView = new view();
        var container = this.GetContainer(containerID);
        this.Plates[jsonData.plate.uuid] = jsonData.plate;

        return plateView.DrawPlate(container, jsonData);
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
    platePresenter.prototype.GetContainer = function(containerID) {
        // Selects the element to have the svg appended to it
        var element = d3.select(containerID);

        return element;
    };

    return platePresenter;

});