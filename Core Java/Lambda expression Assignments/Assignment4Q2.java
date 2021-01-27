import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

interface lambdaInterface2{
	boolean operation(Assignment4Q2 o);
}

public class Assignment4Q2 {

    private int totalPrice;
    private String status;

    public int getTotalPrice() {
		return totalPrice;
	}
	public String getStatus() {
		return status;
	}
	public Assignment4Q2(int totalPrice, String status) {
		super();
		this.totalPrice = totalPrice;
		this.status = status;
	}
	public static ArrayList<Assignment4Q2> criteriaCheck(ArrayList<Assignment4Q2> orders, lambdaInterface2 lambda){
		ArrayList<Assignment4Q2> finalOrders = new ArrayList<Assignment4Q2>();
		for(Assignment4Q2 order: orders) {
			if(lambda.operation(order)) {
				finalOrders.add(order);
			};
		}
		return finalOrders;
	}
	public static ArrayList<Assignment4Q2> listOfOrders(ArrayList<Assignment4Q2> orders) {
		lambdaInterface2 lambda = o-> {
			if(o.getTotalPrice() > 10000 && (o.getStatus()=="ACCEPTED" || o.getStatus()=="COMPLETED")) {
				return true;
			}
			return false;
		};
		return criteriaCheck(orders,lambda);
	}
    public static void main(String[] args) {
    	ArrayList<Assignment4Q2> oders= new ArrayList<>();
    	Assignment4Q2 order1=new Assignment4Q2(20000,"PENDING");
    	Assignment4Q2 order2=new Assignment4Q2(15000,"ACCEPTED");
    	Assignment4Q2 order3=new Assignment4Q2(6000,"PENDING");
    	Assignment4Q2 order4=new Assignment4Q2(4500,"ACCEPTED");
    	Assignment4Q2 order5=new Assignment4Q2(12000,"COMPLETED");
    	Assignment4Q2 order6=new Assignment4Q2(18000,"PENDING");
    	
    	oders.add(order1);
    	oders.add(order2);
    	oders.add(order3);
    	oders.add(order4);
    	oders.add(order5);
    	oders.add(order6);
    	
    	ArrayList<Assignment4Q2> newOrders = listOfOrders(oders);
    		for(Assignment4Q2 out: newOrders) {
    			System.out.println(out.getTotalPrice());
    			System.out.println(out.getStatus());
    		}
    			
    }
}