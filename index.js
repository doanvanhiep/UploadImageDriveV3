var express = require('express');
var app = express();
var multer=require('multer');
const stream = require('stream');
const uploadfile = multer()
var upload=require('./UploadFileDrive/Upload');
var PORT = process.env.PORT || 3000;
app.post('/uploadfileimage',uploadfile.single('file'),function(req,res){
    let fileObject = req.file;
    let bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);
    var up=new upload(bufferStream,res);
    up.UploadFileToDrive();
});  

app.listen(PORT, () => console.log('Server started at ' + PORT));