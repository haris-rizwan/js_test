package Practice1;

import java.util.Arrays;

//Given a sequence of numbers write a program for Finding the Maximum and Minimum Values

public class MaxMinValue {

    public static int MaxValue(int[] numbers){

        int maxValue = numbers[0];
        for(int i=1;i < numbers.length;i++){
            if(numbers[i] > maxValue){
                maxValue = numbers[i];
            }
        }
        return maxValue;

    }

    public static int getMinValue(int[] numbers){
        int minValue = numbers[0];
        for(int i=1;i<numbers.length;i++){
            if(numbers[i] < minValue){
                minValue = numbers[i];
            }
        }
        return minValue;
    }


    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,5};

        int max = MaxValue(numbers);
        int min = getMinValue(numbers);
        System.out.println("MAX =" + max +" Min = "+min);
    }


}
