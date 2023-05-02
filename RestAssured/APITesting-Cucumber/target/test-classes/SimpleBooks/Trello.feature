Feature: Testing Board Creation and Deletion of Trello

Scenario: Creating a Board in Trello
Given Create Board
When verify Board
Then get Board id

Scenario: Updating Boardname