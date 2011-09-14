// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of the internal [[Prototype]] property of the RegExp constructor is the Function prototype object
 *
 * @section 15.10.5
 * @path 15_Native/15.10_RegExp_Objects/15.10.5_Properties_of_the_RegExp_Constructor/S15.10.5_A2_T1.js
 * @description Checking Function.prototype.isPrototypeOf(RegExp)
 */

 //CHECK#1
if (Function.prototype.isPrototypeOf(RegExp) !== true) {
	$ERROR('#1: Function.prototype.isPrototypeOf(RegExp) === true');
}

