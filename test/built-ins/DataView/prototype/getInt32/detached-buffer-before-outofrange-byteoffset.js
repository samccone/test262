// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getint32
es6id: 24.2.4.9
description: >
  Detached buffer is checked before out of range byteOffset's value
info: |
  24.2.4.9 DataView.prototype.getInt32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Int32").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  8. Let buffer be the value of view's [[ViewedArrayBuffer]] internal slot.
  9. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
  13. If getIndex + elementSize > viewSize, throw a RangeError exception.
  ...
includes: [detachArrayBuffer.js]
---*/

var sample;
var buffer = new ArrayBuffer(12);

sample = new DataView(buffer, 0);

$DETACHBUFFER(buffer);

assert.throws(TypeError, function() {
  sample.getInt32(Infinity);
}, "Infinity");

assert.throws(TypeError, function() {
  sample.getInt32(13);
}, "13");
