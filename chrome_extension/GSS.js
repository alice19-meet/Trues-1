var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
 
// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('<1TgHccYlY3QS0c02I79JxiBKsyJX8aRB9STCgfFlUm3U>');
var sheet;
 
async.series([
  function setAuth(step) {
    // see notes below for authentication instructions!
    var creds = require('./client_secret.json');
    // OR, if you cannot save the file locally (like on heroku)
    var creds_json = {
      client_email: 'trues-46@trues-247006.iam.gserviceaccount.com',
      private_key: '\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZv7wNI125XLpl\na8KQ3SQCjlRa8iqs3Uv7Kbvqgh3HLTnwboKhMu1EQtR7GSwzTHkoe6jM35WhV4jE\nJ3IuMfTmgGRPgCGesWHS6dzNR7CCvtiSFPscQE1cmz+/N3hsk/Et0h6PaifjQSHZ\nJ96dOvmX9YrUanDe7wt878epEokwZLE5lQKbN1uQJTY9oekHh1xwjkncASR48OQ6\nXA56DKEkIT/Ic/YdHFTj52YdfTwHsTBhqbtgKL0raZ3n+KNc3QH+sYXoTsFjKp4E\n5ue1zlwo35DNw0hLlQjq0/3eRMG9qy0VkhISKthnah475RTR/bYjxT1xlkO7sH2m\n+pEocjrXAgMBAAECggEALcBVeMU3ihzrpSexJ9LvIAJbwwgi41NUBZ/NNgbEzva3\nt8bgd5JFvBP2pS6y1Mx6oIDrBLDttYq4184Z9Y7VkCDl8rZPWhKXJUOx+wfXFIGY\n64ixAkyYdJ7CFCFJkja7dA80EJoTa3Jh9EimQ48CpmUXGG6M7Kp5VXTkFKgqXxpF\nu3dYJR0qY+fZlqxt6VZbaS/gdZ/SSfj58SVS/kYY7o2b6aDpecLjzCO4ihkQKP/h\nF75tqQ8oKZjXwE/lO3xaqts7878nQu57apGZEQ8Cm+aIM3hm3BgPNLnSgewjgstw\nX+P66g1sZs5yC2MXtJZWiT9LxsUIrayS+kIS1hWWsQKBgQD2hn1aK0DNKTlJTAKz\nEC3uTeZTPd7ILIUg40WFsHOKO/y3LyylOM5IAvCRqRRqZ4iL5tuB5IEfdD03ZvTl\n7tQrP8yhONuEwyjhSxZ5yhjurU2+h84lVlIXv58NIWSG0oMMfYnErOa5mI1fGBq7\nxtVeOxTkZBS25Tx1v8m1FA0LYwKBgQDiHh7EWkx04AUR97gvuVMFXTs/ujOdXxAc\nPaG+ALgTu/XJa/Aj44RrQ/PONiLy1Ab9plrb553tDGnpecVIPibEioGQfIbst/5+\n8k/4rDyz9p8q/XpkRzGz1zFimD1FT/C0OFGS2fmZPrpf2ECHrRXq0uc1unaEa92U\nSbRQ3cQ+/QKBgQCNsk24lyXfBnPT6mmezIzp7UKW0/gKLHS0q40ZQ4uVh9dA30+V\nA+qlP3NQ9dMzOaElcKL4rQN+tcw93OKkirrOxRP0Ev8x9w63N/aKOBxOi7Qk8GAP\n2+bBmbVs0aW7TKJgeoPGVO8k/Ec9wlgTWDzptaHTiKbTXT18HKlueEDrKwKBgQC6\n3Ulv22/z5m5KOv3r8qu5cyLTt32QQE+ABy7zZoS5SkwE+T6ragq02qNRd0vKgY6F\ncEUGFpNcozWjzQ5MdZB0PEJ2tXKLjkKzhmywhSZlUxqW3IOY+30Hsn8Ni+KWtUmm\npiRDx/+NtVkwe/ZYKaJDPaf1rvLi3IFxWre5XIwhwQKBgDzHUapSzso3Is9mGJ6E\ng4X86BkFO+J/JyBeOXDmybV/yVtMC6VQTialsxc20YwbW+T1k93l1lrZfdOb3/zT\nNSahmvtr5GtW0ZD4faY5QcXm0tw7vcB9/CIjC7tXfxBOCDNo+QBdC480lkrgqcJJ\nb6uSdZgTV7gQXINTl0NDjndg\n-----END PRIVATE KEY-----\n'
    }
 
    doc.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
  function workingWithRows(step) {
    // google provides some query options
    sheet.getRows({
      offset: 1,
      limit: 20,
      orderby: 'col2'
    }, function( err, rows ){
      console.log('Read '+rows.length+' rows');
 
      // the row is an object with keys set by the column headers
      rows[0].colname = 'new val';
      rows[0].save(); // this is async
 
      // deleting a row
      rows[0].del();  // this is async
 
      step();
    });
  },
  function workingWithCells(step) {
    sheet.getCells({
      'min-row': 1,
      'max-row': 5,
      'return-empty': true
    }, function(err, cells) {
      var cell = cells[0];
      console.log('Cell R'+cell.row+'C'+cell.col+' = '+cell.value);
 
      // cells have a value, numericValue, and formula
      cell.value == '1'
      cell.numericValue == 1;
      cell.formula == '=ROW()';
 
      // updating `value` is "smart" and generally handles things for you
      cell.value = 123;
      cell.value = '=A1+B2'
      cell.save(); //async
 
      // bulk updates make it easy to update many cells at once
      cells[0].value = 1;
      cells[1].value = 2;
      cells[2].formula = '=A1+B1';
      sheet.bulkUpdateCells(cells); //async
 
      step();
    });
  },
  function managingSheets(step) {
    doc.addWorksheet({
      title: 'my new sheet'
    }, function(err, sheet) {
 
      // change a sheet's title
      sheet.setTitle('new title'); //async
 
      //resize a sheet
      sheet.resize({rowCount: 50, colCount: 20}); //async
 
      sheet.setHeaderRow(['name', 'age', 'phone']); //async
 
      // removing a worksheet
      sheet.del(); //async
 
      step();
    });
  }
], function(err){
    if( err ) {
      console.log('Error: '+err);
    }
});