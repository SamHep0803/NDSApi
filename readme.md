# NDSApi

![](https://img.shields.io/npm/v/ndsapi.svg)

### Introduction

Hello Everyone!

NDSApi is a node.js API that allows you to use **ANY** Nintendo DS Rom, get it's cartridge headers and use it in your code!

This API removes the hassle of finding the NDS header offsets and sizes and squeezes all of the multi-line code into __**one**__ line of code for each header. *(amazing, right?)*

This can be useful for making discord bots or anything that you can imagine.

### Usage

Right now, there are only three different things that you can use with a ROM.

* Selecting a rom with `(ndsrom variable).selectrom();`
  * The ROM has to be in the same directory for this to work. 
  * It cannot be a 3DS rom. *(just yet!)*
* The internal name header with `(ndsrom variable).intname();`
* The Game ID with `(ndsrom variable).gameid();`

### Example

Here's an example of how you can use this API.

```js
const NDSApi = require('ndsapi');

NDSApi.selectrom();

var InternalName = NDSApi.intname();
var GameID = NDSApi.gameid();

console.log(InternalName + ' ' + GameID);
```

### Todo List

* Add more headers
* Add 3DS rom support
