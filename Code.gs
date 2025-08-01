/**
 * Entry point for QuestBoard web app.
 */
function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('html/index')
    .setTitle('QuestBoard');
}

/**
 * Utility to include HTML files.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
