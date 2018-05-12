// d3.selectAll('.node')
// 	.data([true, true, true])
// 	.style('background-color', '#D24D57');

// var styles = ['#D24D57', '#F22613', '#D64541'];

// var styles = [
// 	{color: '#013243',
// 	width: '100px',
// 	text: 'Blue node'
// 	},
// 	{
// 	color: '#D24D57',
// 	width: '300px',
// 	text: 'Red node'
// 	},
// 	{
// 	color: 'Yellow',
// 	width: '200px',
// 	text: 'Yellow node'
// 	}


// ];

// d3.selectAll('.node')
// 	.data(styles)
// 	.style('background-color', function(d){
// 		return d.color
// 	})
// 	.style('width', function(d){
// 		return d.width

// 	})

// d3.selectAll('.node')
// 	.remove();

// d3.select('#nodeContainer').selectAll('.newNodes')
// 	.data(styles)
// 	.enter().append('div')
// 		.text(function(d){
// 			return d.text
// 		})
// 		.style('background-color', function(d){
// 			return d.color
// 		})
// 		.style('width', function(d){
// 			return d.width
// 		})

var styles = [];
var number = 100;

for (var i = 0; i < number; i++){
	var width = Math.floor(Math.random() * 100) + "px";
	styles.push({
		color: '#' + (Math.random() * 0xFFFFFF<<0).toString(16),
		width: width,
		text: width,
	})
}

d3.select('#nodeContainer').selectAll('.newNodes')
	.data(styles)
	.enter().append('div')
		.text(function(d){
			return d.text
		})
		.style('background-color', function(d){
			return d.color
		})
		.style('width', function(d){
			return d.width
		}).exit();