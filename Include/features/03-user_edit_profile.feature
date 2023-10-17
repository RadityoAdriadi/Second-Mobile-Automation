@editprofilefeature
Feature: edit profile feature

Background: Seller login with valid credential
		Given Seller already login
	
Scenario Outline: <case_id> Seller edit profile on edit profile page
  	When Seller in edit profile page
  	And Seller edit <field> field with <condition> and user <action> button simpan
  	Then Seller <result> edit profile and Seller see <notif>
  	Examples:
      | case_id   |  field    | condition   							| action		| result         		| notif																	   |
      | T007     	| photo     | valid value 							| not tap		| successfully			| message popup Profil berhasil diperbarui |
      | T008     	| nama      | valid value 							| tap				| successfully		  | message popup Profil berhasil diperbarui |
      | T009     	| nomor hp  | valid value 							| tap				| successfully      | message popup Profil berhasil diperbarui |
      | T010    	| kota    	| valid value 							| tap				| successfully      | message popup Profil berhasil diperbarui |
      | T011    	| alamat    | valid value 							| tap				| successfully      | message popup Profil berhasil diperbarui |
      | T012     	| photo     | photo size more than 1mb 	|	not tap		| not successfully  | alert popup Request Entity Too Large 	 	 |
      | T013     	| nama    	| empty value 							| not tap		| not successfully  | alert Wajib diisi. 										   |
      | TA01 	    | nomor hp  | empty value								| not tap 	| not successfully  | alert Wajib diisi. 											 |
      | TA02 	    | kota		  | empty value								| not tap 	| not successfully  | alert Wajib diisi.  										 |
     	| TA03 	    | alamat	  | empty value								| not tap 	| not successfully  | alert Wajib diisi.											 |