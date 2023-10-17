@offerproduct
Feature: Offer Product

    #To ensure that user as buyer can or can not make an offer
		
    Scenario Outline: <case_id> Buyer <status> offer the product
		  Given Buyer already login
			And Buyer visit Homepage and search product
			When Buyer tap product and tap Saya Tertarik dan Ingin Nego button
			And Buyer input <number> number in Price box and tap Kirim button
			Then Buyer <status> offer the product and Saya Tertarik button <change>
			
            Examples:
            | case_id | number 							| status 		 		 | change														 |
            | T021    | more than 10 digits | unsuccessfully | does not change									 |
            | T019    | 1-10 digits 				| successfully	 | change to Menunggu respon penjual |
