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

//import internal.GlobalVariable
import java.util.Map
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class user_want_to_response_offer {
	@When ("Seller click daftar jual saya")
	public void Seller_click_daftar_jual_saya() {
		Mobile.tap(findTestObject('Object Repository/user_response_offer/user_click_daftar_jual_saya'), 0)
	}

	@When ("Seller click diminati")
	public void Seller_click_diminati() {
		Mobile.tap(findTestObject('Object Repository/user_response_offer/user_click_diminati'), 0)
	}
	
	@When ("Seller click offer")
	public void Seller_click_offer() {
		Mobile.tap(findTestObject('Object Repository/user_response_offer/user_click_penawaran_produk'), 0)
	}
		
	@When("Seller click (.*) product")
	public void Seller_click_product(String condition) {
		if(condition == "terima") {
			Mobile.tap(findTestObject('Object Repository/user_response_offer/user_click_terima'), 0)
		}
		else if (condition == "tolak") {
			Mobile.tap(findTestObject('Object Repository/user_response_offer/user_click_tolak'), 0)
		}
	}

	@Then("Seller have (.*) offering product")
	public void Seller_have_offering_product(String result) {
		if(result == "succesful") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_response_offer/user_accepted_offer'), 0)
		}
		else if (result == "rejected") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/user_response_offer/user_rejected_offer'), 0)
		}
	}
}
