import java.util.Scanner;

class ArmstrongNumBetweenRange{

	public int[] armstrongNumbersInRange(int min , int max){
		int arr[] = new int[4];
		int k=0;
		boolean f;
		for(int i=min;i<=max;i++)
		{
			f=armstrongCheck(i);
			if(f==true)
			{
				arr[k]=i;
				k++;
			}
		}
		return arr;
	}
    public boolean armstrongCheck(int a) {
    	int temp = a;
		int r,sum=0;
		while(temp!=0)
		{
			r=temp % 10;
			r=(r*r*r);
			sum=sum+r;
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
public class Assignment1Q2 {
	public static void main(String[] args) {
		int min = 100;int max = 999;
		ArmstrongNumBetweenRange obj = new ArmstrongNumBetweenRange();
		int arr[]=obj.armstrongNumbersInRange(min,max);
		for(int i=0;i<4;i++) {
			System.out.print(arr[i]+" ");
		}
	}
}