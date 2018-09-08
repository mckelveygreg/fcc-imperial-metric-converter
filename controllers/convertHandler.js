/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const regex = /\d+\.*\d*(?:\/)*(?:\d*\.*\d*)*/g
    const result = input.match(regex); // stringObject, not string Primitive
    //Fraction check
    if (!result) return 1;
    if (/\//.test(result)) {
        let newResult = result.toString().split('/').reduce((p,c) => p / c);
      //console.log(newResult);
        if(!newResult) { // invalid fraction check
          return (new Error('invalid number'));
          
          return newResult
        }
        return newResult;
        }
    // not fraction, so convert to number
    return Number(result);
  };
  
  this.getUnit = function(input) {
    var result = input.match(/([a-zA-Z])+/g).toString();
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    if (units.indexOf(result) > -1) {
      return result;
    //input is valid or not
    }
    
    return (new Error('invalid unit'));

  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit instanceof Error) return initUnit;
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    result = input.indexOf(initUnit.toLowerCase())
      // result = index of converted unit
    return expect[result];
  };

  this.spellOutUnit = function(unit) {
    
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
    result = input.indexOf(unit)
      // result = index of spelled out unit
    return expect[result];
  };
  
  this.convert = function(initNum, initUnit) {
   
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit.toLowerCase()) {
      case 'gal':
        return galToL * initNum;
      case 'l': 
        return initNum / galToL;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
      }
    // nothing matched...
    return 'invalid unit';
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var spelledInitUnit = this.spellOutUnit(initUnit);
    var spelledReturnUnit = this.spellOutUnit(returnUnit)
    //console.log(spelledInitUnit);
    
    var result = initNum + ' ' + spelledInitUnit + ' converts to ' + returnNum + ' ' + spelledReturnUnit;
    
    return result.toString();
  };
  
}

module.exports = ConvertHandler;
