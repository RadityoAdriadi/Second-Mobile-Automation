Feature: Search Product

    To ensure that User can or can not search the product
  
    Scenario Outline: <case_id> user see the search result
        Given user launched the App
        When user <action> in <place> on Homepage
        Then user can see search result with <result> <result_place>
        
	        Examples:
	            | case_id  | action	             | place	                   | result	        				| result_place	       |
	            | T014     | input valid keyword | Search box                | valid keyword product  | below the Search box |
	            | T016     | tap Category		     | Telusuri Kategori section | same category product	| on Homepage          |
	            | T017     | input wrong keyword | Search box								 | empty list		 					| below the Search box |
	            | T018     | input empty keyword | Search box								 | no change							| below the Search box |