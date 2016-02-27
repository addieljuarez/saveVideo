
$.index.open();



 var tableView = Ti.UI.createTableView({
 	borderColor:'red',
 });



 var data = [];


 function executeTest(){

 	data = [];

 	for(var i =0; i < 10; i++){
 		var row = Ti.UI.createTableViewRow({
 			height:Ti.UI.SIZE,
 			layout:'vertical',
 		});


 		var labelTitle = Ti.UI.createLabel({
 			color:'#000',
 			text:i,
 			left:10,
 			height:Ti.UI.SIZE,
 		});

 		var buttonSave = Ti.UI.createButton({
 			top:5
 			height:40,
 			width:80,
 			left:10,
 			title:'grabar',
 		});


 		row.add(labelTitle);
 		row.add(buttonSave);

 		data.push(row);
 	}
 }



 executeTest();