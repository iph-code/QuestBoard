# QuestBoard Data Model

All Sheets live in the “[QuestBoard](https://docs.google.com/spreadsheets/d/1g3b1zb9tZylQTBXHLt6T4OGy4gcD0iOxmd6igGKUHjo/edit?usp=sharing)” Google Sheet

## Games
| Column       | Type        | Notes                         |
|--------------|-------------|-------------------------------|
| Game ID      | AutoNumber  | Unique identifier             |
| Title        | Text        | Game title                    |
| DateTime     | DateTime    | Scheduled date & time         |
| Description  | Text        | Optional notes                |
| DM Name      | Text        | References DMs tab            |

## Players
| Column    | Type       | Notes                   |
|-----------|------------|-------------------------|
| Player ID | AutoNumber | Unique identifier       |
| Name      | Text       | Player’s full name      |
| Email     | Text       | For reminders           |

## Characters
| Column      | Type    | Notes                         |
|-------------|---------|-------------------------------|
| Character ID| Number  | Unique                        |
| Name        | Text    | Character name                |
| Player ID   | Number  | FK → Players.Player ID        |
| Stats       | Text    | JSON blob for stats (v1)      |

## SignUps
| Column      | Type       | Notes                       |
|-------------|------------|-----------------------------|
| SignUp ID   | AutoNumber | Unique                      |
| Game ID     | Number     | FK → Games.Game ID          |
| Character ID| Number     | FK → Characters.Character ID|

## DMs
| Column  | Type       | Notes                   |
|---------|------------|-------------------------|
| DM ID   | AutoNumber | Unique                  |
| Name    | Text       | GM’s display name       |
| Email   | Text       | For notifications       |
