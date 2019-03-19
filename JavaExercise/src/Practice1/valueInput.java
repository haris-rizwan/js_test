package Practice1;

import java.util.Scanner;

public class valueInput {

    public static void main(String[] args) {

        Scanner Sc = new Scanner(System.in);

        int num = Sc.nextInt();

       while(num<=10){
           System.out.println("Please enter value greater than 10");
           num =Sc.nextInt();
       }

        System.out.println("thanks!!!!!!!!!!");

    }
}
