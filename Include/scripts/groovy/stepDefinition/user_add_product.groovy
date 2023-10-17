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
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import java.util.Map
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver

import com.kms.katalon.core.util.KeywordUtil
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_add_product {
	@When("Seller clicks +Jual button to add a product")
	public void Seller_clicks_jual_btn() {
		Mobile.tap(findTestObject('Object Repository/user_visit_homepage/click_button_jual'), 0)
	}

	@When("the application displays required fields for adding a new product")
	public void the_application_displays_required_fields () {
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_input_productname'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_input_price'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_select_category'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_input_location'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_input_description'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/user_click_btn_image'), 0)
	}

	@When("Seller inputs product details in the required fields:")
	public void Seller_inputs_product_details(Map<String, String> productDetails) {
		String productName = productDetails.get("Nama Produk");
		String productPrice = productDetails.get("Harga Produk");
		String productLocation = productDetails.get("Lokasi");
		String productDescription = productDetails.get("Deskripsi");

		Mobile.setText(findTestObject('Object Repository/user_add_product/user_input_productname'), productName, 0)
		Mobile.setText(findTestObject('Object Repository/user_add_product/user_input_price'), productPrice, 0)
		Mobile.setText(findTestObject('Object Repository/user_add_product/user_input_location'), productLocation, 0)
		Mobile.setText(findTestObject('Object Repository/user_add_product/user_input_description'), productDescription, 0)
	}

	@When("Seller selects a category associated with the product (.+)")
	public void Seller_selects_category(String Name) {
		if (Name == "Gang4_Tas Laptop") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_select_category'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/kategori_komputerdanAksesoris'), 0)
		} else if (Name == "Samsung Phone Case") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_select_category'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/kategori_hpdanAksesoris'), 0)
		} else if (Name == "Black Leather Bag") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_select_category'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/kategori_tas_pria'), 0)
		}
	}

	@When("Seller uploads an image associated with the product (.+)")
	public void Seller_uploads_image(String Name) {
		if (Name == "Gang4_Tas Laptop") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_btn_image'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/button_triple_line'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_sd_emulator'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_Talitha'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/gambar_tas_laptop'), 0)
		} else if (Name == "Samsung Phone Case") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_btn_image'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/button_triple_line'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_sd_emulator'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_Talitha'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/gambar_samsung_case'), 0)
		} else if (Name == "Black Leather Bag") {
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_btn_image'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/button_triple_line'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_sd_emulator'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/folder_Talitha'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/gambar_tas_pria'), 0)
		}
	}

	@When("Seller clicks the button of (.+)")
	public void Seller_clicks_button(String Action) {
		if (Action == "Terbitkan") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_add_product/user_click_terbitkan'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_terbitkan'), 0)
		} else if (Action == "Preview") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_add_product/user_click_preview'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_preview'), 0)
		} else if (Action == "Terbitkan to trigger error") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_add_product/user_click_terbitkan'), 0)
			Mobile.tap(findTestObject('Object Repository/user_add_product/user_click_terbitkan'), 0)
		}
	}

	@Then("the product is (.+)")
	public void resultIsDisplayed(String Outcome) {
		if (Outcome == "published successfully") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/daftarJualSaya_element'), 0)
			Mobile.delay(3)
		} else if (Outcome == "previewed successfully") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_add_product/preview page/user_click_previous_page'), 0)
			Mobile.delay(3)
		} else if (Outcome == "not added") {
			Mobile.getText(findTestObject('Object Repository/user_add_product/warning_message_deskripsi'), 0)
			Mobile.delay(3)
		}

		Mobile.closeApplication()
	}
}