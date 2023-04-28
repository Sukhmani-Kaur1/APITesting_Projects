import static org.hamcrest.CoreMatchers.is;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.internal.path.json.JSONAssertion;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class TrelloAPI {
	public static String baseURL = "https://api.trello.com";
	public static String key = "13b3d0af17b985092492390dd103e15f";
	public static String token = "ATTAeb20e76864e75886343b5618a96499959aa8efe81cb2e9f88e488298989c8b2bC5E54023";
	public static String id;

	@Test(priority = 0)
	public void CreateBoard() {
		RestAssured.baseURI = baseURL;
		Response response = RestAssured.given().queryParam("name", "masai").queryParam("key", key)
				.queryParam("token", token).header("content-Type", "application/json").when().post("/1/boards").then()
				.assertThat().statusCode(200).contentType(ContentType.JSON).extract().response();
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
		id = js.get("id");
//		System.out.println(id);
	}

	@Test(priority = 1)
	public void GetBoard() {
		RestAssured.baseURI = baseURL;
		Response response = RestAssured.given().queryParam("key", key).queryParam("token", token)
				.header("content-Type", "application/json").when().get("/1/boards/" + id).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
//		System.out.println(response);
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
//		System.out.println(js);
	}

	@Test(priority = 2)
	public void UpdateBoardName() {
		RestAssured.baseURI = baseURL;
		String name = "{\"name\":\"newname\"}";
		Response response = RestAssured.given().body(name).queryParam("key", key).queryParam("token", token)
				.header("content-Type", "application/json").when().put("/1/boards/" + id).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
	}

	@Test(priority = 3)
	public void UpdateBoardDesc() {
		RestAssured.baseURI = baseURL;
		String desc = "{\"desc\":\"this is the board description\"}";
		Response response = RestAssured.given().body(desc).queryParam("key", key).queryParam("token", token)
				.header("content-Type", "application/json").when().put("/1/boards/" + id).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
	}

	@Test(priority = 4)
	public void DeleteBoard() {
		RestAssured.baseURI = baseURL;
		Response response = RestAssured.given().queryParam("key", key).queryParam("token", token)
				.header("content-Type", "application/json").when().delete("/1/boards/" + id).then().assertThat()
				.statusCode(200).contentType(ContentType.JSON).extract().response();
		String jsonResponseString = response.asString();
		System.out.println(jsonResponseString);
		JsonPath js = new JsonPath(jsonResponseString);
	}
}
