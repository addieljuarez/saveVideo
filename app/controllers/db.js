
function createdata(){
	var db = Ti.Database.open('saveVideo');
	var pragma = db.execute('PRAGMA encoding = "UTF-8"');
	var createVdmsUser = db.execute('CREATE TABLE IF NOT EXISTS dataBaseVideo(id INTEGER PRIMARY KEY AUTOINCREMENT, idVideo TEXT, pathVideo TEXT, nameVideo TEXT);');
	var close = db.close();
}

createdata();


exports.countData = function(){
	var db = Ti.Database.open('saveVideo');
	var rows = db.execute('SELECT * FROM dataBaseVideo');
	var countRows = rows.rowCount;
	var closeRow = rows.close();
	var dbClose = db.close();
	return countRows;
}



// exports.deleteRows = function(){
// 	var db = Ti.Database.open('saveVideo');
// 	var pragma = db.execute('PRAGMA encoding = "UTF-8"'); 
// 	var deleteList = db.execute('DELETE FROM dataBaseVideo');
// 	var closeDb = db.close();
// 	createdata();
// }



exports.addVideo = function(_idVideo, _pathVideo, _nameVideo){
	var db = Ti.Database.open('saveVideo');
	var pragma = db.execute('PRAGMA encoding = "UTF-8"');
	var insertVideo = db.execute('INSERT INTO dataBaseVideo(idVideo, pathVideo, nameVideo) VALUES(?,?,?)', _idVideo, _pathVideo, _nameVideo);
	var closeDb = db.close();
}

var selectVideo = function(_idVideo){
	var data = [];
	var db = Ti.Database.open('saveVideo');
	var pragma = db.execute('PRAGMA encoding = "UTF-8"');
	var searchVideo = db.execute('SELECT * FROM dataBaseVideo WHERE idVideo=? LIMIT 1', _idVideo);
	while(searchVideo.isValidRow()){
		data.push({
			idVideo: searchVideo.fieldByName('idVideo') ,
			pathVideo:searchVideo.fieldByName('pathVideo'),
			nameVideo:searchVideo.fieldByName('nameVideo')
		});
	}
	searchVideo.next();
	var clsoeDb = db.close();
	return data;
}





