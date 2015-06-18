/*
 * Copyright (C) 2014- now() The  algorithm-2015  Authors
 *
 * https://github.com/sdcuike
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//JavaScript数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。然而，这些数字索引在内部被转换为字符串类型，这是因为JavaScript
//对象中的属性名必须是字符串。
var numbers = [];
console.log(numbers.length);

numbers = [1,2,3,5,6];
console.log(numbers.length);

var objects = [1,"Jone",true,null];
console.log(objects);

console.log(Array.isArray(objects));

console.log(objects.indexOf(1));

console.log(numbers.concat(objects));
console.log(objects.concat(numbers));
console.log(objects.slice(1,3));

numbers.shift();
console.log(numbers);
numbers.unshift(22,33,55);
console.log(numbers);

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums);
nums.forEach(function(t){
    console.log(t);
});

var some = [11,22,[66,77],88];
console.log(some);