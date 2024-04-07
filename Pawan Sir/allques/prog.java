class T{
    public static void main(String[] args) {
        String s="i love coding";
        String a[]=s.split(" ");
        String revword1="";
        char rev3;
        int i;
        for(i=s.length()-1;i>=0;i--){
            revword1=a[i];
            char rev2;
        
        for(i=revword1.length()-1;i>=0;i--){
            rev2=revword1.charAt(i);
        
         System.out.println(rev2);        
        }
    }
    }
}