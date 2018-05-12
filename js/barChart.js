var barData = [0, 12, 59, 89, 3, 6, 80, 56, 44, 33, 23, 54, 34, 45, 22, 33, 44, 90, 120];
var height = 400, 
	width = 600,
	barWidth = 50,
	barOffSet = 5;

var yScale = d3.scaleLinear()
	.domain([0, d3.max(barData) ])// this is the min value being 0 and the max value from var= bardata
	.range([0, height])//telling d3 the minimum height being 0 and the max height being var height = 400

var xScale = d3.scaleBand()
	.domain(d3.range(0, barData.length))//this grabs how many entries that are in the array for barData, it will count it even if one gets added or taken off
	.range([0, width])


d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background-color', '#D2D7D3')
	.selectAll('rect')
		.data(barData)
		.enter().append('rect')
			// .classed( 'bar', true)// this is to add a new class name and then changing the color through css.
			.style('fill', 'blue')
			.attr('width', xScale.bandwidth())
			.attr('height', function(d){
				return yScale(d)
			})
			.attr('x', function(d, i){
				return xScale(i)
			})
			.attr('y', function(d){
				return height - yScale(d)
			}).exit()