var data;
d3.json("js/north.json", function(error, jsonData){
	if(error){
		console.log("something has gone wrong");
		return;
	}

	data = jsonData;


var height = 600,
	width = 700;

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

d3.select('body').append('div')
	.classed('div', true)
		.insert('svg')
		.classed('svgRound', true)
			.attr('width', width)
			.attr('height', height)
			
			.style('background-color', '#947CB0')
			.selectAll('circle')
				.data(data)
				.enter().append('circle')
					.classed( 'circle', true)// this is to add a new class name and then changing the color through css.
					.style('fill', function(d, i){
						return color(d.weight)
					})
		          	.attr("r", 8)
		          	.attr("cx", function (d){ 
		          		return xScale(d.weight)
		          	})
		          	.attr("cy", function (d){ 
		          		return height - yScale(d.age)
		          	})
		          	.on('mouseover', function(d){
		          		d3.select(this)
		          			.style('opacity', .5)
		          	})
		          	.on('mouseout', function(d){
		          		d3.select(this)
		          			.style('opacity', 1)
		          	})
		          	.exit()
});


 d3.selectAll("button").on("click", function() {
 	console.log("button clicked");

 	var secondData;
	d3.json("js/south.json", function(error, jsonData){
	if(error){
		console.log("wrong");
		return;
	}

	secondData = jsonData;

	var yMax = 0;
	var xMax = 0;

	for (var i = 0; i < secondData.length; i++) {
	if(secondData[i].age > yMax){
		yMax = data[i].age
	}
	if(secondData[i].weight > xMax){
		xMax = data[i].weight
	}
}



    
  });
});
