package Practice1;

public class variableValueSwitch {

    static int A = 35;
    static int B = 10;

    public static void main(String[] args) {

        A= A+B;
        B=A-B;
        A=A-B;

        System.out.println("A = "+A+"   "+"B = "+B);
    }
}
