// This is just a template
// Do not require this module


DatabaseTools.prototype.select = function(table, id) {
  // This part can be copypasta'd to other functions
  var con = mysql.createConnection({
    host: this._server,
    user: this._username,
    password: this._password,
    database: this._database
  });
  con.connect(function(err){
    if(err){
      console.log(`[ERROR] connecting failed: ${this._database}`)
      return;
    }
    console.log(`[SUCCESS] connected: ${this._database}`);
  });
  // Conn Queries Go Here

  // This part can also be copypasta'd
  conn.end(function(err){
    if(err){
      console.log(`[ERROR] disconnect failed: ${this._database}`);
    } else {
      console.log(`[SUCCESS] disconnect: ${this._database}`);
    }
  });
