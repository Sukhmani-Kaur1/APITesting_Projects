package StepDefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import static io.restassured.RestAssured.*;

import com.google.gson.JsonObject;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Trello {
	public static String token = "ATTAeb20e76864e75886343b5618a96499959aa8efe81cb2e9f88e488298989c8b2bC5E54023";
	public static String key = "13b3d0af17b985092492390dd103e15f";
	public static String baseURL ="https://api.trello.com" ; 
	public static String boardId;
	int randomNum = (int) Math.ceil((Math.random()+1)*50);
	Response response;

	@Given("Create Board")
	public void create_board() {
		RestAssured.baseURI =baseURL;
	   response = given()
	    .queryParam("name", "SomeName"+randomNum)
	    .queryParam("key", key)
	    .queryParam("token", token).contentType(ContentType.JSON)
	    .when()
	    .post("/1/boards")
	    .then().assertThat().statusCode(200).contentType(ContentType.JSON).extract().response();
	}
	@When("verify Board")
	public void verify_board() {
	  response.then().log().body();
	}
	@Then("get Board id")
	public void get_board_id() {
	    response.asString();
	   JsonPath jp = new JsonPath(response.asString());
	   boardId = jp.get("id");
	   System.out.println(boardId);
	}



	
}
