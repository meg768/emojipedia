var loadEmojis = once((folder) => {
    var fs = require('fs');
    var path = require('path');

    var images = [];

    fs.readdirSync(folder).forEach((file) => {

        var fileName = path.join(folder, file);
        var components = path.parse(fileName);

        if (components.ext == '.png') {
			var parts = components.name.split('_');

			if (parts.length == 2) {
				var name = parts[0].toLowerCase();
				var code = parts[1].toUpperCase();

				images[name] = fileName;
				images[code] = fileName;
			}
			else {
				images[components.name] = fileName;
			}
        }

    })

    return images;

});
