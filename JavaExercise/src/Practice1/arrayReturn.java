package Practice1;

public class arrayReturn {

    public static boolean[] bolArray(int[] nums){

        boolean[] bolArray = new boolean[nums.length];

        for(int i =0;i<nums.length;i++){
            if(nums[i]>=100){
                bolArray[i]=true;
            }
            else {
                bolArray[i]=false;
            }
        }

        return bolArray;
    }

    public static void main(String[] args) {
        int[] numbers ={102,111,200,34,45,56,223};

        System.out.println(bolArray(numbers));
    }

}
