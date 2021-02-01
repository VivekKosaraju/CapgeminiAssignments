import java.util.*;

class Login{
    String userId = "Ajay",password = "password";
    int n=0;
    public String loginUser(String user, String pass) {
    	if((user.equals(userId)) && (pass.equals(password)))
    	{
    		return "Welcome " + userId;
    	}
    	else {
    		return "again";
    	}
    }

}
public class Assignment1Q6 {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	Login obj = new Login();
    	String k;
    	while(obj.n<3)
    	{
    		if(obj.n==3)
        	{
        		System.out.println("You have entered wrong credentials 3 times");
        		System.out.println("Contact Admin");
        		break;
        	}
    		System.out.println("Enter userId");
    		String user = sc.nextLine();
    		System.out.println("Enter password");
    		String pass = sc.nextLine();
    		k = obj.loginUser(user,pass);
    		if(!(k.equals("again")))
    		{
    			System.out.println(k);
    			break;
    		}
    		else {
    			System.out.println("You have entered wrong credentials ,please enter the right credentials.");
    			System.out.println("Please re-enter the details.");
    			obj.n++;
    		}
    	}
    }
}