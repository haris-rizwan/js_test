package Practice1;

//The following mathematical expressions are equal: a*(b+c) = a*b + a*c
//Write a program given the string a*(b+c) will transform it to a*b + a*c
//The string should be inputted by the user and the result outputted to the user



public class MathematicalExpressionConversion {

    public static String conversion(String expression){

        return (expression.charAt(0)+"*"+expression.charAt(3)+" + "+expression.charAt(0)+"*"+expression.charAt(5));

    }


    public static void main(String[] args) {

        System.out.println(conversion("a*(b+c)"));

    }

}
