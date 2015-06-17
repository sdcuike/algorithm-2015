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

/**
 * js对象和面向对象编程
 *
 * 对象通过如下方式创建：定义包含属性和方法声明的构造函数，并在构造函数后紧跟方法定义。
 * this关键字用来将方法和属性绑定到一个对象的实例上。
 *
 */
function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount){
    this.balance += amount;
}

function withdraw(amount){
    if(amount <= this.balance) {
        this.balance -= amount;
    }else{
        console.log("INsufficient funds");
    }
}

function toString(){
    return "Balance:" + this.balance;
}

var account = new Checking(500);
account.deposit(10000);
console.log(account.toString());

account.withdraw(1000);
console.log(account.toString());

/*
 递归
 */

function  factorial(number){
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}

console.log(factorial(3));