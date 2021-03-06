/*******************************************************************************
 * Copyright (c) Nicola Del Gobbo
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the license at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY
 * IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing
 * permissions and limitations under the License.
 *
 * Contributors - initial API implementation:
 * Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 ******************************************************************************/

'use strict'

const Database = require('../').Database

console.log(Database)

process.chdir(__dirname)

const mydb = new Database('test')
console.log(mydb.db_name)
mydb.putKeySync("username", "NickNaso");
console.log(mydb.getKeySync("username"));

mydb.getKey("username", function(err, value) {
    if (err) {
        console.error('Error happened retrieving key -> username')
    } else {
        console.log("Value from my async API")
        console.log(value)
    }
})

mydb.putKey("password", "keeplooking", function (err) {
    if (err) {
        console.error("Error happened storing value for key -> password")
    } else {
        console.log("Value for key -> password successfully stored")
    }
})

const mydb2 = Database('test2');
console.log(mydb2.db_name)
mydb2.putKeySync("username", "NickNaso");
console.log(mydb2.getKeySync("username"));

