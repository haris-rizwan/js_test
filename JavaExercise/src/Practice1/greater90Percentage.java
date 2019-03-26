package Practice1;

public class greater90Percentage {

    public static double percentage(int[] nums){

        int lengthOfInput = nums.length;
        int count = 0;
        double Percentage = 0;
        for(int number:nums){
            if(number>90){
                count++;
            }

        }

        if(count>0){
            Percentage = (count*100/lengthOfInput);
        }
        else {
            System.out.println("The array contains no numbers greater than 90");
        }

        return Percentage;

    }


    public static void main(String[] args) {
         int[] checkArray = {10,111,20,40,66,101,203,56,155};

        System.out.println("Percentage = "+percentage(checkArray)+" %");

    }
}
