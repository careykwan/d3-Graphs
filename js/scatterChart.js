// var data = [
// 		{
// 			age: 10,
// 			weight: 12
// 		},
// 		{
// 			age: 59,
// 			weight: 89
// 		},
// 		{	age: 3,
// 			weight: 6
// 		},
// 		{	age: 80,
// 			weight: 56
// 		},
// 		{
// 	        age: 23,
// 	        weight: 76
// 	    },
// 	    {
// 	        age: 34,
// 	        weight: 25
// 	    },
// 	    {
// 	        age: 8,
// 	        weight: 50
// 	    },
// 	    {
// 	        age: 32,
// 	        weight: 78
// 	    },
// 	    {
// 	        age: 92,
// 	        weight: 53
// 	    }] ;

var data;
d3.json("js/north.json", function(error, jsonData){
	if(error){
		console.log("something has gone wrong");
		return;
	}

	data = jsonData;

	var margin = {
		top: 50,
		right: 50,
		bottom: 50,
		left: 50
	};


var height = 400 - margin.top - margin.bottom,
	width = 600 - margin.left - margin.right; 

var yMax = 0;
var xMax = 0;

for (var i = 0; i < data.length; i++) {
	if(data[i].age > yMax){
		yMax = data[i].age
	}
	if(data[i].weight > xMax){
		xMax = data[i].weight
	}
}

var yScale = d3.scaleLinear()
	.domain([0, yMax])
	.range ([0, height])

var xScale = d3.scaleLinear()
	.domain([0, xMax])
	.range([0, width])

var color = d3.scaleLinear()
	.domain([0, xMax/2, xMax])
	.range(["#F03434", "#D24D57", "#F1A9A0"])


var Graph = d3.select('#nodeContainer').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.style('background-color', '#e84393')
	.append('g')
	.attr('transform', 'translate('+margin.left+', '+margin.top+')')
	.selectAll('circle')
		.data(data)
		.enter().append('circle')
			.classed( 'circle', true)// this is to add a new class name and then changing the color through css.
			.style('fill', function(d, i){
				return color(d.weight)
			})
          	.attr("r", 8)
          	.attr("cx", 0)
          	.attr("cy", height)
          	.on('mouseover', function(d){
          		d3.select(this)
          			.style('opacity', .5)
          	})
          	.on('mouseout', function(d){
          		d3.select(this)
          			.style('opacity', 1)
          	})




          	Graph.transition()
          		.attr('cx', function (d){ 
          		return xScale(d.weight)
          		})
          		.attr('cy', function (d){ 
          		return height - yScale(d.age)
          		})
          		.delay(function(d, i){
          			return i * 20
          		})
          		.duration(1000)
          		.ease(d3.easeBounce)



          	
          	var vGuideScale = d3.scaleLinear()
          		.domain([0, yMax])
          		.range([height, 0])

          	var vAxis = d3.axisLeft(vGuideScale)
          		.ticks(10)

          	var vGuide = d3.select('svg').append('g')
          	vAxis(vGuide)
          	vGuide.attr('transform', 'translate('+margin.left+', '+margin.top+')')



          	// var yGuideScale = d3.scaleLinear()
          	// 	.domain([0, xMax])
          	// 	.range([width, 0])

          	var xAxis = d3.axisBottom(xScale)
          		.ticks(10)

          	var xGuide = d3.select('svg').append('g')
          	xAxis(xGuide)
          	xGuide.attr('transform', 'translate('+margin.left+ ',' +(height + margin.top)+')')





 });
