package hello;

import java.util.Scanner;

class TaxAmount{
    public double calculateTaxAmount(int ctc){
    	double amt;
		if (ctc<=180000)
		{
			amt=0;
			return amt;
		}
		else if(ctc>=180001 && ctc<=300000)
		{
			amt=0.1*(ctc);
			return amt;
		}
		else if(ctc>=300001 && ctc<=500000)
		{
			amt=0.2*(ctc);
			return amt;
		}
		else if(ctc>=500001 && ctc<=1000000)
		{
			amt=0.3*(ctc);
			return amt;
		}
	return 0;
    }
}
public class Assignment1Q5 {
    public static void main(String args[]) {
    	Scanner sc = new Scanner(System.in);
    	int ctc = sc.nextInt();
    	TaxAmount obj = new TaxAmount();
    	System.out.println(obj.calculateTaxAmount(ctc));
    }
}
