package recursion;

public class recursionPractice {

    public static void main(String[] args){

        printNumbersReduction(5);

        System.out.println("*************  cats ******");

        System.out.println(catsEyes(2));

        System.out.println("*************  factorial ******");

        System.out.println(factorial(4));

    }

    public static void printNumbersReduction(int num){
        if(num==0){
            return;
        }
        else {
            System.out.println(num);
            printNumbersReduction(num-1);
        }

    }


    public static int catsEyes(int num){
        if(num==0){
            return 0;
        }
        else{
           return  2+ catsEyes(num-1);
        }

    }


    public static int factorial(int num){
        if(num==0||num==1)
            return num;
        else
            return num * factorial(num-1);
    }

}
