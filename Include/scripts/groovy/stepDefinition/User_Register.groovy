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
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver
import com.kms.katalon.core.util.KeywordUtil
import java.util.UUID;
import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class User_Register {
	@Given ("User already on Register page")
	public void User_already_on_Register_page() {
		Mobile.startApplication('Application/secondhand-24082023.apk', true)
		Mobile.tap(findTestObject('Object Repository/user_visit_homepage/user_click_akun_menu'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_akun_menu/user_click_btn_masuk'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_login_page/user_click_link_daftar'), 0)
	}

	@When ("User fill nama and (.*) after that click button Daftar")
	public void User_fill_nama_and_after_that_click_button_Daftar(String condition) {
		if(condition=="invalid credential") {
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_nama'), 'Luke Skywalker', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_email'), 'galadriel@gmail.com', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_password'), 'qwerty12345', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_number_phone'), '089423654521', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_city'), 'Jogja', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_address'), 'Jl. Parangtritis', 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_register_page/user_click_btn_daftar'), 0)
		}
		else if(condition=="valid credential"){
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_nama'), 'Handoko', 0)
			final String randomEmail = randomEmail();
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_email'), randomEmail, 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_password'), 'qwerty12345', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_number_phone'), '089423654521', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_city'), 'Jogja', 0)
			Mobile.setText(findTestObject('Object Repository/user_visit_register_page/user_input_address'), 'Jl. Parangtritis', 0)
			Mobile.tap(findTestObject('Object Repository/user_visit_register_page/user_click_btn_daftar'), 0)
		}
	}

	@Then ("User will (.*) Register")
	public void User_will_Register(String results) {
		if(results=="not success"){
			AppiumDriver<?> driver = MobileDriverFactory.getDriver()
			driver.findElementByXPath("//android.widget.Toast[@text='Email sudah digunakan']")
		}
		else if(results=="success"){
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_login_page/user_cta_btn_keluar'), 0)
		}
	}

	private static String randomEmail() {
		return "E-" + UUID.randomUUID().toString() + "@gmail.com";
	}
}
