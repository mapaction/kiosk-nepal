// Author: MapAction/Creator: MappetizerCore 12.0.3 by uismedia (http://www.uismedia.de); 21/05/2015 17:27:14
var mv_Query = null;
try {
dojo.require("dijit.TitlePane");
dojo.require("dijit.form.TextBox");
dojo.require("dijit.form.Textarea");
dojo.require("dojo.parser");
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");
dojo.require("dijit.layout.TabContainer");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.Select");
dojo.require("dijit.Toolbar");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dijit.form.FilteringSelect");
dojo.require("dijit.form.ComboBox");
dojo.require("dijit.form.CheckBox");
} catch (e) {
  if (e.number == -2146827850) {
    aText = "This browser does not allow local usage of html5/ajax solutions. Use a web server instead.";
    try {
      mv_alert(aText);
    } catch (e) {
      alert(aText);
    }
  }
}
// our fancy preloader-hider-function:
var hideLoader = function(){
  dojo.fadeOut({
    node:"MVpreloader",
    duration:1500,
    onEnd: function(){
      dojo.style("MVpreloader", "display", "none");
    }
  }).play();
}

dojo.addOnLoad(function() {
  //Do not delete or change this function
  if (!dojo.isFF) {
    var aText;
    if (mv_localUsage()) {
      if (dojo.isChrome) {
          aText = "Chrome does not allow local usage of html5/ajax solutions. Use a web server instead or start Chrome with the command line switch --allow-file-access-from-files.";
      } else if (dojo.isIE < 9) {
          aText = "Microsoft support for your InternetExplorer has ended. If you haven't already, consider installing and using a modern browser to get the best of this application";
      } else if (mv_isIE()) {
          aText = "This browser does not allow local usage of html5/ajax solutions. Use a web server instead.";
      }
    }
    if (aText) {
      try {
        mv_alert(aText);
      } catch (e) {
        alert(aText);
      }
    }
  }
  var leg;
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth1Doc","96px","113px","embfiles/legendth1.svg");
  dojo.byId("th1Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth2Doc","102px","18px","embfiles/legendth2.svg");
  dojo.byId("th2Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth3Doc","253px","50px","embfiles/legendth3.svg");
  dojo.byId("th3Legend").appendChild(leg);

  mv_mobileHandleWidgets("Map","MVtoolsContainer");
  if (dojo.byId("MVoverview") != null) {
    var over = mv_embedSVGNode(dojo.doc,"MVoverviewDoc","150px","75px","embfiles/overview.svg");
    dojo.byId("MVoverview").appendChild(over);
    var overFrame = dojo.byId("MVoverviewFrame");
    overFrame.setAttribute("style","width:auto;height:auto;");
  }

  var map = mv_embedSVGNode(dojo.doc,"MVmapDoc","970px","500px","embfiles/map.svg");
  dojo.byId("MVmap").appendChild(map);

  // Add functions to toolbar
  dojo.connect(dojo.byId("MVtoolbar.zoomin"),"onclick",mv_zoomInTool);
  dojo.connect(dojo.byId("MVtoolbar.zoomout"),"onclick",mv_zoomOutTool);
  dojo.connect(dojo.byId("MVtoolbar.fullextent"),"onclick",mv_fullExtent);
  dojo.connect(dojo.byId("MVtoolbar.fullscreen"),"onclick",mv_fullScreen);
  dojo.connect(dojo.byId("MVtoolbar.previousextent"),"onclick",mv_zoomPreviousExtentTool);
  dojo.connect(dojo.byId("MVtoolbar.nextextent"),"onclick",mv_zoomNextExtentTool);
  dojo.connect(dojo.byId("MVtoolbar.query"),"onclick",mv_queryTool);
  dojo.connect(dojo.byId("MVtoolbar.print"),"onclick",mv_print);
  dojo.connect(dojo.byId("MVtoolbar.legend"),"onclick",mv_showLegendInFP);
  dojo.connect(dojo.byId("body"),"onresize",mv_resizeMap);
  mv_watchSplitter(dijit.byId("MVborderContainer"));

  mv_checkLoaded();
  if (mv_isIE() && mv_localUsage()) {
    _mv_setIELocalStore();
  }
});

function mv_DocSettings() {
  //Do not delete or change this function;
  mv_Doc.userSettings("white","#F7F6F6","orange","yellow","#F7F6F6",true,true);
  mv_Doc.Texts["IESupport"] = "";
  mv_Doc.Texts["Flicker"] = "Highlight object";
  mv_Doc.Texts["Close"] = "Clear Selection";
  mv_Doc.Texts["Hyperlink"] = "More information";
  mv_Doc.Texts["QueryNoRec"] = "No records selected.";
  mv_Doc.Texts["ExportExcel"] = "Export to Excel";
  mv_Doc.Texts["QueryRec1"] = " of ";
  mv_Doc.Texts["QueryRec2"] = " records selected:";
  mv_Doc.Texts["QueryRec3"] = "Record";
  mv_Doc.Texts["QueryHead"] = "Query Result";
  mv_Doc.Texts["QueryHelpTable"] = "Note: Move cursor over the rows to highlight the objects on the map.";
  mv_Doc.Texts["QueryStatus1"] = "Table will be load, please wait ...";
  mv_Doc.Texts["QueryStatus2"] = "Table loaded.";
  mv_Doc.Texts["RecNo"] = "No.";
  mv_Doc.Texts["QueryBack"] = "Back to query builder";
  mv_Doc.Texts["ZoomTo"] = "Zoom to object";
  mv_Doc.Texts["Print"] = "Print";
  mv_Doc.Texts["Identify"] = "Object-Information";
  mv_Doc.CheckStatus = "w38uMA6";
}

function mv_MapSettings() {
  //Do not delete or change this function;
  //District Headquarters
  var l = new MV.Layer("th0",{TxtIds:"txt0"});

  //VDCs with Activity
  var l = new MV.Layer("th1",{Layertype:"TileLayer"});

  new MV.SVGTileRules({X:0,Y:0,Width:9994.516,Height:5031.484,XTilesNum:7,YTilesNum:4,Ext:"svg"},"th1",1427.788,3);

  //Other VDCs
  var l = new MV.Layer("th2",{Layertype:"TileLayer",TxtIds:"txt0"});

  new MV.SVGTileRules({X:0,Y:0,Width:9994.516,Height:5031.484,XTilesNum:4,YTilesNum:3,Ext:"svg"},"th2",2498.629,2);

  //Districts Affected
  var l = new MV.Layer("th3",{TxtIds:"txt0"});

  //Districts Affected selection
  var l = new MV.Layer("th4",{InLegend:false});

  mv_Map.userSettings(98260.849,37370.026,5.16795709529406,1227.36385945112,3,true,377284635,"");
  mv_Map.Scalebar = false;
}

function mv_initializeLegend() {
  //Do not delete or change this function;
}

function mv_ScalebarSettings() {
  //Do not delete or change this function;
}

function mv_initializeSettings() {
  //Do not delete or change this function;
  mv_declareClassIdentifyObject();
  mv_declareClassIdentifyMW();
  mv_declareClassIdentifyTP();

  mv_declareClassQueryBuilder();
  mv_Query = new MV.QueryBuilder();
  mv_Query.Doc = document; 
  mv_Query.layerSelect("th1");
  mv_Query.txtHelp = "To create an expression, click the field you want to use,\nclick an operator, then click the value.\nYou can also type directly into the query.\nField names have to be enclosed in square brackets.\n\n[NumericField] = 123.45\n\nStrings must always be enclosed within double quotes in queries.\n\n[TextField] = \"This is a text\"\n\nUse the LIKE operator with wildcards (%)\nto build a partial string search.\n\"%\" indicates any number of characters.\n\n[TextField] like \"This is%\"\n\nExpressions can be combined together with the AND and OR operators.\n\n[NumericField] >= 123.45 or [TextField] = \"This is a text\"";

  mv_Doc.Toolbars = new MV.List();
  mv_declareClassToolbar();
  mv_createToolbar();
}

function mv_initializeSettings2() {
 //Do not delete or change this function;
  hideLoader();
}


function mv_userInit() {
//This function is for your own scripts, it will be called on loading, do not delete it
//  mv_alert("function mv_userInit()");
}

function mv_userMVDocToolbar(objButton) {
//This function is for your own toolbar buttons, do not delete it
//  switch(objButton.id) {
//      case "MVtoolbar.mybutton":
//          objButton.Function = "testFunc('hier',2)";
//          objButton.State = 1;  //this button is a radio button
//          break;
//  }
}

