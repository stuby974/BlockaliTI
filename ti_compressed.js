// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Ti=new Blockly.Generator("Ti");Blockly.Ti.addReservedWords("and,as,assert,break,class,continue,def,del,elif,Else,except,exec,finally,for,from,global,If,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,Input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,Disp,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern");
Blockly.Ti.ORDER_ATOMIC=0;Blockly.Ti.ORDER_COLLECTION=1;Blockly.Ti.ORDER_STRING_CONVERSION=1;Blockly.Ti.ORDER_MEMBER=2;Blockly.Ti.ORDER_FUNCTION_CALL=2;Blockly.Ti.ORDER_EXPONENTIATION=3;Blockly.Ti.ORDER_UNARY_SIGN=4;Blockly.Ti.ORDER_BITWISE_NOT=4;Blockly.Ti.ORDER_MULTIPLICATIVE=5;Blockly.Ti.ORDER_ADDITIVE=6;Blockly.Ti.ORDER_BITWISE_SHIFT=7;Blockly.Ti.ORDER_BITWISE_AND=8;Blockly.Ti.ORDER_BITWISE_XOR=9;Blockly.Ti.ORDER_BITWISE_OR=10;
Blockly.Ti.ORDER_RELATIONAL=11;Blockly.Ti.ORDER_LOGICAL_NOT=12;Blockly.Ti.ORDER_LOGICAL_AND=13;Blockly.Ti.ORDER_LOGICAL_OR=14;Blockly.Ti.ORDER_CONDITIONAL=15;Blockly.Ti.ORDER_LAMBDA=16;Blockly.Ti.ORDER_NONE=99;Blockly.Ti.PASS="  pass\n";

Blockly.Ti.init=function(a){Blockly.Ti.definitions_=Object.create(null);Blockly.Ti.functionNames_=Object.create(null);Blockly.Ti.variableDB_?Blockly.Ti.variableDB_.reset():Blockly.Ti.variableDB_=new Blockly.Names(Blockly.Ti.RESERVED_WORDS_);var b=[]};


Blockly.Ti.finish=function(a){var b=[],c=[],d;for(d in Blockly.Ti.definitions_){var e=Blockly.Ti.definitions_[d];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?b.push(e):c.push(e)}delete Blockly.Ti.definitions_;delete Blockly.Ti.functionNames_;Blockly.Ti.variableDB_.reset();return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Ti.scrubNakedValue=function(a){return a+"\n"};

Blockly.Ti.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\%/g,"\\%").replace(/'/g,"\\'");return"\""+a+"\""};
Blockly.Ti.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Ti.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Ti.allNestedComments(d))&&(c+=Blockly.Ti.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Ti.blockToCode(e);return c+b+e};Blockly.Ti.colour={};Blockly.Ti.colour_picker=function(a){return["'"+a.getFieldValue("COLOUR")+"'",Blockly.Ti.ORDER_ATOMIC]};Blockly.Ti.colour_random=function(a){Blockly.Ti.definitions_.import_random="import random";return["'#%06x' % random.randint(0, 2**24 - 1)",Blockly.Ti.ORDER_FUNCTION_CALL]};

Blockly.Ti.colour_rgb=function(a){var b=Blockly.Ti.provideFunction_("colour_rgb",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(r, g, b):","  r = round(min(100, max(0, r)) * 2.55)","  g = round(min(100, max(0, g)) * 2.55)","  b = round(min(100, max(0, b)) * 2.55)","  return '#%02x%02x%02x' % (r, g, b)"]),c=Blockly.Ti.valueToCode(a,"RED",Blockly.Ti.ORDER_NONE)||0,d=Blockly.Ti.valueToCode(a,"GREEN",Blockly.Ti.ORDER_NONE)||0;a=Blockly.Ti.valueToCode(a,"BLUE",Blockly.Ti.ORDER_NONE)||
0;return[b+"("+c+", "+d+", "+a+")",Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.colour_blend=function(a){var b=Blockly.Ti.provideFunction_("colour_blend",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(colour1, colour2, ratio):","  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)","  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)","  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)","  ratio = min(1, max(0, ratio))","  r = round(r1 * (1 - ratio) + r2 * ratio)","  g = round(g1 * (1 - ratio) + g2 * ratio)","  b = round(b1 * (1 - ratio) + b2 * ratio)",
"  return '#%02x%02x%02x' % (r, g, b)"]),c=Blockly.Ti.valueToCode(a,"COLOUR1",Blockly.Ti.ORDER_NONE)||"'#000000'",d=Blockly.Ti.valueToCode(a,"COLOUR2",Blockly.Ti.ORDER_NONE)||"'#000000'";a=Blockly.Ti.valueToCode(a,"RATIO",Blockly.Ti.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.lists={};Blockly.Ti.lists_create_empty=function(a){return["[]",Blockly.Ti.ORDER_ATOMIC]};Blockly.Ti.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Ti.valueToCode(a,"ADD"+c,Blockly.Ti.ORDER_NONE)||"None";b="["+b.join(", ")+"]";return[b,Blockly.Ti.ORDER_ATOMIC]};

Blockly.Ti.lists_repeat=function(a){var b=Blockly.Ti.valueToCode(a,"ITEM",Blockly.Ti.ORDER_NONE)||"None";a=Blockly.Ti.valueToCode(a,"NUM",Blockly.Ti.ORDER_MULTIPLICATIVE)||"0";return["["+b+"] * "+a,Blockly.Ti.ORDER_MULTIPLICATIVE]};Blockly.Ti.lists_length=function(a){return["len("+(Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"[]")+")",Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.lists_isEmpty=function(a){return["not len("+(Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"[]")+")",Blockly.Ti.ORDER_LOGICAL_NOT]};
Blockly.Ti.lists_indexOf=function(a){var b=Blockly.Ti.valueToCode(a,"FIND",Blockly.Ti.ORDER_NONE)||"[]",c=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_MEMBER)||"''";return[("FIRST"==a.getFieldValue("END")?Blockly.Ti.provideFunction_("first_index",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(myList, elem):","  try: theIndex = myList.index(elem) + 1","  except: theIndex = 0","  return theIndex"]):Blockly.Ti.provideFunction_("last_index",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+
"(myList, elem):","  try: theIndex = len(myList) - myList[::-1].index(elem)","  except: theIndex = 0","  return theIndex"]))+"("+c+", "+b+")",Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Ti.valueToCode(a,"AT",Blockly.Ti.ORDER_UNARY_SIGN)||"1";a=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_MEMBER)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",Blockly.Ti.ORDER_MEMBER];c=a+".pop(0)";if("GET_REMOVE"==b)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+"\n"}else if("LAST"==c){if("GET"==b)return[a+"[-1]",Blockly.Ti.ORDER_MEMBER];
c=a+".pop()";if("GET_REMOVE"==b)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+"\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseInt(d,10)-1:"int("+d+" - 1)";if("GET"==b)return[a+"["+d+"]",Blockly.Ti.ORDER_MEMBER];c=a+".pop("+d+")";if("GET_REMOVE"==b)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+"\n"}else if("FROM_END"==c){if("GET"==b)return[a+"[-"+d+"]",Blockly.Ti.ORDER_MEMBER];c=a+".pop(-"+d+")";if("GET_REMOVE"==b)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];
if("REMOVE"==b)return c+"\n"}else if("RANDOM"==c){Blockly.Ti.definitions_.import_random="import random";if("GET"==b)return["random.choice("+a+")",Blockly.Ti.ORDER_FUNCTION_CALL];c=Blockly.Ti.provideFunction_("lists_remove_random_item",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  x = int(random.random() * len(myList))","  return myList.pop(x)"])+"("+a+")";if("GET_REMOVE"==b)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+"\n"}throw"Unhandled combination (lists_getIndex).";
};
Blockly.Ti.lists_setIndex=function(a){var b=Blockly.Ti.valueToCode(a,"LIST",Blockly.Ti.ORDER_MEMBER)||"[]",c=a.getFieldValue("MODE")||"GET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Ti.valueToCode(a,"AT",Blockly.Ti.ORDER_NONE)||"1";a=Blockly.Ti.valueToCode(a,"TO",Blockly.Ti.ORDER_NONE)||"None";if("FIRST"==d){if("SET"==c)return b+"[0] = "+a+"\n";if("INSERT"==c)return b+".insert(0, "+a+")\n"}else if("LAST"==d){if("SET"==c)return b+"[-1] = "+a+"\n";if("INSERT"==c)return b+
".append("+a+")\n"}else if("FROM_START"==d){e=Blockly.isNumber(e)?parseInt(e,10)-1:"int("+e+" - 1)";if("SET"==c)return b+"["+e+"] = "+a+"\n";if("INSERT"==c)return b+".insert("+e+", "+a+")\n"}else if("FROM_END"==d){if("SET"==c)return b+"[-"+e+"] = "+a+"\n";if("INSERT"==c)return b+".insert(-"+e+", "+a+")\n"}else if("RANDOM"==d){Blockly.Ti.definitions_.import_random="import random";b.match(/^\w+$/)?d="":(d=Blockly.Ti.variableDB_.getDistinctName("tmp_list",Blockly.Variables.NAME_TYPE),e=d+" = "+
b+"\n",b=d,d=e);e=Blockly.Ti.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);d+=e+" = int(random.random() * len("+b+"))\n";if("SET"==c)return d+(b+"["+e+"] = "+a+"\n");if("INSERT"==c)return d+=b+".insert("+e+", "+a+")\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.Ti.lists_getSublist=function(a){var b=Blockly.Ti.valueToCode(a,"LIST",Blockly.Ti.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Ti.valueToCode(a,"AT1",Blockly.Ti.ORDER_ADDITIVE)||"1";a=Blockly.Ti.valueToCode(a,"AT2",Blockly.Ti.ORDER_ADDITIVE)||"1";"FIRST"==c||"FROM_START"==c&&"1"==e?e="":"FROM_START"==c?e=Blockly.isNumber(e)?parseInt(e,10)-1:"int("+e+" - 1)":"FROM_END"==c&&(e=Blockly.isNumber(e)?-parseInt(e,10):"-int("+e+")");
"LAST"==d||"FROM_END"==d&&"1"==a?a="":"FROM_START"==c?a=Blockly.isNumber(a)?parseInt(a,10):"int("+a+")":"FROM_END"==c&&(Blockly.isNumber(a)?(a=1-parseInt(a,10),0==a&&(a="")):(Blockly.Ti.definitions_.import_sys="import sys",a="int(1 - "+a+") or sys.maxsize"));return[b+"["+e+" : "+a+"]",Blockly.Ti.ORDER_MEMBER]};
Blockly.Ti.lists_split=function(a){var b=a.getFieldValue("MODE");if("SPLIT"==b)b=Blockly.Ti.valueToCode(a,"INPUT",Blockly.Ti.ORDER_MEMBER)||"''",a=Blockly.Ti.valueToCode(a,"DELIM",Blockly.Ti.ORDER_NONE),a=b+".split("+a+")";else if("JOIN"==b)b=Blockly.Ti.valueToCode(a,"INPUT",Blockly.Ti.ORDER_NONE)||"[]",a=Blockly.Ti.valueToCode(a,"DELIM",Blockly.Ti.ORDER_MEMBER)||"''",a=a+".join("+b+")";else throw"Unknown mode: "+b;return[a,Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.logic={};




Blockly.Ti.controls_if=function(a){for(var b=0,c=Blockly.Ti.valueToCode(a,"IF"+b,Blockly.Ti.ORDER_NONE)||"False",d=Blockly.Ti.statementToCode(a,"DO"+b)||Blockly.Ti.PASS,e="If "+c+"\nThen\n"+d,b=1;b<=a.elseifCount_;b++)c=Blockly.Ti.valueToCode(a,"IF"+b,Blockly.Ti.ORDER_NONE)||"False",d=Blockly.Ti.statementToCode(a,"DO"+b)||Blockly.Ti.PASS,e+="Else "+c+"\n"+d;a.elseCount_&&(d=Blockly.Ti.statementToCode(a,"ELSE")||Blockly.Ti.PASS,e+="Else \n"+d);return e+"End\n"};
	
Blockly.Ti.logic_compare=function(a){var b={EQ:"=",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=Blockly.Ti.ORDER_RELATIONAL,d=Blockly.Ti.valueToCode(a,"A",c)||"0";a=Blockly.Ti.valueToCode(a,"B",c)||"0";return[d+""+b+""+a,c]};
Blockly.Ti.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"and":"or",c="and"==b?Blockly.Ti.ORDER_LOGICAL_AND:Blockly.Ti.ORDER_LOGICAL_OR,d=Blockly.Ti.valueToCode(a,"A",c);a=Blockly.Ti.valueToCode(a,"B",c);if(d||a){var e="and"==b?"True":"False";d||(d=e);a||(a=e)}else a=d="False";return[d+" "+b+" "+a,c]};Blockly.Ti.logic_negate=function(a){return["not "+(Blockly.Ti.valueToCode(a,"BOOL",Blockly.Ti.ORDER_LOGICAL_NOT)||"True"),Blockly.Ti.ORDER_LOGICAL_NOT]};
Blockly.Ti.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"True":"False",Blockly.Ti.ORDER_ATOMIC]};Blockly.Ti.logic_null=function(a){return["None",Blockly.Ti.ORDER_ATOMIC]};
Blockly.Ti.logic_ternary=function(a){var b=Blockly.Ti.valueToCode(a,"If",Blockly.Ti.ORDER_CONDITIONAL)||"False",c=Blockly.Ti.valueToCode(a,"Then",Blockly.Ti.ORDER_CONDITIONAL)||"None";a=Blockly.Ti.valueToCode(a,"ELSE",Blockly.Ti.ORDER_CONDITIONAL)||"None";return[c+" if "+b+" else "+a,Blockly.Ti.ORDER_CONDITIONAL]};Blockly.Ti.loops={};


Blockly.Ti.controls_repeat_ext=function(a){var b=a.getField("TIMES")?String(parseInt(a.getFieldValue("TIMES"),10)):Blockly.Ti.valueToCode(a,"TIMES",Blockly.Ti.ORDER_NONE)||"0",b=Blockly.isNumber(b)?parseInt(b,10):"int("+b+")",c=Blockly.Ti.statementToCode(a,"DO"),c=Blockly.Ti.addLoopTrap(c,a.id)||Blockly.Ti.PASS;return"for "+Blockly.Ti.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE)+" in range("+b+"):\n"+c};
Blockly.Ti.controls_repeat=Blockly.Ti.controls_repeat_ext;

Blockly.Ti.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Ti.valueToCode(a,"BOOL",b?Blockly.Ti.ORDER_LOGICAL_NOT:Blockly.Ti.ORDER_NONE)||"False",d=Blockly.Ti.statementToCode(a,"DO"),d=Blockly.Ti.addLoopTrap(d,a.id)||Blockly.Ti.PASS;b&&(c="not "+c);return"While "+c+"\n"+d+"End\n" };


Blockly.Ti.controls_for=function(a){var b=Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Ti.valueToCode(a,"FROM",Blockly.Ti.ORDER_NONE)||"0",d=Blockly.Ti.valueToCode(a,"TO",Blockly.Ti.ORDER_NONE)||"0",m=Blockly.Ti.valueToCode(a,"TO",Blockly.Ti.ORDER_NONE)||"0",e=Blockly.Ti.valueToCode(a,"BY",Blockly.Ti.ORDER_NONE)||"1",g=Blockly.Ti.statementToCode(a,"DO"),g=Blockly.Ti.addLoopTrap(g,a.id)||Blockly.Ti.PASS,f="",h=function(){return Blockly.Ti.provideFunction_("upRange",
["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start <= stop:","    yield start","    start += abs(step)"])},k=function(){return Blockly.Ti.provideFunction_("downRange",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(start, stop, step):","  while start >= stop:","    yield start","    start -= abs(step)"])};a=function(a,b,c){return"("+a+" <= "+b+") and "+h()+"("+a+", "+b+", "+c+") or "+k()+"("+a+", "+b+", "+c+")"};if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&
Blockly.isNumber(e))c=parseFloat(c),d=parseFloat(d),e=Math.abs(parseFloat(e)),0===c%1&&0===d%1&&0===e%1?(c<=d?(d++,a=0==c&&1==e?d:c+", "+d,1!=e&&(a+=","+e)):(d--,a=c+", "+d+", -"+e),a=a):(a=c<d?h():k(),a+="("+c+", "+d+", "+e+")");else{var l=function(a,c){if(Blockly.isNumber(a))a=parseFloat(a);else if(a.match(/^\w+$/))a="float("+a+")";else{var d=Blockly.Ti.variableDB_.getDistinctName(b+c,Blockly.Variables.NAME_TYPE);f+=d+" = float("+a+")\n";a=d}return a},c=l(c,"_start"),d=l(d,"_end");if(e)
l(e,"_inc");a="number"==typeof c&&"number"==typeof d?c<d?h(c,d,e):k(c,d,e):a(c,d,e)}return f+="For("+b+","+c+","+m+","+e+"\n"+g+"End\n"};

Blockly.Ti.controls_forEach=function(a){var b=Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Ti.valueToCode(a,"LIST",Blockly.Ti.ORDER_NONE)||"{}";a=Blockly.Ti.statementToCode(a,"DO")||"\n";a=Blockly.Ti.addContinueLabel(a);return"for _, "+b+" in ipairs("+c+") do \n"+a+"end\n"};

Blockly.Ti.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break\n";case "CONTINUE":return"continue\n"}throw"Unknown flow statement.";};Blockly.Ti.math={};Blockly.Ti.addReservedWords("math,random");Blockly.Ti.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));return[a,0>a?Blockly.Ti.ORDER_UNARY_SIGN:Blockly.Ti.ORDER_ATOMIC]};

Blockly.Ti.math_arithmetic=function(a){var b={ADD:["+",Blockly.Ti.ORDER_ADDITIVE],MINUS:["-",Blockly.Ti.ORDER_ADDITIVE],MULTIPLY:["*",Blockly.Ti.ORDER_MULTIPLICATIVE],DIVIDE:["/",Blockly.Ti.ORDER_MULTIPLICATIVE],POWER:["^",Blockly.Ti.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.Ti.valueToCode(a,"A",b)||"0";a=Blockly.Ti.valueToCode(a,"B",b)||"0";return[d+c+a,b]};
Blockly.Ti.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return c=Blockly.Ti.valueToCode(a,"NUM",Blockly.Ti.ORDER_UNARY_SIGN)||"0",["-"+c,Blockly.Ti.ORDER_UNARY_SIGN];Blockly.Ti.definitions_.import_math="import math";a="SIN"==b||"COS"==b||"TAN"==b?Blockly.Ti.valueToCode(a,"NUM",Blockly.Ti.ORDER_MULTIPLICATIVE)||"0":Blockly.Ti.valueToCode(a,"NUM",Blockly.Ti.ORDER_NONE)||"0";switch(b){case "ABS":c="math.fabs("+a+")";break;case "ROOT":c="math.sqrt("+
a+")";break;case "LN":c="math.log("+a+")";break;case "LOG10":c="math.log10("+a+")";break;case "EXP":c="math.exp("+a+")";break;case "POW10":c="math.pow(10,"+a+")";break;case "ROUND":c="round("+a+")";break;case "ROUNDUP":c="math.ceil("+a+")";break;case "ROUNDDOWN":c="math.floor("+a+")";break;case "SIN":c="math.sin("+a+" / 180.0 * math.pi)";break;case "COS":c="math.cos("+a+" / 180.0 * math.pi)";break;case "TAN":c="math.tan("+a+" / 180.0 * math.pi)"}if(c)return[c,Blockly.Ti.ORDER_FUNCTION_CALL];switch(b){case "ASIN":c=
"math.asin("+a+") / math.pi * 180";break;case "ACOS":c="math.acos("+a+") / math.pi * 180";break;case "ATAN":c="math.atan("+a+") / math.pi * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Ti.ORDER_MULTIPLICATIVE]};
Blockly.Ti.math_constant=function(a){var b={PI:["math.pi",Blockly.Ti.ORDER_MEMBER],E:["math.e",Blockly.Ti.ORDER_MEMBER],GOLDEN_RATIO:["(1 + math.sqrt(5)) / 2",Blockly.Ti.ORDER_MULTIPLICATIVE],SQRT2:["math.sqrt(2)",Blockly.Ti.ORDER_MEMBER],SQRT1_2:["math.sqrt(1.0 / 2)",Blockly.Ti.ORDER_MEMBER],INFINITY:["float('inf')",Blockly.Ti.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&(Blockly.Ti.definitions_.import_math="import math");return b[a]};
Blockly.Ti.math_number_property=function(a){var b=Blockly.Ti.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Ti.ORDER_MULTIPLICATIVE)||"0",c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return Blockly.Ti.definitions_.import_math="import math",d=Blockly.Ti.provideFunction_("math_isPrime",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(n):","  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  # If n is not a number but a string, try parsing it.","  if type(n) not in (int, float, long):",
"    try:","      n = float(n)","    except:","      return False","  if n == 2 or n == 3:","    return True","  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.","  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:","    return False","  # Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for x in range(6, int(math.sqrt(n)) + 2, 6):","    if n % (x - 1) == 0 or n % (x + 1) == 0:","      return False","  return True"])+"("+b+")",[d,Blockly.Ti.ORDER_FUNCTION_CALL];
switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Ti.valueToCode(a,"DIVISOR",Blockly.Ti.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["False",Blockly.Ti.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Ti.ORDER_RELATIONAL]};
Blockly.Ti.math_change=function(a){var b=Blockly.Ti.valueToCode(a,"DELTA",Blockly.Ti.ORDER_ADDITIVE)||"0";a=Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = ("+a+" if type("+a+") in (int, float, long) else 0) + "+b+"\n"};Blockly.Ti.math_round=Blockly.Ti.math_single;Blockly.Ti.math_trig=Blockly.Ti.math_single;
Blockly.Ti.math_on_list=function(a){var b=a.getFieldValue("OP");a=Blockly.Ti.valueToCode(a,"LIST",Blockly.Ti.ORDER_NONE)||"[]";switch(b){case "SUM":b="sum("+a+")";break;case "MIN":b="min("+a+")";break;case "MAX":b="max("+a+")";break;case "AVERAGE":b=Blockly.Ti.provideFunction_("math_mean",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = [e for e in myList if type(e) in (int, float, long)]","  if not localList: return","  return float(sum(localList)) / len(localList)"]);
b=b+"("+a+")";break;case "MEDIAN":b=Blockly.Ti.provideFunction_("math_median",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(myList):","  localList = sorted([e for e in myList if type(e) in (int, float, long)])","  if not localList: return","  if len(localList) % 2 == 0:","    return (localList[len(localList) / 2 - 1] + localList[len(localList) / 2]) / 2.0","  else:","    return localList[(len(localList) - 1) / 2]"]);b=b+"("+a+")";break;case "MODE":b=Blockly.Ti.provideFunction_("math_modes",
["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(some_list):","  modes = []","  # Using a lists of [item, count] to keep count rather than dict",'  # to avoid "unhashable" errors when the counted item is itself a list or dict.',"  counts = []","  maxCount = 1","  for item in some_list:","    found = False","    for count in counts:","      if count[0] == item:","        count[1] += 1","        maxCount = max(maxCount, count[1])","        found = True","    if not found:","      counts.append([item, 1])",
"  for counted_item, item_count in counts:","    if item_count == maxCount:","      modes.append(counted_item)","  return modes"]);b=b+"("+a+")";break;case "STD_DEV":Blockly.Ti.definitions_.import_math="import math";b=Blockly.Ti.provideFunction_("math_standard_deviation",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(numbers):","  n = len(numbers)","  if n == 0: return","  mean = float(sum(numbers)) / n","  variance = sum((x - mean) ** 2 for x in numbers) / n","  return math.sqrt(variance)"]);
b=b+"("+a+")";break;case "RANDOM":Blockly.Ti.definitions_.import_random="import random";b="random.choice("+a+")";break;default:throw"Unknown operator: "+b;}return[b,Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.math_modulo=function(a){var b=Blockly.Ti.valueToCode(a,"DIVIDEND",Blockly.Ti.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Ti.valueToCode(a,"DIVISOR",Blockly.Ti.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Ti.ORDER_MULTIPLICATIVE]};
Blockly.Ti.math_constrain=function(a){var b=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"0",c=Blockly.Ti.valueToCode(a,"LOW",Blockly.Ti.ORDER_NONE)||"0";a=Blockly.Ti.valueToCode(a,"HIGH",Blockly.Ti.ORDER_NONE)||"float('inf')";return["min(max("+b+", "+c+"), "+a+")",Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.math_random_int=function(a){Blockly.Ti.definitions_.import_random="import random";var b=Blockly.Ti.valueToCode(a,"FROM",Blockly.Ti.ORDER_NONE)||"0";a=Blockly.Ti.valueToCode(a,"TO",Blockly.Ti.ORDER_NONE)||"0";return["random.randint("+b+", "+a+")",Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.math_random_float=function(a){Blockly.Ti.definitions_.import_random="import random";return["random.random()",Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.procedures={};

Blockly.Ti.procedures_defreturn=function(a){for(var b=Blockly.Variables.allVariables(a),c=b.length-1;0<=c;c--){var d=b[c];-1==a.arguments_.indexOf(d)?b[c]=Blockly.Ti.variableDB_.getName(d,Blockly.Variables.NAME_TYPE):b.splice(c,1)}b=b.length?"  global "+b.join(", ")+"\n":"";c=Blockly.Ti.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);d=Blockly.Ti.statementToCode(a,"STACK");Blockly.Ti.STATEMENT_PREFIX&&(d=Blockly.Ti.prefixLines(Blockly.Ti.STATEMENT_PREFIX.replace(/%1/g,"'"+
a.id+"'"),Blockly.Ti.INDENT)+d);Blockly.Ti.INFINITE_LOOP_TRAP&&(d=Blockly.Ti.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+'"')+d);var e=Blockly.Ti.valueToCode(a,"RETURN",Blockly.Ti.ORDER_NONE)||"";e?e="  return "+e+"\n":d||(d=Blockly.Ti.PASS);for(var g=[],f=0;f<a.arguments_.length;f++)g[f]=Blockly.Ti.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);b="def "+c+"("+g.join(", ")+"):\n"+b+d+e;b=Blockly.Ti.scrub_(a,b);Blockly.Ti.definitions_[c]=b;return null};
Blockly.Ti.procedures_defnoreturn=Blockly.Ti.procedures_defreturn;Blockly.Ti.procedures_callreturn=function(a){for(var b=Blockly.Ti.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Ti.valueToCode(a,"ARG"+d,Blockly.Ti.ORDER_NONE)||"None";return[b+"("+c.join(", ")+")",Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.procedures_callnoreturn=function(a){for(var b=Blockly.Ti.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Ti.valueToCode(a,"ARG"+d,Blockly.Ti.ORDER_NONE)||"None";return b+"("+c.join(", ")+")\n"};
Blockly.Ti.procedures_ifreturn=function(a){var b="if "+(Blockly.Ti.valueToCode(a,"CONDITION",Blockly.Ti.ORDER_NONE)||"False")+":\n";a.hasReturnValue_?(a=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"None",b+="  return "+a+"\n"):b+="  return\n";return b};
Blockly.Ti.texts={};
Blockly.Ti.text=function(a){return[Blockly.Ti.quote_(a.getFieldValue("TEXT")),Blockly.Ti.ORDER_ATOMIC]};

Blockly.Ti.text_join=function(a){var b;if(0==a.itemCount_)return["",Blockly.Ti.ORDER_ATOMIC];
if(1==a.itemCount_)return b=Blockly.Ti.valueToCode(a,"ADD0",Blockly.Ti.ORDER_NONE)||"",[","+b+"",Blockly.Ti.ORDER_FUNCTION_CALL];
if(2==a.itemCount_)return b=Blockly.Ti.valueToCode(a,"ADD0",Blockly.Ti.ORDER_NONE)||"",a=Blockly.Ti.valueToCode(a,"ADD1",Blockly.Ti.ORDER_NONE)||"''",[b+","+a,Blockly.Ti.ORDER_UNARY_SIGN];b=[];
for(var c=0;c<a.itemCount_;c++)b[c]=Blockly.Ti.valueToCode(a,"ADD"+","+c,Blockly.Ti.ORDER_NONE)||"''";a=Blockly.Ti.variableDB_.getDistinctName("temp_value",Blockly.Variables.NAME_TYPE);b="''.join([str("+a+") for "+a+" in ["+b.join(", ")+"]])";
return[b,Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.text_append=function(a){var b=Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.Ti.valueToCode(a,"TEXT",Blockly.Ti.ORDER_NONE)||"''";return b+" = str("+b+") + str("+a+")\n"};

Blockly.Ti.text_length=function(a){return["len("+(Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"''")+")",Blockly.Ti.ORDER_FUNCTION_CALL]};Blockly.Ti.text_isEmpty=function(a){return["not len("+(Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"''")+")",Blockly.Ti.ORDER_LOGICAL_NOT]};
Blockly.Ti.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"find":"rfind",c=Blockly.Ti.valueToCode(a,"FIND",Blockly.Ti.ORDER_NONE)||"''";return[(Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_MEMBER)||"''")+"."+b+"("+c+") + 1",Blockly.Ti.ORDER_MEMBER]};
Blockly.Ti.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Ti.valueToCode(a,"AT",Blockly.Ti.ORDER_UNARY_SIGN)||"1";a=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_MEMBER)||"''";switch(b){case "FIRST":return[a+"[0]",Blockly.Ti.ORDER_MEMBER];case "LAST":return[a+"[-1]",Blockly.Ti.ORDER_MEMBER];case "FROM_START":return c=Blockly.isNumber(c)?parseInt(c,10)-1:"int("+c+" - 1)",[a+"["+c+"]",Blockly.Ti.ORDER_MEMBER];case "FROM_END":return[a+
"[-"+c+"]",Blockly.Ti.ORDER_MEMBER];case "RANDOM":return Blockly.Ti.definitions_.import_random="import random",b=Blockly.Ti.provideFunction_("text_random_letter",["def "+Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+"(text):","  x = int(random.random() * len(text))","  return text[x];"])+"("+a+")",[b,Blockly.Ti.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Ti.text_getSubstring=function(a){var b=Blockly.Ti.valueToCode(a,"STRING",Blockly.Ti.ORDER_MEMBER)||"",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Ti.valueToCode(a,"AT1",Blockly.Ti.ORDER_ADDITIVE)||"1";a=Blockly.Ti.valueToCode(a,"AT2",Blockly.Ti.ORDER_ADDITIVE)||"1";"FIRST"==c||"FROM_START"==c&&"1"==e?e="":"FROM_START"==c?e=Blockly.isNumber(e)?parseInt(e,10)-1:"int("+e+" - 1)":"FROM_END"==c&&(e=Blockly.isNumber(e)?-parseInt(e,10):"-int("+
e+")");"LAST"==d||"FROM_END"==d&&"1"==a?a="":"FROM_START"==c?a=Blockly.isNumber(a)?parseInt(a,10):"int("+a+")":"FROM_END"==c&&(Blockly.isNumber(a)?(a=1-parseInt(a,10),0==a&&(a="")):(Blockly.Ti.definitions_.import_sys="import sys",a="int(1 - "+a+") or sys.maxsize"));return[b+"["+e+" : "+a+"]",Blockly.Ti.ORDER_MEMBER]};
Blockly.Ti.text_changeCase=function(a){var b={UPPERCASE:".upper()",LOWERCASE:".lower()",TITLECASE:".title()"}[a.getFieldValue("CASE")];return[(Blockly.Ti.valueToCode(a,"TEXT",Blockly.Ti.ORDER_MEMBER)||"''")+b,Blockly.Ti.ORDER_MEMBER]};Blockly.Ti.text_trim=function(a){var b={LEFT:".lstrip()",RIGHT:".rstrip()",BOTH:".strip()"}[a.getFieldValue("MODE")];return[(Blockly.Ti.valueToCode(a,"TEXT",Blockly.Ti.ORDER_MEMBER)||"''")+b,Blockly.Ti.ORDER_MEMBER]};


Blockly.Ti.affiche_fenetre=function(a){return"Disp "+(Blockly.Ti.valueToCode(a,"TEXT",Blockly.Ti.ORDER_NONE)||"")+"\n"};
Blockly.Ti.text_prompt_ext=function(a){
	var b=Blockly.Ti.provideFunction_("Prompt",[Blockly.Ti.FUNCTION_NAME_PLACEHOLDER_+""]),c=a.getField("TEXT")?Blockly.Ti.quote_(a.getFieldValue("TEXT")):Blockly.Ti.valueToCode(a,"TEXT",Blockly.Ti.ORDER_NONE)||"",b=b+" "+c+"";"NUMBER"==a.getFieldValue("TYPE")&&(b=""+b+"");
	return[b,Blockly.Ti.ORDER_FUNCTION_CALL]};
Blockly.Ti.text_prompt=Blockly.Ti.text_prompt_ext;

Blockly.Ti.variables={};
Blockly.Ti.variables_get=function(a){return[Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Ti.ORDER_ATOMIC]};
Blockly.Ti.variables_set=function(a){var b=Blockly.Ti.valueToCode(a,"VALUE",Blockly.Ti.ORDER_NONE)||"0";return b+"->"+Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"\n"};
Blockly.Ti.variables_saisir=function(a){return "Prompt "+Blockly.Ti.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"\n"};

