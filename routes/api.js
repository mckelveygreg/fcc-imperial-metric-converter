/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){
      var input = req.query.input;
    console.log('input: ' + input);
      var initNum = convertHandler.getNum(input);
    console.log('initNum: ' + initNum);
    
      var initUnit = convertHandler.getUnit(input);
    console.log('initUnit: ' + initUnit);

    // error catching
      if (initUnit instanceof Error && initNum instanceof Error) {
         res.send('invalid number and unit'); 
      }
    
      if (initUnit instanceof Error) {
         res.send('invalid unit'); 
        }
     if (initNum instanceof Error) {
      res.send('invalid number');
    }
    
          var returnNum = convertHandler.convert(initNum, initUnit);
    console.log('return num: ' + returnNum);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log('returnUnit: ' + returnUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    //console.log(toString);
   console.log(res.text);
      res.status(200).json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString})
  }
  )
    
};
