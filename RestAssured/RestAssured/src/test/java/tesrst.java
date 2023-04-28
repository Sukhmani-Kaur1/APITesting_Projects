

import org.junit.After;
import org.junit.Before;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class tesrst {
	@BeforeTest
	public void bt() {
		Assert.assertEquals("hello", "bye");
	}
	@Test
	public void t1() {
		System.out.println("test 1");
	}
	@AfterTest
	public void at() {
		System.out.println("after test");
	}
}
