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
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver
import com.kms.katalon.core.util.KeywordUtil

public class user_delete_product {
	@When ("Seller tap the trash button in the corner of the product")
	public void Seller_tap_the_trash_button_in_the_corner_of_the_product() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/button_trash_product'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/button_trash_product'), 0)
	}

	@When ("Seller tap button (.*) on popup hapus produk ini")
	public void Seller_tap_button_on_popup_hapus_produk_ini(String name) {
		if (name=="hapus") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_delete_product/button_hapus_product'), 0)
			Mobile.tap(findTestObject('Object Repository/user_delete_product/button_hapus_product'), 0)
		}

		else if (name=="batalkan") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_delete_product/button_batalkan_hapus_product'), 0)
			Mobile.tap(findTestObject('Object Repository/user_delete_product/button_batalkan_hapus_product'), 0)
		}
	}

	@Then ("Seller (.*) delete product and Seller (.*) popup message produk berhasil dihapus")
	public void Seller_delete_product_and_user_popup_message_produk_berhasil_dihapus(String result, action) {
		if (result=="not successfully" && action=="not see") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
			Mobile.closeApplication()
		}

		else if (result=="successfullly" && action=="see") {
			AppiumDriver<?> driver = MobileDriverFactory.getDriver()
			driver.findElementByXPath("//android.widget.Toast[@text='Produk berhasil dihapus']")
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_daftar_jual_saya_page/click_productToEdit'), 0)
		}
	}
}
