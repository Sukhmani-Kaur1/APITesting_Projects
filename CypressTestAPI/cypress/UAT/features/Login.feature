Feature: To validate OrangeHRM
    Background: OrangeHRM
        Given open the browser and navigate to login page
    @PostiveTesting
    Scenario Outline: Login with valid data
        When Enter the Name <name>
        And Enter the password <password>
        And Click on Login
        Then Login should be Successfull
        # use hash for commenting
        Examples:
            | name  | password |
            | Admin | admin123 |
            | Admin | admin123 |
    @NegetiveTesting
    Scenario: Login with Invalid Data
        When Enter the Name admin
        And Enter the Password admin526
        And Click on Login
        Then displayed Invalid Credentials
