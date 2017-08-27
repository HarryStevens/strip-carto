# strip-carto
Remove the `cartodb_id` from the properties of GeoJSON features.

## Installation
```bash
 npm i strip-carto -S
 ```

## Usage
```js
var strip_carto = require("strip-carto");
strip_carto(input_geojson_file, output_geojson_file);
```

## Tests
```bash
npm test
```
