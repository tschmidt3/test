/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    
    var result = $.ajax({
        url: "https://maps.googleapis.com/maps/api/place/radarsearch/json?location=33.747494,-84.389014&radius=50000&types=gas_station&key=AIzaSyAgljTysHuxOqjmeaj8-kSRX_wQoU3QyK4",
        
        dataType: "json",
        type: "GET",
        })
    .done(function(result){
        console.log(result)
    });
})
