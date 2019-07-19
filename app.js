new Vue({
    el:'#app',

    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,

    },
    methods:{
        startGame: function(){

        this.gameIsRunning = true;
        this.playerHealth=100;
        this.monsterHealth=100;

    },
    attack: function(){
      
        this.monsterHealth -=this.calculateDamage(10,3);

        if(this.checkedWin()){
            return;
        }

       
        this.monsterAttack();
        
    },


    specialAttack: function(){
        this.monsterHealth -=this.calculateDamage(20,5);

        if(this.checkedWin()){
            return;
        }

       
        this.monsterAttack();
    },


    heal: function(){

            if( this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth=100;
            }
         //   this.monsterAttack();
    },


    giveUp: function(){

        this.gameIsRunning=false;
    },

    monsterAttack: function(){
        this.playerHealth -=this.calculateDamage(5,12);
        this.checkedWin();
    },

    calculateDamage: function(max,min){
        return Math.max(Math.floor(Math.random() * max ) + 1 ,min)

    },
    
    checkedWin: function(){
        if(this.monsterHealth <=0){
            if(confirm('You Won the Game !  New game ?')){
                this.startGame();
            }else{
                this.gameIsRunning=false;
            }
            return true;
       
        }else if(this.playerHealth <=0){
                if(confirm('You Lost !, New Game ?')){
                    this.startGame();

                }else{
                    this.gameIsRunning=false;
                }
            this.gameIsRunning=false;
          
        
        return true;
    }
    return false;
    }
}
});