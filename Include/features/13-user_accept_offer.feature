@useracceptoffer
Feature: User Accept Offer
 
  Scenario: Seller want to accept offer 
  	Given Seller already login
    When Seller click daftar jual saya 
    And Seller click diminati
    And Seller click offer
    And Seller click terima product
    Then Seller have succesful offering product
