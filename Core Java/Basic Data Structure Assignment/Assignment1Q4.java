import java.util.Scanner;

class ResultDeclaration{
    public String declareResults( double subject1Marks, double subject2Marks, double subject3Marks) {
    	String s = "";
    	if(subject1Marks > 60 || subject2Marks > 60 || subject3Marks > 60 ) {
    		return "Failed";
    	}
    	if((subject1Marks + subject2Marks)>60 || (subject2Marks + subject3Marks)>60 ||(subject3Marks + subject1Marks)>60 ) {
    		s = s+"Promoted"+ "\n";
    	}
    	if(subject1Marks + subject2Marks + subject3Marks >60) {
    		s = s+"Passed"+"\n";
    	}
    	else {
    		return "Failed";
    	}
    	return s;
    }
}
public class Assignment1Q4 {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	double s1= sc.nextDouble();
    	double s2= sc.nextDouble();
    	double s3= sc.nextDouble();
    	ResultDeclaration obj = new ResultDeclaration();
    	System.out.println(obj.declareResults(s1, s2, s3));
    }
}
