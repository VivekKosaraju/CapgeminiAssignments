import java.util.Scanner;

class ResultDeclaration
{   String x;
	public String declareResults(double subject1Marks,double subject2Marks,double subject3Marks)
	{
        double total =subject1Marks+subject2Marks+subject3Marks;
        double total1=subject1Marks+subject2Marks;
        double total2=subject2Marks+subject3Marks;
        double total3=subject1Marks+subject3Marks;
		
		if (subject1Marks>60 || subject2Marks>60  || subject3Marks >60 || total<60)
			{
			x="failed";
			}
		else if(total>60)
			{
			if(total1>60 || total2>60 || total3>60)
				{x="passed\n" +"promoted";
				}
			else{x="passed";}

			}
        return x;	
	    
	}
}
public class Assignment1Q4
{
	public static void main(String[] args)
	
	{
		Scanner s=new Scanner(System.in);
		double a=s.nextDouble();
		double b=s.nextDouble();
		double c=s.nextDouble();
		ResultDeclaration check=new ResultDeclaration();
		String res=check.declareResults(a,b,c);
		System.out.println(res);
		s.close();
	}
}
