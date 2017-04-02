//array for use in converting number to corresponding month
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//convert entered unix time value to natural date form, return object with unix value and natural date
function convertUnix(input){
  var timeObj = {};
  timeObj.unix = input;
  var d = new Date(input*1000);
  timeObj.natural = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  return timeObj;
}

//convert entered date to unit form, return object with unix value and natural date
function convertHuman(input2){
  var timeObj = {};
  var alterInput = input2.replace(/%20/g,' ');
  var enterDate = Date.parse(alterInput);
  //check if it's valid entered value
  if(Number.isNaN(enterDate)){
    timeObj.unix = null;
    timeObj.natural = null;
  }
  else{
    timeObj.unix = enterDate;
    var secondDate = new Date(enterDate);
    timeObj.natural = months[secondDate.getMonth()] + ' ' + secondDate.getDate() + ', ' + secondDate.getFullYear();
  }
  return timeObj;
}

//receive the parameter from url, and convert using convertHuman or convertUnix based on parameter
var getConvertedTime = function(holdParameter){
    holdParameter = holdParameter.substring(0,holdParameter.length);
    var holdParameterConvert = Number(holdParameter);
    if(Number.isNaN(holdParameterConvert)){
        return JSON.stringify(convertHuman(holdParameter));
    }
    else{
        return JSON.stringify(convertUnix(holdParameterConvert));
    }
}

//export module function
module.exports.getConvertedTime = getConvertedTime;