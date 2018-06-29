// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	var height = $('#inputHeight').val();  //selects the value of the height input
	var width = $('#inputWeight').val();   // selects the value of the width input
	makeGrid(height,width);     //when you call the makeGrid function,you are required to input the value of what height and columns should be, which will be the values from the inputs that the event listens to after submit button  
});



function makeGrid(rows, columns) {
	//we use nested for loops to make rows and columns and form a square
	//for each table row (tr), we have to have a table cell in it (td) i.e 1 tr = 10 td hence 10 tr will form a square

	$('tr').remove();  //It first removes any existing tr and td

	for (var x = 1; x <= rows; x++ ){
		$('#pixelCanvas').append('<tr id=row' + x +'> </tr>');
		for (var y = 1; y <= columns; y++){
			$('#row'+ x).append('<td></td>');
		}

	}
	//add color
	$('td').click(function(){
		var color = $('#colorPicker').val();     // selects the color input
		$(this).attr('style', 'background-color:' + color);
	})


}


