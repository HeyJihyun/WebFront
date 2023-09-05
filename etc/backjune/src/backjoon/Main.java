package backjoon;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int a = sc.nextInt();
		int min = 1000000;
		int max = -1000000;
		for(int i =0; i < a; i++) {
			int b = sc.nextInt();
			if(b < min) min = b;
			if(b > max) max = b;
		}
		System.out.printf("%d %d", min, max);
	}
}