import java.util.*;

import armstrongOrNot.Student;
class Student {
    private int subjectA,subjectB,subjectC;

    public Student() {
        subjectA=0;
        subjectB=0;
        subjectC=0;
    }
    public void setMarks(int a,int b,int c)
    {
        subjectA = a;
        subjectB = b;
        subjectC = c;
    }

    public int studentsTotalMarksInAllSubjects(Student[] students) {
        int total=0;
        for(int i=0;i<students.length;i++)
        {
            total += students[i].subjectA + students[i].subjectB + students[i].subjectC;
        }
        return total;
    }

    public double studentsAverageMarksInAllSubjects(Student[] students) {
        double total=0.0;
        for(int i=0;i<students.length;i++)
        {
            total += students[i].subjectA + students[i].subjectB + students[i].subjectC;
        }
        return total/students.length;
    }

    public int[] subjectWiseMarks(Student[] students,String subjectName) {
        int k=0;
        int marks[] = new int[students.length];
        for(int i=0;i<students.length;i++)
        {
            if(subjectName=="subjectA"){
            marks[k]= students[i].subjectA;
            k++;
            }
            if(subjectName=="subjectB"){
                marks[k]= students[i].subjectB;
                k++;
            }
            if(subjectName=="subjectC"){
                marks[k]= students[i].subjectC;
                k++;
            }
        }
        return marks;
    }

    public int subjectATotalByStudents(int[] marks) {
        return subjectTotalByStudents(marks);
    }
    public int subjectBTotalByStudents(int[] marks) {
        return subjectTotalByStudents(marks);
    }
    public int subjectCTotalByStudents(int[] marks) {
        return subjectTotalByStudents(marks);
    }

    public int subjectTotalByStudents(int[] marks) {
        int total=0;
        for(int i=0;i<marks.length;i++)
        {
            total += marks[i] ;
        }
        return total;
    }

    public double subjectAAverageByStudents(int[] marks) {
        double total;
        total = subjectTotalByStudents(marks);
        return total/marks.length;
    }
    public double subjectBAverageByStudents(int[] marks) {
        double total;
        total = subjectTotalByStudents(marks);
        return total/marks.length;
    }
    public double subjectCAverageByStudents(int[] marks) {
        double total;
        total = subjectTotalByStudents(marks);
        return total/marks.length;
    }

}

public class Assignment1Q9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of students subjects");
        int n= sc.nextInt();
        Student s[] = new Student[n];
        int a,b,c;
        for(int i=0;i<n;i++)
        {
            System.out.println("Enter student marks for 3 subjects");
            a= sc.nextInt();
            b= sc.nextInt();
            c= sc.nextInt();
            s[i] = new Student();
            s[i].setMarks(a,b,c);
        }
        Student obj = new Student();
        System.out.println(obj.studentsTotalMarksInAllSubjects(s));
        System.out.println(obj.studentsAverageMarksInAllSubjects(s));
        int marksA[] = obj.subjectWiseMarks(s,"subjectA");
        int marksB[] = obj.subjectWiseMarks(s,"subjectB");
        int marksC[] = obj.subjectWiseMarks(s,"subjectC");
        System.out.println(obj.subjectATotalByStudents(marksA));
        System.out.println(obj.subjectAAverageByStudents(marksA));
        System.out.println(obj.subjectBTotalByStudents(marksB));
        System.out.println(obj.subjectBAverageByStudents(marksB));
        System.out.println(obj.subjectCTotalByStudents(marksC));
        System.out.println(obj.subjectCAverageByStudents(marksC));
    }
}