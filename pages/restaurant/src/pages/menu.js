import "../style.css"
import blackboard from '../assets/blackboard.jpeg'
import bread from '../assets/bread.jpeg'




export default function menu (){
    const menu = `

    <div class="w-full flex flex-col text-2xl">
       <img src=${bread} alt="bakery" class="h-1/2 w-full">
       <div class="flex flex-row justify-evenly items-center py-12">
       <h2 class="text-7xl font-semibold border-b-2 pb-2 border-gray-800">Bread</h2>
          <ul>
              <li>Spelt Sourdough - <span>$6.5</span></li>
              <li>Honey Spelt -  <span>$6.5</span></li>
              <li>Grain Pan -  <span>$5.5</span></li>
              <li>Acient Multigrain -  <span>$6</span></li>
              <li>Baguette -  <span>$4</span></li>
              <li>Danish Rye - <span>$10</span></li>
              <li>Simple Sourdough - <span>$6</span></li>
          </ul>
          <h2 class="text-7xl font-semibold border-b-2 pb-2 border-gray-800">Pastry</h2>
          <ul>
              <li>Croissant - <span>$2</span></li>
              <li>Almond Croissant -  <span>$2</span></li>
              <li>Chocolate Croissant-  <span>$2</span></li>
              <li>Puff Pastry - <span>$2</span></li>
              <li>Danish Pastry -  <span>$2</span></li>
              <li>Tarts -  <span>$2</span></li>
          </ul>
       </div>
      </div>


        <div style="background-image: url(${blackboard});" class="h-96 text-white flex md:flex-row flex-col justify-evenly items-center text-4xl">
            <h2 class="text-7xl font-semibold border-b-2 pb-2 border-gray-800">Coffee</h2>
            <ul>
            <li>Americano - <span>$3</span></li>
            <li>Latte -  <span>$4</span></li>
            <li>Cappuccino - <span>$4</span></li>
        </ul>
        <div class="flex flex-col">
            <span>Size - 12oz / 16oz</span>
            <span>Milk / Oat Milk</span>    
        </div>
           
       </div>

       

      
       
    

    `


    return menu
}