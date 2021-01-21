import java.util.*;

class ArmstrongOrNot {
	public int order(int a)
	{
		int c=0;
		while(a>0)
		{
			a=a/10;
			c++;
		}
		return c;
	}
    public boolean armstrongCheck(int a) {
    	int temp = a;
    	int n = order(a);
		int sum=0;
		int r =0;
		while(temp!=0)
		{
			r=temp % 10;
			sum=(int) (sum+ Math.pow(r,n));
			temp=temp/10;	
		}
		if(sum==a)
		{
			return true;
		}
		else
			return false;
    }
}
public class Assignment1Q1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a= sc.nextInt();
		ArmstrongOrNot obj = new ArmstrongOrNot();
		System.out.println(obj.armstrongCheck(a));
	}
}
