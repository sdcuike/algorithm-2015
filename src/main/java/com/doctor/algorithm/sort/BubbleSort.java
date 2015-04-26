package com.doctor.algorithm.sort;

import java.util.Arrays;
import java.util.function.BiPredicate;

/**
 * java8 函数式版 冒泡排序（BubbleSort）
 * 
 * @author doctor
 *
 * @time 2015年4月26日 下午9:31:03
 */
public class BubbleSort {

	public static void main(String[] args) {
		Long[] array = { 33L, 55L, 2L, 4L, 77L, 66L };
		sort(array, (a, b) -> Long.compare(a, b) > 0);
		System.out.println(Arrays.asList(array));

	}

	private static <T> void sort(T[] array, BiPredicate<T, T> biPredicate) {
		for (int i = array.length - 1; i > 0; i--) {
			for (int j = 0; j < i; j++) {
				if (biPredicate.test(array[j], array[i])) {
					T temp = array[j];
					array[j] = array[i];
					array[i] = temp;
				}
			}
		}

	}
}
