@deleteproductfeature
Feature: delete product feature

Background: Seller login with valid credential
		Given Seller already login
		
Scenario Outline: <case_id> user delete existing product
		When Seller clicks the product list menu
		And the product list menu page is displayed
		And Seller tap the trash button in the corner of the product
		And Seller tap button <name> on popup hapus produk ini
		Then Seller <result> delete product and Seller <action> popup message produk berhasil dihapus
		Examples:
      | case_id   | name   		| result  					| action  	|
      | T028     	| hapus     | successfully 			| see				|
      