const mysql = require("mysql");
const Promice = require("bluebird");
const { prototype } = require("bluebird");
const Async = require("bluebird/js/release/async");
Promice.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wptmodule",
  };


async function connectionCheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Successfull !");
    await connection.endAsync();
}

const record =  {
    sender : "niraj",
    reciever : "niraj2",
    msg : "hii"
}

const addrecord = async (p2 ) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,reciever ,msg ) value (?,?,?)`;
    const list = await connection.queryAsync(sql, [p2.sender, p2.reciever, p2.msg ]);
    await connection.endAsync();
    console.log("aded");
}
