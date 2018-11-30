function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu1Entries = [
    {name: "Send Email", functionName: "SendAutoEmail"},
  ];
  ss.addMenu("GGGSC AutoAdmin", menu1Entries);
}
