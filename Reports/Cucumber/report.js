$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/01-User_Register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.step({
  "name": "User fill nama and \u003ccondition\u003e after that click button Daftar",
  "keyword": "When "
});
formatter.step({
  "name": "User will \u003cresults\u003e Register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "condition",
        "results"
      ]
    },
    {
      "cells": [
        "T003",
        "invalid credential",
        "not success"
      ]
    },
    {
      "cells": [
        "T004",
        "valid credential",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Register.User_already_on_Register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill nama and invalid credential after that click button Daftar",
  "keyword": "When "
});
formatter.match({
  "location": "User_Register.User_fill_nama_and_after_that_click_button_Daftar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will not success Register",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Register.User_will_Register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want Register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already on Register page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Register.User_already_on_Register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill nama and valid credential after that click button Daftar",
  "keyword": "When "
});
formatter.match({
  "location": "User_Register.User_fill_nama_and_after_that_click_button_Daftar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will success Register",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Register.User_will_Register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/02-User_Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "\u003crole\u003e input \u003ccondition\u003e and click button Masuk",
  "keyword": "When "
});
formatter.step({
  "name": "\u003crole\u003e will \u003cresult\u003e Login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Case_ID",
        "role",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "T006",
        "buyer",
        "invalid credential",
        "not success"
      ]
    },
    {
      "cells": [
        "T000",
        "seller",
        "valid credential",
        "success"
      ]
    },
    {
      "cells": [
        "T005",
        "buyer",
        "valid credential",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer input invalid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login.input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer will not success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login.will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login.input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login.will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User want login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.User_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer input valid credential and click button Masuk",
  "keyword": "When "
});
formatter.match({
  "location": "User_Login.input_and_click_button_Masuk(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyer will success Login",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Login.will_Login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/03-user_edit_profile.feature");
formatter.feature({
  "name": "edit profile feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.step({
  "name": "Seller edit \u003cfield\u003e field with \u003ccondition\u003e and user \u003caction\u003e button simpan",
  "keyword": "And "
});
formatter.step({
  "name": "Seller \u003cresult\u003e edit profile and Seller see \u003cnotif\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "field",
        "condition",
        "action",
        "result",
        "notif"
      ]
    },
    {
      "cells": [
        "T007",
        "photo",
        "valid value",
        "not tap",
        "successfully",
        "message popup Profil berhasil diperbarui"
      ]
    },
    {
      "cells": [
        "T008",
        "nama",
        "valid value",
        "tap",
        "successfully",
        "message popup Profil berhasil diperbarui"
      ]
    },
    {
      "cells": [
        "T009",
        "nomor hp",
        "valid value",
        "tap",
        "successfully",
        "message popup Profil berhasil diperbarui"
      ]
    },
    {
      "cells": [
        "T010",
        "kota",
        "valid value",
        "tap",
        "successfully",
        "message popup Profil berhasil diperbarui"
      ]
    },
    {
      "cells": [
        "T011",
        "alamat",
        "valid value",
        "tap",
        "successfully",
        "message popup Profil berhasil diperbarui"
      ]
    },
    {
      "cells": [
        "T012",
        "photo",
        "photo size more than 1mb",
        "not tap",
        "not successfully",
        "alert popup Request Entity Too Large"
      ]
    },
    {
      "cells": [
        "T013",
        "nama",
        "empty value",
        "not tap",
        "not successfully",
        "alert Wajib diisi."
      ]
    },
    {
      "cells": [
        "TA01",
        "nomor hp",
        "empty value",
        "not tap",
        "not successfully",
        "alert Wajib diisi."
      ]
    },
    {
      "cells": [
        "TA02",
        "kota",
        "empty value",
        "not tap",
        "not successfully",
        "alert Wajib diisi."
      ]
    },
    {
      "cells": [
        "TA03",
        "alamat",
        "empty value",
        "not tap",
        "not successfully",
        "alert Wajib diisi."
      ]
    }
  ]
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T007 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit photo field with valid value and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully edit profile and Seller see message popup Profil berhasil diperbarui",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T008 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit nama field with valid value and user tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully edit profile and Seller see message popup Profil berhasil diperbarui",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T009 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit nomor hp field with valid value and user tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully edit profile and Seller see message popup Profil berhasil diperbarui",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T010 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit kota field with valid value and user tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully edit profile and Seller see message popup Profil berhasil diperbarui",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T011 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit alamat field with valid value and user tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully edit profile and Seller see message popup Profil berhasil diperbarui",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T012 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit photo field with photo size more than 1mb and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully edit profile and Seller see alert popup Request Entity Too Large",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T013 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit nama field with empty value and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully edit profile and Seller see alert Wajib diisi.",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TA01 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit nomor hp field with empty value and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully edit profile and Seller see alert Wajib diisi.",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TA02 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit kota field with empty value and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully edit profile and Seller see alert Wajib diisi.",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TA03 Seller edit profile on edit profile page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofilefeature"
    }
  ]
});
formatter.step({
  "name": "Seller in edit profile page",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_profile.Seller_in_edit_profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller edit alamat field with empty value and user not tap button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_field_with_and_user_button_simpan(String,Object,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully edit profile and Seller see alert Wajib diisi.",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_profile.Seller_edit_profile_and_Seller(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/04-user_add_product.feature");
formatter.feature({
  "name": "Add Product on Secondhand Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "\u003cName\u003e"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "\u003cPrice\u003e"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "\u003cLocation\u003e"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "\u003cDescription\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Seller selects a category associated with the product \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Seller uploads an image associated with the product \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Seller clicks the button of \u003cAction\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the product is \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "Name",
        "Price",
        "Location",
        "Description",
        "Action",
        "Outcome"
      ]
    },
    {
      "cells": [
        "T021",
        "Gang4_Tas Laptop",
        "300000",
        "Bandung",
        "A practical laptop bag",
        "Terbitkan",
        "published successfully"
      ]
    },
    {
      "cells": [
        "T022",
        "Samsung Phone Case",
        "50500",
        "Bandung",
        "A strong case",
        "Preview",
        "previewed successfully"
      ]
    },
    {
      "cells": [
        "T023",
        "Black Leather Bag",
        "150000",
        "Bandung",
        "",
        "Terbitkan to trigger error",
        "not added"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_application_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Gang4_Tas Laptop"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "300000"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "Bandung"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "A practical laptop bag"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller selects a category associated with the product Gang4_Tas Laptop",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_selects_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller uploads an image associated with the product Gang4_Tas Laptop",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_uploads_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks the button of Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is published successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_application_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Samsung Phone Case"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "50500"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "Bandung"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "A strong case"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller selects a category associated with the product Samsung Phone Case",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_selects_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller uploads an image associated with the product Samsung Phone Case",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_uploads_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks the button of Preview",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is previewed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_application_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Black Leather Bag"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "150000"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "Bandung"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        ""
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller selects a category associated with the product Black Leather Bag",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_selects_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller uploads an image associated with the product Black Leather Bag",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_uploads_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks the button of Terbitkan to trigger error",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is not added",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/05-user_edit_product.feature");
formatter.feature({
  "name": "Edit Product on Secondhand Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Seller wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Seller clicks on the product they want to manage",
  "keyword": "And "
});
formatter.step({
  "name": "the application displays required fields for editing the product",
  "keyword": "And "
});
formatter.step({
  "name": "Seller modifies the product \u003cmodificationType\u003e to \u003cnewValue\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the product should be \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "modificationType",
        "newValue",
        "Outcome"
      ]
    },
    {
      "cells": [
        "T024",
        "Description",
        "Tas kantor.",
        "edited successfully"
      ]
    },
    {
      "cells": [
        "T025",
        "Price",
        "345000 ab",
        "not edited"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks on the product they want to manage",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productToEdit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for editing the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.app_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller modifies the product Description to Tas kantor.",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.Seller_modifies_productDetails(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product should be edited successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_product.then_the_outcome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to edit an existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks on the product they want to manage",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productToEdit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for editing the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.app_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller modifies the product Price to 345000 ab",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.Seller_modifies_productDetails(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product should be not edited",
  "keyword": "Then "
});
formatter.match({
  "location": "user_edit_product.then_the_outcome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/06-user_search_product.feature");
formatter.feature({
  "name": "Search Product",
  "description": "    To ensure that User can or can not search the product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e user see the search result",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched the App",
  "keyword": "Given "
});
formatter.step({
  "name": "user \u003caction\u003e in \u003cplace\u003e on Homepage",
  "keyword": "When "
});
formatter.step({
  "name": "user can see search result with \u003cresult\u003e \u003cresult_place\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "action",
        "place",
        "result",
        "result_place"
      ]
    },
    {
      "cells": [
        "T014",
        "input valid keyword",
        "Search box",
        "valid keyword product",
        "below the Search box"
      ]
    },
    {
      "cells": [
        "T016",
        "tap Category",
        "Telusuri Kategori section",
        "same category product",
        "on Homepage"
      ]
    },
    {
      "cells": [
        "T017",
        "input wrong keyword",
        "Search box",
        "empty list",
        "below the Search box"
      ]
    },
    {
      "cells": [
        "T018",
        "input empty keyword",
        "Search box",
        "no change",
        "below the Search box"
      ]
    }
  ]
});
formatter.scenario({
  "name": "T014 user see the search result",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched the App",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_lauched_the_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid keyword in Search box on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_do_in_place_on_Homepage(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see search result with valid keyword product below the Search box",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_search_result_with(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T016 user see the search result",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched the App",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_lauched_the_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap Category in Telusuri Kategori section on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_do_in_place_on_Homepage(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see search result with same category product on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_search_result_with(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T017 user see the search result",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched the App",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_lauched_the_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input wrong keyword in Search box on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_do_in_place_on_Homepage(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see search result with empty list below the Search box",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_search_result_with(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T018 user see the search result",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched the App",
  "keyword": "Given "
});
formatter.match({
  "location": "user_search_and_offer.user_lauched_the_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input empty keyword in Search box on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.user_do_in_place_on_Homepage(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see search result with no change below the Search box",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.user_can_see_search_result_with(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/07-user_offer_product.feature");
formatter.feature({
  "name": "Offer Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@offerproduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Buyer \u003cstatus\u003e offer the product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.step({
  "name": "Buyer visit Homepage and search product",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer tap product and tap Saya Tertarik dan Ingin Nego button",
  "keyword": "When "
});
formatter.step({
  "name": "Buyer input \u003cnumber\u003e number in Price box and tap Kirim button",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer \u003cstatus\u003e offer the product and Saya Tertarik button \u003cchange\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "number",
        "status",
        "change"
      ]
    },
    {
      "cells": [
        "T021",
        "more than 10 digits",
        "unsuccessfully",
        "does not change"
      ]
    },
    {
      "cells": [
        "T019",
        "1-10 digits",
        "successfully",
        "change to Menunggu respon penjual"
      ]
    }
  ]
});
formatter.scenario({
  "name": "T021 Buyer unsuccessfully offer the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offerproduct"
    }
  ]
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Buyer_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer visit Homepage and search product",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_visit_homepage_and_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer tap product and tap Saya Tertarik dan Ingin Nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_tap_product_and_Saya_tertarik_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer input more than 10 digits number in Price box and tap Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_input_price_and_tap_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer unsuccessfully offer the product and Saya Tertarik button does not change",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_offer_and_the_product_button(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T019 Buyer successfully offer the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offerproduct"
    }
  ]
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Buyer_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer visit Homepage and search product",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_visit_homepage_and_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer tap product and tap Saya Tertarik dan Ingin Nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_tap_product_and_Saya_tertarik_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer input 1-10 digits number in Price box and tap Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_input_price_and_tap_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer successfully offer the product and Saya Tertarik button change to Menunggu respon penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_offer_and_the_product_button(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/08-user_open_notification.feature");
formatter.feature({
  "name": "Notification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Seller want to open notification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click bell icon",
  "keyword": "When "
});
formatter.match({
  "location": "user_open_notification.Seller_click_bell_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "notification will be pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "user_open_notification.notification_will_be_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/09-user_reject_offer.feature");
formatter.feature({
  "name": "User Reject Offer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@userrejectoffer"
    }
  ]
});
formatter.scenario({
  "name": "Seller want to reject offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@userrejectoffer"
    }
  ]
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click daftar jual saya",
  "keyword": "When "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_daftar_jual_saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click diminati",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click offer",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click tolak product",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller have rejected offering product",
  "keyword": "Then "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_have_offering_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/10-user_delete_product.feature");
formatter.feature({
  "name": "delete product feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deleteproductfeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e user delete existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Seller tap the trash button in the corner of the product",
  "keyword": "And "
});
formatter.step({
  "name": "Seller tap button \u003cname\u003e on popup hapus produk ini",
  "keyword": "And "
});
formatter.step({
  "name": "Seller \u003cresult\u003e delete product and Seller \u003caction\u003e popup message produk berhasil dihapus",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "name",
        "result",
        "action"
      ]
    },
    {
      "cells": [
        "T028",
        "hapus",
        "successfully",
        "see"
      ]
    }
  ]
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T028 user delete existing product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deleteproductfeature"
    }
  ]
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap the trash button in the corner of the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_the_trash_button_in_the_corner_of_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap button hapus on popup hapus produk ini",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_button_on_popup_hapus_produk_ini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully delete product and Seller see popup message produk berhasil dihapus",
  "keyword": "Then "
});
formatter.match({
  "location": "user_delete_product.Seller_delete_product_and_user_popup_message_produk_berhasil_dihapus(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/11-user_add_product.feature");
formatter.feature({
  "name": "Add Product on Secondhand Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "\u003cName\u003e"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "\u003cPrice\u003e"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "\u003cLocation\u003e"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "\u003cDescription\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "Seller selects a category associated with the product \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Seller uploads an image associated with the product \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Seller clicks the button of \u003cAction\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the product is \u003cOutcome\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "Name",
        "Price",
        "Location",
        "Description",
        "Action",
        "Outcome"
      ]
    },
    {
      "cells": [
        "T021",
        "Gang4_Tas Laptop",
        "300000",
        "Bandung",
        "A practical laptop bag",
        "Terbitkan",
        "published successfully"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller wants to add a product on Secondhand Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@useraddproduct"
    }
  ]
});
formatter.step({
  "name": "Seller clicks +Jual button to add a product",
  "keyword": "When "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_jual_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the application displays required fields for adding a new product",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.the_application_displays_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller inputs product details in the required fields:",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "Nama Produk",
        "Gang4_Tas Laptop"
      ]
    },
    {
      "cells": [
        "Harga Produk",
        "300000"
      ]
    },
    {
      "cells": [
        "Lokasi",
        "Bandung"
      ]
    },
    {
      "cells": [
        "Deskripsi",
        "A practical laptop bag"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_inputs_product_details(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller selects a category associated with the product Gang4_Tas Laptop",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_selects_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller uploads an image associated with the product Gang4_Tas Laptop",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_uploads_image(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller clicks the button of Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "user_add_product.Seller_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is published successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "user_add_product.resultIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/12-user_offer_product.feature");
formatter.feature({
  "name": "Offer Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@offerproduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e Buyer \u003cstatus\u003e offer the product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.step({
  "name": "Buyer visit Homepage and search product",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer tap product and tap Saya Tertarik dan Ingin Nego button",
  "keyword": "When "
});
formatter.step({
  "name": "Buyer input \u003cnumber\u003e number in Price box and tap Kirim button",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer \u003cstatus\u003e offer the product and Saya Tertarik button \u003cchange\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "number",
        "status",
        "change"
      ]
    },
    {
      "cells": [
        "T019",
        "1-10 digits",
        "successfully",
        "change to Menunggu respon penjual"
      ]
    }
  ]
});
formatter.scenario({
  "name": "T019 Buyer successfully offer the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@offerproduct"
    }
  ]
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Buyer_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer visit Homepage and search product",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_visit_homepage_and_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer tap product and tap Saya Tertarik dan Ingin Nego button",
  "keyword": "When "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_tap_product_and_Saya_tertarik_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer input 1-10 digits number in Price box and tap Kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_input_price_and_tap_Kirim_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer successfully offer the product and Saya Tertarik button change to Menunggu respon penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "user_search_and_offer.Buyer_offer_and_the_product_button(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/13-user_accept_offer.feature");
formatter.feature({
  "name": "User Accept Offer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@useracceptoffer"
    }
  ]
});
formatter.scenario({
  "name": "Seller want to accept offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@useracceptoffer"
    }
  ]
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click daftar jual saya",
  "keyword": "When "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_daftar_jual_saya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click diminati",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_diminati()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click offer",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller click terima product",
  "keyword": "And "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_click_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller have succesful offering product",
  "keyword": "Then "
});
formatter.match({
  "location": "user_want_to_response_offer.Seller_have_offering_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/14-user_delete_product.feature");
formatter.feature({
  "name": "delete product feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deleteproductfeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e user delete existing product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Seller tap the trash button in the corner of the product",
  "keyword": "And "
});
formatter.step({
  "name": "Seller tap button \u003cname\u003e on popup hapus produk ini",
  "keyword": "And "
});
formatter.step({
  "name": "Seller \u003cresult\u003e delete product and Seller \u003caction\u003e popup message produk berhasil dihapus",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "name",
        "result",
        "action"
      ]
    },
    {
      "cells": [
        "T027",
        "batalkan",
        "not successfully",
        "not see"
      ]
    },
    {
      "cells": [
        "T028",
        "hapus",
        "successfully",
        "see"
      ]
    }
  ]
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T027 user delete existing product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deleteproductfeature"
    }
  ]
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap the trash button in the corner of the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_the_trash_button_in_the_corner_of_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap button batalkan on popup hapus produk ini",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_button_on_popup_hapus_produk_ini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller not successfully delete product and Seller not see popup message produk berhasil dihapus",
  "keyword": "Then "
});
formatter.match({
  "location": "user_delete_product.Seller_delete_product_and_user_popup_message_produk_berhasil_dihapus(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Seller login with valid credential",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Seller already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Seller_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "T028 user delete existing product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deleteproductfeature"
    }
  ]
});
formatter.step({
  "name": "Seller clicks the product list menu",
  "keyword": "When "
});
formatter.match({
  "location": "user_edit_product.Seller_clicks_productList_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product list menu page is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "user_edit_product.product_list_menu_page_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap the trash button in the corner of the product",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_the_trash_button_in_the_corner_of_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller tap button hapus on popup hapus produk ini",
  "keyword": "And "
});
formatter.match({
  "location": "user_delete_product.Seller_tap_button_on_popup_hapus_produk_ini(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller successfully delete product and Seller see popup message produk berhasil dihapus",
  "keyword": "Then "
});
formatter.match({
  "location": "user_delete_product.Seller_delete_product_and_user_popup_message_produk_berhasil_dihapus(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/15-User_Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User wants to Logout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Buyer already login",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Login.Buyer_already_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer click button Keluar",
  "keyword": "When "
});
formatter.match({
  "location": "user_logout.Buyer_click_button_Keluar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer success to Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "user_logout.Buyer_success_to_Logout()"
});
formatter.result({
  "status": "passed"
});
});