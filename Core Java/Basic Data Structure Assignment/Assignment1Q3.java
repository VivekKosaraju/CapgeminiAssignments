import java.util.Scanner;

class SiCi {
    public double simpleInterest(double principalAmount,int time,double interestRate){
    	double amount = (principalAmount*interestRate*time)/100;
    	return amount;
    }
    public double compoundInterest(double principalAmount,int time,double interestRate){
    	double amount = principalAmount * (Math.pow((1 + interestRate/100), (time))) - principalAmount;
    	return amount;
    }
}
public class Assignment1Q3 {
    public static void main (String args[]) {
    	Scanner sc = new Scanner(System.in);
		double p= sc.nextDouble();
		int t= sc.nextInt();
		double r= sc.nextDouble();
		SiCi obj = new SiCi();
		System.out.println("Simple interest: " + obj.simpleInterest(p, t, r));
		System.out.println("Compound interest: " + obj.compoundInterest(p, t, r));
    }
}