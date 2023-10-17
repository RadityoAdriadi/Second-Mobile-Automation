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

import bsh.This

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver
import com.kms.katalon.core.util.KeywordUtil

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import groovy.transform.Undefined.CLASS

public class User_Login {
	@Given("User already in login page")
	public void User_already_in_login_page() {
		Mobile.startApplication('Application/secondhand-24082023.apk', true)
		Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_click_akun_menu'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_akun_menu/user_click_btn_masuk'), 0)
	}

	@When ("(.*) input (.*) and click button Masuk")
	public void input_and_click_button_Masuk(String role, condition) {
		if(role=="buyer" && condition=="invalid credential") {
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_iput_email'), 'galadriel@gmail.com', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_input_password'), '12345678', 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_button_masuk'), 0)
		}
		else if(role=="seller" && condition=="valid credential") {
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_iput_email'), 'maeve@gmail.com', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_input_password'), 'qwerty123', 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_button_masuk'), 0)
		}
		else if(role=="buyer" && condition=="valid credential") {
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_iput_email'), 'galadriel@gmail.com', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_input_password'), 'qwerty123', 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_button_masuk'), 0)
		}
	}
	@When ("Buyer login using valid credential")
	public void Buyer_login_using_valid_credential(){
		Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_iput_email'), 'galadriel@gmail.com', 0)
		Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_input_password'), 'qwerty123', 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_button_masuk'), 0)
	}

	@When ("Seller login using valid credential")
	public void Seller_login_using_valid_credential(){
		Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_iput_email'), 'maeve@gmail.com', 0)
		Mobile.setText(findTestObject('Object Repository/user_visit_login_page/user_input_password'), 'qwerty123', 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_button_masuk'), 0)
	}

	@Then ("(.*) will (.*) Login")
	public void will_Login(String role, String result) {
		if(role=="buyer" && result=="not success") {
			AppiumDriver<?> driver = MobileDriverFactory.getDriver()
			driver.findElementByXPath("//android.widget.Toast[@text='Email atau kata sandi salah']")
		}
		else if(role=="seller" && result=="success"){
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_login_page/user_cta_btn_keluar'), 0)
		}
		else if(role=="buyer" && result=="success"){
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_login_page/user_cta_btn_keluar'), 0)
		}
	}

	@Then ("Buyer success login")
	public void Buyer_success_Login(){
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_login_page/user_cta_btn_keluar'), 0)
	}

	@Then ("Seller success login")
	public void Seller_success_Login(){
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_login_page/user_cta_btn_keluar'), 0)
	}

	@Given("Buyer already login")
	public void Buyer_already_login(){
		User_already_in_login_page()
		Buyer_login_using_valid_credential()
		Buyer_success_Login()
	}

	@Given("Seller already login")
	public void Seller_already_login(){
		User_already_in_login_page()
		Seller_login_using_valid_credential()
		Seller_success_Login()
	}
}

