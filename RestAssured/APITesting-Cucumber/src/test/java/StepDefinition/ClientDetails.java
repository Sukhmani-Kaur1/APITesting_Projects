package StepDefinition;

public class ClientDetails {
	String clientName;
	String clientEmail;
	public String getClientName() {
		return clientName;
	}
	public void setClientName() {
		this.clientName = "he"+(int)Math.ceil((Math.random()+3)*50);
	}
	public String getClientEmail() {
		return clientEmail;
	}
	public void setClientEmail() {
		this.clientEmail = "hello"+(int)Math.ceil((Math.random()+1)*500)+"@example.com";
	}
	public ClientDetails() {
		
	}
	@Override
	public String toString() {
		return "{\"clientName\":\"" + clientName + "\", \"clientEmail\":\"" + clientEmail + "\"}";
	}
	
	
}
