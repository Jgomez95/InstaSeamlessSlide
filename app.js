var Jimp = require('jimp');
let imgRaw = 'TestImages/laptop.jpg'; //Original TestImages


Jimp.read(imgRaw)
.then (original => {
  original
    .resize(2160,1350) //resize to to 2160px x 1350 px
    .quality(100)  // set JPEG quality
    .write('ExportedImages/newRaw.jpg');   //save

  console.log('Successfully resized image');

  var firstImage = original.clone();
  var secondImage = original.clone();

  firstImage
    .crop(0,0,1080,1350)
    .quality(100)
    .write('ExportedImages/first.jpg');
  secondImage
    .crop(1080,0,1080,1350)
    .quality(100)
    .write('ExportedImages/second.jpg');

  console.log('Successfully created the two images from the cropped photo ');
  })
  .catch(err => {
    console.error(err);
  });
