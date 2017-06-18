import java.io.*;
import java.util.*;
class unicodeTest{

  public static void main(String[] args) {
    /*String s= "\u0cb8\u0cae\u0cb0\u0ccd\u0ca4\u0ccd";
    for(int i=0;i<s.length();i++)
    {
      System.out.print("&#"+s.codePointAt(i)+";");
    }
    System.out.println("");*/
    Scanner sc = new Scanner(System.in);
    String s = sc.next();
    //shikshak in hindi System.out.println("\u0936\u093f\u0915\u094d\u0937\u0915");
    //shikshaka in kannada System.out.println("\u0cb6\u0cbf\u0c95\u0ccd\u0cb7\u0c95");
    // akkaa in hindi System.out.println("\u0905\u0915\u094d\u0915\u093e");
    // thyana in hindi System.out.println("\u0924\u094d\u092f\u093e\u0928\u093e");
    //String s = "\u0c95\u0cb0\u0ccd\u0ca8\u0cbe\u0c9f\u0c95";
    //System.out.println("\u0ca4\u0ccd\u0cb0");
    //System.out.println(s);

    String transcription="";
    for (int i=0;i<s.length() ;i++ ) {
      int n=s.codePointAt(i);
      // debug input:
      System.out.println("----"+n+"----");
      if(n==0x947 || n== 0x94b){
        // this is to take care of the purna swara added to hindi phonetics which do not exist like the big ae and big o
        n+=0x37f;
      }else{
        n+=0x380;
      }
      transcription += Character.toString((char)n);//String.format("0x%x",Integer.parseInt(Integer.toString(n),16));
    }
    int swara=transcription.codePointAt(s.length()-1);
    boolean ardhavirama_ra = (transcription.codePointAt(s.length()-2)==3277)&&(transcription.codePointAt(s.length()-3)==3248);
    if(swara>=3221 && swara<=3257 )
    {
      //System.out.println(ardhavirama_ra);
      if(ardhavirama_ra)
      {

        System.out.println(transcription.substring(0,s.length()-1)+"\u0ccd"+transcription.substring(s.length()-1));
      }
      else{
        System.out.println(transcription+"\u0ccd");
      }
    }
    else if(swara>=0xcbe && swara<=0xccf){
      // have to check for dheergas after this ra like atharva
      ardhavirama_ra = (transcription.codePointAt(s.length()-3)==3277)&&(transcription.codePointAt(s.length()-4)==3248);
      if(ardhavirama_ra){
        System.out.println(transcription.substring(0,s.length()-3)+Character.toString((char)swara)+transcription.substring(s.length()-3,s.length()-1));
      }
      else{
        System.out.println(transcription);
      }

    }
    else
      System.out.println(transcription);
    //System.out.println("\u093e");
    //System.out.println(s+"  "+Character.codePointAt(s,0));

  }
}
