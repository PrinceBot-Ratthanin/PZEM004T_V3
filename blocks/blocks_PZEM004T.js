Blockly.Blocks['PZEM004T_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("Setup")
        .appendField("pin RX")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinRX")
        .appendField("pin TX")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinTX");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("setup PZEM004T sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['PZEM004T_readVolt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("Read Voltage (V)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read Voltage from PZEM004T sensor");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['PZEM004T_readCurrent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("read Current (A)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read Current from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PZEM004T_readPower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("read Power (W)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read Power from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PZEM004T_readEnergy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("read Energy (kWh)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read Energy from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PZEM004T_readFrequency'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("read frequency (Hz)");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read frequency from PZEM004T sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PZEM004T_readPF'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PZEM004T_1",null,["Plugin.PZEM004T_ESP"],["Plugin.PZEM004T_ESP"]), "instance")
        .appendField("read PF");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("read PE: from PZEM004T sensor");
 this.setHelpUrl("");
  }
};