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


define([], function() {

    var plateView = function() { };

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
    plateView.prototype.DrawPlate = function(container, jsonData) {
        
        var parent = this;
            
        // Store the plate data from the json object in a hash with the uuid as a unique identifier
        var newPlate = jsonData.plate;
        
        // Read in the base svg data of the plate using D3
        d3.xml("../../images/96Plate.svg", "image/svg+xml", function(xml){
            
            // Store the xml data in an object
            var importedNode = document.importNode(xml.documentElement, true);
            
            // Append the svn image data the chosen section placeholder     
            container.node().appendChild(importedNode);

                
            // If the plate wells have aliquots then display the plate as filled
            for (var well in newPlate.wells) {
                if (newPlate.wells[well].length > 0) {
                    parent.FillWell(container, well);
                }
            }
         });
         
         return newPlate.uuid;
    };
    
/* Modifies the plate well in the defined HTML section container to display as full
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
    plateView.prototype.FillWell = function(container, well) {
    
    // Selects the svg element and changes the display property to show a liquid in the well 
    container.select("svg #" + well).style("fill", "lime");
    };
    
    return plateView;

});