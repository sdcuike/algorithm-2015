package com.doctor.algorithm.sort;

/**
 * @author doctor
 *
 * @time 2015年5月11日 上午12:17:27
 */
public interface Utils {

	static <T> void swap(T a, T b) {
		T temp = a;
		a = b;
		b = temp;
	}
}
