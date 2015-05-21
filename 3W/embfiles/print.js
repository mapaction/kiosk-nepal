// Author: MapAction/Creator: MappetizerCore 12.0.3 by uismedia (http://www.uismedia.de); 21/05/2015 17:27:14
var mv_Query = null;
dojo.require("dijit.TitlePane");
dojo.addOnLoad(function() {
  //Do not delete or change this function
  var leg;
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth1Doc","96px","113px","embfiles/legendth1.svg");
  dojo.byId("th1Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth2Doc","102px","18px","embfiles/legendth2.svg");
  dojo.byId("th2Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth3Doc","253px","50px","embfiles/legendth3.svg");
  dojo.byId("th3Legend").appendChild(leg);

  if (dojo.byId("MVoverview") != null) {
    var over = mv_embedSVGNode(dojo.doc,"MVoverviewDoc","150px","75px","embfiles/overview.svg");
    dojo.byId("MVoverview").appendChild(over);
  }

  var map = mv_embedSVGNode(dojo.doc,"MVmapDoc","970px","500px","embfiles/map.svg");
  dojo.byId("MVmap").appendChild(map);

  mv_checkLoaded();
  if (mv_isIE() && mv_localUsage()) {
    _mv_setIELocalStore();
  }
});

function mv_DocSettings() {
  //Do not delete or change this function;
  mv_Doc.userSettings("white","#F7F6F6","orange","yellow","#F7F6F6",false,true);
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
  mv_Doc.PrintStatus = true;
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

}

function mv_initializeSettings2() {
 //Do not delete or change this function;
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

