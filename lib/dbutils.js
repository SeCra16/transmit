var mysql = require('mysql');

var DatabaseTools = function(credentialInstance) {
  this._credentialInstance = credentialInstance;
};

DatabaseTools.prototype.select = function(table, id) {
  var credentialInstance = this._credentialInstance; // Assign to local variable
  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });
  // Conn Queries Go Here
  con.query(`SELECT * FROM ${table} WHERE id=${id}`, function(err,rows){
    if(err){
      throw err;
    }
    console.log(`Data recieved from table ${table}: `);
    console.log(rows);
  });
  // This part can also be copypasta'd
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    } else {
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });

};

// Suitable for tables that are autoinsert
// Returns the autoinsert ID after insertation
DatabaseTools.prototype.autoinsert = function(table, column, value, callback) {

  var credentialInstance = this._credentialInstance; // Assign to local variable
  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });
  con.query(`INSERT INTO ${table}(${column}) VALUES ("${value}")`, function(err, result){
    if(err){
      throw err;
    }
    console.log(`[SUCCESS] ${value} inserted into table: ${table} with column: ${column}`);
    callback(result.insertId);
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    } else {
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });

};
// Suitable for inserting where an ID can be specified
DatabaseTools.prototype.insert = function(table, id, column, value) {
  var credentialInstance = this._credentialInstance;
  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });
  con.query(`INSERT INTO ${table}(id, ${column}) VALUES (${id}, "${value}")`, function(err){
    if(err){
      throw err;
    }
    console.log(`[SUCCESS] ${value} inserted into table: ${table} with column: ${column} and id=${id}`);
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    }
    else{
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });
};

DatabaseTools.prototype.update = function(table, id, column, value, callback) {
  var credentialInstance = this._credentialInstance;
  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });
  con.query(`UPDATE ${table} SET ${column}='${value}' WHERE id='${id}';`, function(err){
    if(err){
      throw err;
    }
    console.log(`[SUCCESS] Updated value: ${column} in table ${table} on id: ${id}, new value=${value}`);
    if(callback) {
      callback(id);
    }
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    }
    else{
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });
};

DatabaseTools.prototype.contains = function(table, column, value, callback) {
  var credentialInstance = this._credentialInstance;
  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });

  con.query(`SELECT id FROM ${table} WHERE ${column} = '${value}'`, function(err, result){
    if(err){
      throw err;
    }
    if(result.length > 0){
        callback(true);
    } else {
        callback(false);
    }
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    }
    else{
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });
};

DatabaseTools.prototype.fk_insert = function(table, column, value, ftable, id) {
  var credentialInstance = this._credentialInstance;

  var con = mysql.createConnection({
    host: credentialInstance.getServer(),
    user: credentialInstance.getUser(),
    password: credentialInstance.getPassword(),
    database: credentialInstance.getDatabase()
  });

  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${credentialInstance.getDatabase()}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${credentialInstance.getDatabase()}`);
  });
  con.query(`INSERT INTO ${table} (id, ${column}) VALUES ((SELECT id FROM ${ftable} WHERE id='${id}'), '${value}')`, function(err){
    if(err){
      throw err;
    }
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    }
    else{
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
    }
  });
};

module.exports = DatabaseTools;
