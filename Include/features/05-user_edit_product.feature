Feature: Edit Product on Secondhand Application

Background:
    Given Seller already login
    
Scenario Outline: Seller wants to edit an existing product
		When Seller clicks the product list menu
		And the product list menu page is displayed
    And Seller clicks on the product they want to manage
  	And the application displays required fields for editing the product
  	And Seller modifies the product <modificationType> to <newValue>
    Then the product should be <Outcome>

    Examples:
    | case_id | modificationType | newValue      | Outcome             |
    | T024    | Description	     | Tas kantor. 	 | edited successfully |
    | T025    | Price            | 345000 ab     | not edited          |