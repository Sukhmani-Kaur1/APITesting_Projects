package StepDefinition;

import java.io.IOException;

import com.github.dockerjava.transport.DockerHttpClient.Request;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utility.playloadCoverting;

public class difinition {
	public static String token;
	public static String orderId;
	public static String BaseURL = "https://simple-books-api.glitch.me";
	public static  String loginPlayloadString;
	public static  String orderDetails;
	RequestSpecification requestSpecification;
	Response response;
	JsonPath jsonPath;
	@Given("Login API")
	public void login_api() throws IOException {
		
	     loginPlayloadString = playloadCoverting.generatingLoadString("Login.json");
	    System.out.println(loginPlayloadString);
	}
	@When("Login Executes {string} and provide accesstoken")
	public void login_executes_and_provide_accesstoken(String string) {
	  requestSpecification=  RestAssured.given().body(loginPlayloadString);
	    requestSpecification.contentType(ContentType.JSON);
	  response = requestSpecification.post(BaseURL+string);
	}
	@Then("successfully executed with status code {int}")
	public void successfully_executed_with_status_code(Integer int1) {
	  requestSpecification.then().statusCode(int1);
	}
	@Then("verify accesstoken")
	public void verify_accesstoken() {
	   jsonPath = new JsonPath(response.asString());
	   token = jsonPath.get("accessToken");
	   System.out.println("accessToken: "+token);
	}
	
	@Given("Login successfull with accesstoken")
	public void login_successfull_with_accesstoken() throws IOException {
	
		orderDetails = playloadCoverting.generatingLoadString("Order.json");
		requestSpecification=RestAssured.given().header("Authorization", "Bearer "+token);
		requestSpecification.contentType(ContentType.JSON).body(orderDetails);
	   
	}
	@When("order a book {string} and fetch orderId")
	public void order_a_book_and_fetch_order_id(String string)  {
		response = requestSpecification.when().post(BaseURL+string);
		jsonPath = new JsonPath(response.getBody().asString());
		orderId = jsonPath.get("orderId");
		System.out.println("orderId: "+orderId);
;	}
	
	@Then("verigy status code {int}")
	public void verigy_status_code(Integer int1) {
		requestSpecification.then().statusCode(int1);
	   
	}





}
