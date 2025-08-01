/**
 * Entry point for QuestBoard web app.
 */
function doGet(e) {
  return HtmlService
    .createHtmlOutput('Hello, QuestBoard!')
    .setTitle('QuestBoard');
}
