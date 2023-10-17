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
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_edit_product {

	@When("Seller clicks the product list menu")
	public void Seller_clicks_productList_menu() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_akun_saya_page/user_click_daftar_jual_saya'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_akun_saya_page/user_click_daftar_jual_saya'), 0)
	}

	@When("the product list menu page is displayed")
	public void product_list_menu_page_displayed () {
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/daftarJualSaya_element'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
	}

	@When("Seller clicks on the product they want to manage")
	public void Seller_clicks_productToEdit() {
		Mobile.tap(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
	}

	@When("the application displays required fields for editing the product")
	public void app_displays_required_fields () {
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_productname'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_price'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_category'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_location'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_description'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_image'), 0)
	}

	@When("Seller modifies the product (.+) to (.+)")
	public void Seller_modifies_productDetails(String modificationType, newValue) {
		if (modificationType == "Description") {
			Mobile.setText(findTestObject('Object Repository/user_edit_product/user_edit_description'), newValue, 0)
			Mobile.delay(3)
			Mobile.tap(findTestObject('Object Repository/user_edit_product/user_click_perbarui_produk'), 0)
		}
		else if (modificationType == "Price") {
			Mobile.setText(findTestObject('Object Repository/user_edit_product/user_edit_price'), newValue, 0)
		}
	}

	@Then("the product should be (.+)")
	public void then_the_outcome(String Outcome) {
		if (Outcome == "edited successfully") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/daftarJualSaya_element'), 0)
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/daftarJualSaya_element'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
			Mobile.delay(3)
		}
		else if (Outcome == "not edited") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_edit_price'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_product/user_click_perbarui_produk'), 0)
		}

		Mobile.closeApplication()
	}
}