import java.util.Scanner;

@FunctionalInterface
interface lambdaInterface{
	double operation(int num1,int num2);
}

public class Assignment4Q1 {
	public double addition(int num1,int num2){
		lambdaInterface add = (a,b) -> a+b;
		return add.operation(num1,num2);
	}
    public double subtraction(int num1,int num2){
    	lambdaInterface sub = (a,b) -> a-b;
		return sub.operation(num1,num2);
    }
    public double multiplication(int num1,int num2){
    	lambdaInterface mul = (a,b) -> a*b;
		return mul.operation(num1,num2);
    }
    public double division(int num1,int num2){
    	lambdaInterface div = (a,b) -> ((a*0.1)/b)*10;
		return div.operation(num1,num2);
    }
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	int num1 = sc.nextInt();
    	int num2 = sc.nextInt();
    	Assignment4Q1 obj = new Assignment4Q1();
    	System.out.println(obj.addition(num1, num2));
    	System.out.println(obj.subtraction(num1, num2));
    	System.out.println(obj.multiplication(num1, num2));
    	System.out.println(obj.division(num1, num2));
    	sc.close();
    }
}