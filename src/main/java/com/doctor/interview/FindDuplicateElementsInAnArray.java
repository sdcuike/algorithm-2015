package com.doctor.interview;

import java.util.HashSet;
import java.util.Set;

/**
 * @see http://howtodoinjava.com/2015/03/04/find-duplicate-elements-in-an-array/
 * 
 * @author doctor
 *
 * @time 2015年5月2日 上午12:28:48
 */
public class FindDuplicateElementsInAnArray {

	public static void main(String[] args) {
		int[] array = { 1, 1, 2, 3, 4, 5, 6, 7, 8, 8 };
		Set<Integer> set = new HashSet<>();
		for (int i = 0; i < array.length; i++) {
			if (set.add(array[i]) == false) {
				System.out.println("Duplicate element found :" + array[i]);
			}
		}
	}

}
