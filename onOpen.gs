function onOpen() {
  
  DocumentApp.getUi()
      .createMenu('GGGSC AutoAdmin')
      .addItem('Send Email', 'Send Email')
      //.addSeparator()
      //.addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
          //.addItem('One Submenu Item', 'mySecondFunction')
          //.addItem('Another Submenu Item', 'myThirdFunction'))
      .addToUi();
  
}
