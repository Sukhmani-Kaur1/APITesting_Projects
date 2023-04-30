Feature: validate Login to fetch the accesstoken and order a book

Scenario: verify Login API
Given Login API
When Login Executes "/api-clients/" and provide accesstoken
Then successfully executed with status code 201
And verify accesstoken

Scenario: order a book
Given Login successfull with accesstoken
When order a book "/orders" and fetch orderId
Then verigy status code 201

