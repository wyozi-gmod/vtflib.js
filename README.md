# vtflib.js

Create, edit and modify VTF files.

Code heavily based on VTFLIb by Nemesis.

## Crunching .vtf

(converts them to DXT5 inplace)

`./crunch.js myvtf`

## Usage

```js
const { VTFFile, VTFImageFormatType } = require(".");
const { readFileSync, writeFileSync } = require("fs");

let readdata = new VTFFile(readFileSync("./in.vtf"));

let image = readdata.getImages().reverse()[0];

// image.toRGBA8888()

readdata.setImage(image.convert("DXT5"));

writeFileSync("./out.vtf", readdata.toBuffer());
```
