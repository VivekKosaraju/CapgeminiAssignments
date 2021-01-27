abstract class Persistence {
    abstract public String persist();
}
class FilePersistence extends Persistence{
    @Override
    public String persist() {return "Persistence File";}
}
class DatabasePersistence extends Persistence{
    @Override
    public String persist() {return "Persistence Database";}
}

public class Assignment2Q6 {
    public static void main(String[] args) {
    	Persistence f=new FilePersistence();
    	Persistence d=new DatabasePersistence();
    	System.out.println(f.persist());
    	System.out.println(d.persist());
    }
}