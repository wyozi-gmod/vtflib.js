#!/usr/bin/env node

const [,, ...args] = process.argv;

const { VTFFile, VTFImageFormatType } = require(".");
const { readFileSync, writeFileSync } = require("fs");

for (const arg of args) {
    console.log("crunching ", arg);

    let readdata = new VTFFile(readFileSync(arg));
    
    let image = readdata.getImages().reverse()[0];
    
    // image.toRGBA8888()
    
    readdata.setImage(image.convert("DXT5"));
    
    writeFileSync(arg, readdata.toBuffer());
}
