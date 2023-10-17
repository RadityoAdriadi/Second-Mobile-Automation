@userrejectoffer
Feature: User Reject Offer
 
  Scenario: Seller want to reject offer 
  	Given Seller already login
    When Seller click daftar jual saya 
    And Seller click diminati
    And Seller click offer
    And Seller click tolak product
    Then Seller have rejected offering product
