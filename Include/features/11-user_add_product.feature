@useraddproduct
Feature: Add Product on Secondhand Application

Background:
  Given Seller already login

Scenario Outline: Seller wants to add a product on Secondhand Application
  When Seller clicks +Jual button to add a product
  And the application displays required fields for adding a new product
  And Seller inputs product details in the required fields:
  
  	| Field         | Value          |
    | Nama Produk   | <Name>         |
    | Harga Produk  | <Price>        |
    | Lokasi        | <Location>     |
    | Deskripsi     | <Description>  |
    
  And Seller selects a category associated with the product <Name>
  And Seller uploads an image associated with the product <Name>
  And Seller clicks the button of <Action>
  Then the product is <Outcome>
  
  Examples:
  | case_id | Name               | Price  | Location | Description             | Action                     | Outcome                |
  | T021    | Gang4_Tas Laptop   | 300000 | Bandung  | A practical laptop bag  | Terbitkan                  | published successfully |