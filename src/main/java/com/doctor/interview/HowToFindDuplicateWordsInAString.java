package com.doctor.interview;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @see http://howtodoinjava.com/2012/11/09/how-to-find-duplicate-words-in-a-string-in-java/
 * 
 * @author doctor
 *
 * @time 2015年5月2日 上午12:19:47
 */
public class HowToFindDuplicateWordsInAString {

	public static void main(String[] args) {
		String text = "a r b k c d se f g a d f s s f d s ft gh f ws w f v x s g h d h j j k f sd j e wed a d f";
		List<String> list = Arrays.asList(text.split(" "));

		Set<String> set = new HashSet<>(list);
		set.forEach(t -> {
			System.out.println(t + " : " + Collections.frequency(list, t));
		});
	}

}
