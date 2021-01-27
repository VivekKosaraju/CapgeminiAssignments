class Rectangle5 extends Shape5 {
    @Override
    public String draw() {
	return "Rectangle";}
	}

class Line5 extends Shape5{
    @Override
    public String draw() {
	return "Line";}
	}

class Cube5 extends Shape5 {
    @Override
    public String draw() {
	return "Cube";
	}
}
abstract class Shape5 {
    abstract public String draw();
}
public class Assignment2Q5{
    public static void main(String[] args) {
    	Shape5 s1=new Cube5();
    	Shape5 s2=new Line5();
    	Shape5 s3=new Rectangle5();
    	System.out.println(s1.draw());
    	System.out.println(s2.draw());
    	System.out.println(s3.draw());
    }
}