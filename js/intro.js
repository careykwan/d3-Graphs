// d3.select('.node').text('selected');

// d3.selectAll('.node').text('Selected');

// d3.selectAll('.node:nth-child(3)').text('Selected');

// d3.selectAll('.node:nth-child(even)').html('<strong>Selected</strong>');

// d3.select('.node')
// 	.text('this is the parent node')
// 	.append('div')
// 		.html('<strong>This div was appended</strong>')
// 		.append('div')
// 			.html("<small>This is appended to the append</small>");


// d3.select('#nodeContainer')
// 	.insert('span', ':nth-child(3)')
// 		.html('<strong>Inserted in the 3rd</strong>');

// d3.select('#nodeContainer .node:nth-child(4')
// 	.remove();

// d3.selectAll('.node')
// 	.attr('class', 'newClass'); // adding a new class name to the already classed name

// d3.selectAll('.node')
// 	.classed('newClass', true); //the ture adds a new class name to the class so there are more than one class names
	// .classed('node', false); //the false removes the class name

d3.selectAll('.node:nth-child(3)')
	.style('color', 'red')
	.style('background-color', 'blue')
	.style('text-decoration', 'underline');