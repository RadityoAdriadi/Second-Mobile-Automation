package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_search_and_offer {

	//search product
	@Given("user launched the App")
	public void user_lauched_the_App() {
		Mobile.startApplication('Application/secondhand-24082023.apk', true)
	}

	@When("user (.*) in (.*) on Homepage")
	public void user_do_in_place_on_Homepage(String action, place) {
		if(action == "input valid keyword" && place == "Search box") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 10)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_input_keyword'), 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_input_keyword'), 'Gang4_Tas Laptop', 0)

		} else if(action == "tap Category" && place == "Telusuri Kategori section") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_txt_Telusuri_Kategori'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_txt_Telusuri_Kategori'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_tap_btn_Category'), 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_tap_btn_Category'), 0)

		} else if(action == "input wrong keyword" && place == "Search box") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 10)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_input_keyword'), 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_input_keyword'), 'Sumsang Galaxy Z-100', 0)

		} else if(action == "input empty keyword" && place == "Search box") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_tap_search_box'), 10)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_input_keyword'), 0)
		}
	}

	@Then("user can see search result with (.*) (.*)")
	public void user_can_see_search_result_with(String result, result_place) {
		if (result=="valid keyword product" && result_place =="below the Search box") {

			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_list'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_name'), 0)
			Mobile.verifyElementText(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_name'), 'Gang4_Tas Laptop')
		} else if(result=="same category product" && result_place =="on Homepage") {

			Mobile.verifyElementText(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_txt_product_category'), 'Elektronik')
		} else if(result=="empty list" && result_place =="below the Search box") {

			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_list'), 0)
			Mobile.verifyElementNotExist(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_name'), 0)
		} else if(result=="no change" && result_place =="below the Search box") {

			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_txt_yuk_cari_produk'), 0)
		}
	}

	//offer product

	@Given("Buyer visit Homepage and search product")
	public void Buyer_visit_homepage_and_search_product() {

		Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_tap_btn_Beranda'), 0)
		user_do_in_place_on_Homepage("input valid keyword", "Search box")

	}

	@When("Buyer tap product and tap Saya Tertarik dan Ingin Nego button")
	public void Buyer_tap_product_and_Saya_tertarik_button() {

		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_product'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_homepage/search_product_section/user_see_search_result_product'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/product_detail/product_detail_image'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/product_detail/product_detail_name'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/product_detail/product_detail_price'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/product_detail/product_detail_seller'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/product_detail/user_tap_btn_Saya_Tertarik'), 0)
		Mobile.tap(findTestObject('Object Repository/user_offer_product/product_detail/user_tap_btn_Saya_Tertarik'), 0)

	}

	@When("Buyer input (.*) number in Price box and tap Kirim button")
	public void Buyer_input_price_and_tap_Kirim_button(String number) {
		if (number=="more than 10 digits") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_offer_product/offer_box/offer_box_title'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/offer_box_title'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/user_tap_btn_Kirim'), 0)
			Mobile.tap(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), 0)
			Mobile.setText(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), '50000000000', 0)
			Mobile.pressBack()
			Mobile.tap(findTestObject('Object Repository/user_offer_product/offer_box/user_tap_btn_Kirim'), 0)

		} else if (number=="1-10 digits") {

			Mobile.waitForElementPresent(findTestObject('Object Repository/user_offer_product/offer_box/offer_box_title'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/offer_box_title'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/offer_box/user_tap_btn_Kirim'), 0)
			Mobile.tap(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), 0)
			Mobile.setText(findTestObject('Object Repository/user_offer_product/offer_box/user_input_price'), '5000000', 0)
			Mobile.pressBack()
			Mobile.tap(findTestObject('Object Repository/user_offer_product/offer_box/user_tap_btn_Kirim'), 0)

		}
	}

	@Then("Buyer (.*) offer the product and Saya Tertarik button (.*)")
	public void Buyer_offer_and_the_product_button(String status, change) {
		if (status=="unsuccessfully" && change=="does not change") {

			Mobile.verifyElementText(findTestObject('Object Repository/user_offer_product/product_detail/user_tap_btn_Saya_Tertarik'), 'Saya Tertarik dan Ingin Nego')

		} else if (status=="successfully" && change=="change to Menunggu Respon Penjual") {

			Mobile.verifyElementVisible(findTestObject('Object Repository/user_offer_product/popup_offering_success'), 0)
			Mobile.verifyElementText(findTestObject('Object Repository/user_offer_product/product_detail/user_tap_btn_Saya_Tertarik'), 'Menunggu respon penjual')

		}
	}

}
