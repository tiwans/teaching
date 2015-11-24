'use strict';
//Sample data sets
var smallData = [20, 40, 60, 80, 100];
var largeRandomData = [80, 100, 50, 20, 90, 40, 100, 110, 40, 90, 40];


//Your data goes under here!//

//d3.select("body").append("h1").text("hello world!");

d3.select("body").selectAll("div").data(largeRandomData).enter().append("div").attr("class", "bar").style("height", function(d) { return d + "px";});