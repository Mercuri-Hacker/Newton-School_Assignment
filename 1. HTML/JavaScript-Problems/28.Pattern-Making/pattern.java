public static void pattern_making(int n){

    for(int i=1 ; i<=n ; i++){
  
        for(int j=1 ; j<=i ; j++){
  
            System.out.print(j+" ");
  
            if(j==i){
  
                int x=i;
  
                while(x>1){
                    x--;
                    System.out.print(x+" ");
                }
  
            }
  
  
        }
  
        System.out.println("");
  
    }
  
    for(int i=n-1 ; i>=1 ; i--){
  
        for(int j=1 ; j<=i ; j++){
  
            System.out.print(j + " ");
  
            if(j==i){
                int x;
                x=i;
  
                while(x>1){
                      x--;
                    System.out.print(x + " ");
                  
  
                }
  
  
            }
  
        }
  
      System.out.println();
  
    }
  
  }