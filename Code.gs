/**
* @param {range} sumRange Range to be evaluated
* @return {number} sumRange of cells colored in green 
* @customfunction
*/

function sumGreenCells(sumRange) {
  var activeRange = SpreadsheetApp.getActiveRange();
  var activeSheet = activeRange.getSheet();
  var formula = activeRange.getFormula(); 
  var rangeA1Notation = formula.match(/\((.*)\)/).pop();
  // Changed regular expression in case we pass only one param to function
  
  var range = activeSheet.getRange(rangeA1Notation);
    
  var bg = range.getBackgrounds();
  var values = range.getValues();
  
  var total = 0;
  
  for(var i=0;i<bg.length;i++)
    if(bg[i][0] == "#00ff00")
      total += values[i][0];
  return total;
};
/**
* @param {range} countRange Range to be evaluated
* @return {number} countRange of cells colored in green 
* @customfunction
*/
function countGreenCells(sumRange){
var activeRange = SpreadsheetApp.getActiveRange();
  var activeSheet = activeRange.getSheet();
  var formula = activeRange.getFormula();
   
  var rangeA1Notation = formula.match(/\((.*)\)/).pop();
  var range = activeSheet.getRange(rangeA1Notation);
    
  var bg = range.getBackgrounds();
  var values = range.getValues();
  
  var count = 0;
  
  for(var i=0;i<bg.length;i++)
    if(bg[i][0] == "#00ff00")
      count += 1;
  return count;
};
