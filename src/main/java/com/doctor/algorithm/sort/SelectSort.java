package com.doctor.algorithm.sort;

import java.util.Arrays;
import java.util.function.BiPredicate;

/**
 * java8选择排序
 * 
 * 基本思想：每次循环找到未排序数据中最小的，放到排序好的数据后面。
 * 方法：遍历，找到其下标，然后交换数据。
 * 
 * @author doctor
 *
 * @time 2015年5月10日 下午11:51:49
 */
public class SelectSort {

	public static void main(String[] args) {
		Long[] array = { 33L, 55L, 2L, 4L, 77L, 66L };
		selectSort(array, (a, b) -> Long.compare(a, b) > 0);
		System.out.println(Arrays.asList(array));

	}

	public static <T> void selectSort(T[] array, BiPredicate<T, T> biPredicate) {
		int min;
		for (int i = 0; i < array.length; i++) {
			min = i;
			for (int j = i + 1; j < array.length; j++) {
				if (biPredicate.test(array[min], array[j])) {
					min = j;
				}
			}

			T temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
}
