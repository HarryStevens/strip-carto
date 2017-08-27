module.exports = function(input_file, output_file){
	var fs = require("fs");

	var json = JSON.parse(fs.readFileSync(input_file, "utf-8"));

	json.features.forEach(feature => {
		delete feature.properties.cartodb_id;
		return feature;
	});

	fs.writeFileSync(output_file, JSON.stringify(json));
}