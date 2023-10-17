Feature: Login

  Scenario Outline: User want login
    Given User already in login page
    When <role> input <condition> and click button Masuk
    Then <role> will <result> Login

    Examples: 
      | Case_ID | role   | condition          | result       |
      | T006    | buyer  | invalid credential | not success  |
      | T000    | seller | valid credential   | success      |
      | T005    | buyer  | valid credential   | success      |