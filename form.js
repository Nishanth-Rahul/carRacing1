class Form{
    constructor(){
    }

   display(){
     var title = createElement('h2');
     title.html("Car Racing Game");
     title.position(500,100);
     
     var greeting = createElement('h3')
     
     var input = createInput("Name");
     input.position(515,260);

     var button = createButton('play');
     button.position(650,300);

     button.mousePressed(function(){
         input.hide();
         button.hide();

         var name = input.value();

         playerCount+=1;
         player.update(name);
         player.updateCount(playerCount);
         
         greeting.html("Welcome " + name + " to Car Racing Game!");
         greeting.position(425,300);
     })
   }
    


}
