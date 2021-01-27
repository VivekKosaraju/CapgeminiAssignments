import java.util.ArrayList;

class CurrentAccount extends Assignment2Q3 {
    int totalDeposits = 10000;
    int creditLimit = 2000;
    @Override
    public int getCash() {
	return totalDeposits-creditLimit;}
	}
class SavingsAccount extends Assignment2Q3 {
    int totalDeposits = 10000;
    int fixedDepositAmount = 5000;
    @Override
    public int getCash() {
	return totalDeposits+fixedDepositAmount;}
	}
public class Assignment2Q3 {
    public int totalCashInBank(ArrayList<Integer> cash){
    	int total = 0;
        for(int i = 0; i < cash.size(); i++)
               total += cash.get(i);
        return total;
    }
    public int getCash(){
	return 0;
	}
    public static void main(String[] args) {
    	CurrentAccount cAccount=new CurrentAccount();
    	SavingsAccount sAccount=new SavingsAccount();
    	int cAmount=cAccount.getCash();
    	int sAmount=sAccount.getCash();
    	ArrayList<Integer> cash=new ArrayList<Integer>(2);
    	cash.add(cAmount);
    	cash.add(sAmount);
    	Assignment2Q3 o=new Assignment2Q3();
    	System.out.println(o.totalCashInBank(cash));
    }
}