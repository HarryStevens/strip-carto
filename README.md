# strip-carto
[![Coverage Status](https://coveralls.io/repos/github/HarryStevens/strip-carto/badge.svg?branch=master)](https://coveralls.io/github/HarryStevens/strip-carto?branch=master) [![Build Status](https://travis-ci.org/HarryStevens/strip-carto.svg?branch=master)](https://travis-ci.org/HarryStevens/strip-carto)

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
