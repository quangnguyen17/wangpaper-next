const fs = require('fs');

const photos = fs.readdirSync('./public/photos');

fs.writeFileSync('./public/photos.json', JSON.stringify({ photos }, null, 2));
