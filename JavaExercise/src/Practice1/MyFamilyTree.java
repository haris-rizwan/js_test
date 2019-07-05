package Practice1;

import java.util.Scanner;

public class MyFamilyTree {

    private String PersonName;
    private String PersonFather;
    private String PersonMother;
    private String PersonGrandFather;
    private String PersonGrandMother;
    private String Spouse;
    private int Children;
    private int Siblings;


    public MyFamilyTree(String[] Details){
        this.PersonName=Details[0];
        this.PersonFather=Details[1];
        this.PersonMother=Details[2];
        this.PersonGrandFather=Details[3];
        this.PersonGrandMother=Details[4];
    }

    public String getPersonName() {
        return PersonName;
    }

    public String getPersonFather() {
        return PersonFather;
    }

    public String getPersonMother() {
        return PersonMother;
    }

    public String getPersonGrandFather() {
        return PersonGrandFather;
    }

    public String getPersonGrandMother() {
        return PersonGrandMother;
    }

    public String getSpouse() {
        return Spouse;
    }

    public int getChildren() {
        return Children;
    }

    public int getSiblings() {
        return Siblings;
    }

    public void setSpouse(String spouse) {
        Spouse = spouse;
    }

    public void setChildren(int children) {
        Children = children;
    }

    public void setSiblings(int siblings) {
        Siblings = siblings;
    }

    public void printFamilyTree(){

        System.out.println("Name = "+this.PersonName+" : "+
                "Father Name = "+this.PersonFather+" : "+
                "Mother Name = "+this.PersonMother+" : "+
                "GrandFather Name = "+this.PersonGrandFather+" : "+
                "GrandMother Name = "+this.PersonGrandMother);
    }

    public static void main(String[] args) {
        String[] details = new String[5];

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Name");
        details[0]=scanner.nextLine();
        System.out.println("Enter Father Name");
        details[1]=scanner.nextLine();
        System.out.println("Enter MotherName");
        details[2]=scanner.nextLine();
        System.out.println("Enter GrandFather Name");
        details[3]=scanner.nextLine();
        System.out.println("Enter GrandMother Name");
        details[4]=scanner.nextLine();


        MyFamilyTree test = new MyFamilyTree(details);
        test.printFamilyTree();

        System.out.println("Do you wan to add spouse y/n");

    }


}
