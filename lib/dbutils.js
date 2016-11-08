var mysql = require('mysql');

var DatabaseTools = function(credentialInstance, transportInstance) {
  this._credentialInstance = credentialInstance;
  this._transportInstance = transportInstance;
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

}

// Suitable for tables that are autoinsert
// Returns the autoinsert ID after insertation
DatabaseTools.prototype.autoinsert = function(table, column, value, callback) {

  var credentialInstance = this._credentialInstance; // Assign to local variable
  var transportInstance = this._transportInstance;
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
    transportInstance.setData(result.insertId);
  });
  con.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${credentialInstance.getDatabase()}`);
    } else {
      console.log(`[SUCCESS] disconnect: ${credentialInstance.getDatabase()}`);
      if(callback) {
        callback();
      }
    }
  });

};
// Suitable for inserting where an ID can be specified
DatabaseTools.prototype.insert = function(table, id, column, value, callback) {
  var credentialInstance = this._credentialInstance;
  var transportInstance = this._transportInstance;
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
  con.query(`INSERT INTO ${table}(id, ${column}) VALUES (${id}, "${value}")`, function(err, result){
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

module.exports = DatabaseTools;
