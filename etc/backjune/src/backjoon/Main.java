package backjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int a = Integer.parseInt(br.readLine());
		
		for(int i=0; i < a*2-1; i++) {
			if(i<a) {
				for(int j=0; j <a+i; j++) {
					System.out.print(j+i < a-1? ' ' : '*');
				}
			} else {
				for(int j=0; ) {
					System.out.print(j+i < a-1? ' ' : '*');
				}
			}
			System.out.println();
		}
		
	}
}