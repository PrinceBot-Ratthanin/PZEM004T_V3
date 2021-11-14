Blockly.JavaScript['PZEM004T_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_dht_type = block.getFieldValue('dht_type');
    var number_pinRX = block.getFieldValue('pinRX');
    var number_pinTX = block.getFieldValue('pinTX');  
    var code = `
  #EXTINC #include <PZEM004Tv30.h>#END
  #VARIABLE PZEM004Tv30 ${variable_instance}(Serial2, ${number_pinRX}, ${number_pinTX});#END
  `;
    return code;
  };
  Blockly.JavaScript['PZEM004T_readVolt'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.voltage()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['PZEM004T_readCurrent'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.current()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['PZEM004T_readPower'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.power()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['PZEM004T_readEnergy'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.energy()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['PZEM004T_readFrequency'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.frequency()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['PZEM004T_readPF'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.pf()`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };