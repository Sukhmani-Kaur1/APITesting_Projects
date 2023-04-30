package com.simpleBooks;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.Test;
import org.testng.xml.LaunchSuite.ExistingSuite;

import groovyjarjarantlr4.v4.analysis.LeftFactoringRuleTransformer;
import groovyjarjarantlr4.v4.parse.GrammarTreeVisitor.tokenSpec_return;
import static io.restassured.RestAssured.*;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class SimpleBooks {
	public static String token;
	public static String orderId;
	public static String BaseURL = "https://simple-books-api.glitch.me";
	@Test(priority = 0)
	public void Authorization() {
//		System.out.println(Math.ceil((Math.random()+1)*500));
		ClientDetails clientDetails = new ClientDetails();
		clientDetails.setClientName();
		clientDetails.setClientEmail();
		RestAssured.baseURI =BaseURL;
		System.out.println(clientDetails.toString());
		Response response = given()
				.contentType("application/json")
		.body(clientDetails.toString())
		.when()
		.post("/api-clients/")
		.then().assertThat()
		.statusCode(201).contentType(ContentType.JSON).extract().response();
//		
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
		token = js.get("accessToken");
	}
	@Test(priority = 1)
	public void Order() {
		RestAssured.baseURI =BaseURL;
		String orderbody = "{\r\n"
				+ "  \"bookId\": 1,\r\n"
				+ "  \"customerName\": \"Sukhmani\"\r\n"
				+ "}";
		Response response = RestAssured.given()
				.body(orderbody)
				.header("content-Type", "application/json").header("Authorization","Bearer "+token).when().post("/orders").then().assertThat()
				.statusCode(201).contentType(ContentType.JSON).extract().response();
//				
				String jsonResponseString = response.asString();
				System.out.println(jsonResponseString);
				JsonPath js = new JsonPath(jsonResponseString);
				orderId = js.get("orderId");
				
	}
	@Test(priority = 2)
	public void getOrder() {
		RestAssured.baseURI =BaseURL;
		String orderbody = "{\r\n"
				+ "  \"bookId\": 1,\r\n"
				+ "  \"customerName\": \"Sukhmani\"\r\n"
				+ "}";
		Response response = RestAssured.given()
				.body(orderbody)
				.header("content-Type", "application/json").header("Authorization","Bearer "+token).when().get("/orders/"+orderId).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
//				
				String jsonResponseString = response.asString();
				System.out.println(jsonResponseString);
				JsonPath js = new JsonPath(jsonResponseString);
		
	}
	public void updateOrder() {
		RestAssured.baseURI =BaseURL;
		String orderbody = "{\r\n"
				+ "  \"bookId\": 1,\r\n"
				+ "  \"customerName\": \"WorkHard\"\r\n"
				+ "}";
		Response response = RestAssured.given()
				.body(orderbody)
				.header("content-Type", "application/json").header("Authorization","Bearer "+token).when().patch("/orders/"+orderId).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
//				
				String jsonResponseString = response.asString();
				System.out.println(jsonResponseString);
				JsonPath js = new JsonPath(jsonResponseString);
	}
	@Test(priority = 5)
	public void deleteOrder() {
		RestAssured.baseURI =BaseURL;
		Response response = RestAssured.given()
				.header("content-Type", "application/json").header("Authorization","Bearer "+token).when().delete("/orders/"+orderId).then().assertThat()
				.statusCode(204).contentType("").extract().response();
//				
				String jsonResponseString = response.asString();
				System.out.println(jsonResponseString);
				JsonPath js = new JsonPath(jsonResponseString);
	}
}
