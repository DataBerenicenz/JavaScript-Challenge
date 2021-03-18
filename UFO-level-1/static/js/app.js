// from data.js
var tableData = data;

// YOUR CODE HERE!

//Reference to tbody
let tbody = d3.select('tbody');
// Create button
let button = d3.select('#filter-btn');
//Columns
let cols = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes','comments'];


let fill_data = (data) => {
	data.forEach(ufoSight => {
		let row = tbody.append('tr');
		cols.forEach(column => row.append('td').text(ufoSight[column]))	
});
}

fill_data(tableData);

let fd_date = d3.select('#datetime');

button.on('click',() =>{
	d3.event.preventDefault();

	let date = fd_date.property('value').trim()

	let filtered_date = tableData.filter(data => data.datetime == date)

	tbody.html("");

	let result = { filtered_date
	}

if(result.filtered_date.length !== 0){
	fill_data(filtered_date)
}
	else{
		console.log("No sightings for this date...Good luck next time!")
		tbody.append('tr').append('td').text("There were no UFO sights that day, search another date")
}
})
