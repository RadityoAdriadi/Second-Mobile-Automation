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

public class user_edit_profile {

	@When ("Seller in edit profile page")
	public void Seller_in_edit_profile_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/user_visit_akun_saya_page/button_pencil'), 0)
		Mobile.tap(findTestObject('Object Repository/user_visit_akun_saya_page/button_pencil'), 0)
	}

	@When ("Seller edit (.*) field with (.*) and user (.*) button simpan")
	public void Seller_edit_field_with_and_user_button_simpan (String field, condition, action) {
		if (field=="photo" && condition=="valid value" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/button_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/button_triple_line'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/folder_sd_emulator'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/folder_Reza'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/select_photo_profile_from_galeri'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
		}

		else if (field=="nama" && condition=="valid value" && action=="tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nama'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_nama'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_nama'), 0)
			Mobile.setText(findTestObject('Object Repository/user_edit_profile/input_nama'), 'Reza', 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/button_simpan_popup'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nama'), 0)
		}

		else if (field=="nomor hp" && condition=="valid value" && action=="tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nomor_hp'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_nomor_hp'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_nomor_hp'), 0)
			Mobile.setText(findTestObject('Object Repository/user_edit_profile/input_nomor_hp'), '0812345678', 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/button_simpan_popup'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nomor_hp'), 0)
		}

		else if (field=="kota" && condition=="valid value" && action=="tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_kota'), 0)
			Mobile.clearText(findTestObject('Object Repository/user_edit_profile/input_kota'), 0)
			Mobile.setText(findTestObject('Object Repository/user_edit_profile/input_kota'), 'jakarta', 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/button_simpan_popup'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
		}

		else if (field=="alamat" && condition=="valid value" && action=="tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_alamat'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_alamat'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_alamat'), 0)
			Mobile.setText(findTestObject('Object Repository/user_edit_profile/input_alamat'), 'Jalan kemang raya no.1', 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/button_simpan_popup'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
		}

		else if (field=="photo" && condition=="photo size more than 1mb" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/button_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/button_triple_line'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/folder_sd_emulator'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/folder_Reza'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/popup_pilih_gambar/select_photo_profile_1,1mb_from_galeri'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/photo_profile'), 0)
		}

		else if (field=="nama" && condition=="empty value" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nama'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_nama'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_nama'), 0)
			Mobile.clearText(findTestObject('Object Repository/user_edit_profile/input_nama'), 0)
		}

		else if (field=="nomor hp" && condition=="empty value" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_nomor_hp'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_nomor_hp'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_nomor_hp'), 0)
			Mobile.clearText(findTestObject('Object Repository/user_edit_profile/input_nomor_hp'), 0)
		}

		else if (field=="kota" && condition=="empty value" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_kota'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_kota'), 0)
			Mobile.clearText(findTestObject('Object Repository/user_edit_profile/input_kota'), 0)
		}

		else if (field=="alamat" && condition=="empty value" && action=="not tap") {
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_edit_alamat'), 0)
			Mobile.tap(findTestObject('Object Repository/user_edit_profile/field_edit_alamat'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/input_alamat'), 0)
			Mobile.clearText(findTestObject('Object Repository/user_edit_profile/input_alamat'), 0)
		}
	}

	@Then ("Seller (.*) edit profile and Seller (.*)")
	public void Seller_edit_profile_and_Seller (String result, notif) {
		if (result=="successfully" && notif=="message popup Profil berhasil diperbarui") {
			AppiumDriver<?> driver = MobileDriverFactory.getDriver()
			driver.findElementByXPath("//android.widget.Toast[@text='Profil berhasil diperbarui']")
		}

		else if (result=="not successfully" && notif=="alert popup Request Entity Too Large") {
			AppiumDriver<?> driver = MobileDriverFactory.getDriver()
			driver.findElementByXPath("//android.widget.Toast[@text='Request Entity Too Large']")
		}

		else if (result=="not successfully" && notif=="alert Wajib diisi.") {
			Mobile.getAttribute(findTestObject('Object Repository/user_edit_profile/field_input_nama'), 'Wajib diisi.', 0)
			Mobile.getAttribute(findTestObject('Object Repository/user_edit_profile/field_input_nomor_hp'), 'Wajib diisi.', 0)
			Mobile.getAttribute(findTestObject('Object Repository/user_edit_profile/field_input_kota'), 'Wajib diisi.', 0)
			Mobile.getAttribute(findTestObject('Object Repository/user_edit_profile/field_input_alamat'), 'Wajib diisi.', 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_input_nama'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_input_nomor_hp'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_input_kota'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/user_edit_profile/field_input_alamat'), 0)
		}
	}
}
