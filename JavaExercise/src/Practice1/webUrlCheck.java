package Practice1;



import java.util.Scanner;

public class webUrlCheck {


    public static void CheckUrl(String url){

        String editUrl = url.substring(4); // getting the Url after www.
        int x = editUrl.indexOf("."); // Index of second . from the edited url.
        String Domain = editUrl.substring(++x);

        switch (Domain){
            case "com":
                System.out.println(Domain+" Business address");
                break;

            case "edu":
                System.out.println(Domain+" Educational institute address");
                break;
            case "gov":
                System.out.println(Domain+" Government address");
                break;
            case "org":
                System.out.println(Domain+" organisation address");
                break;
            default:
                System.out.println(Domain+" Web address of a different entity");

        }


    }


    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a Valid web address");

        String webAddress = input.next();

        CheckUrl(webAddress);


    }
}
