abstract class A{
	int abstract_var;
}

abstract class B extends A{
	public abstract void fun();
}

public class Assignment2Q4 extends C {
	@Override
	public void fun() {
		System.out.println("Hello World");
	}
	public static void main(String args[])
	{
		B obj =new Assignment2Q4();
		b.fun();
	}
}