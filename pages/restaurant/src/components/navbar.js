import logo from '../assets/bricolage.png'
import '../style.css'


export default function navbar(){
    
    const header = `
            <div class="flex flex-col justify-center items-center bg-gray-100">
                <div class="flex flex-row justify-between items-center">
                    <img src=${logo} alt="logo" class="h-28 w-auto" />
                    <h1 class="md:text-6xl text-4xl font-extrabold uppercase px-6">Bricolage Bakery 브리콜라주</h1>
                </div>
                <ul class="flex-row gap-x-8 justify-center font-semibold items-center text-2xl cursor-pointer w-full md:flex">
                    <li id="about" class="hover:border-b-2 hover:border-gray-800 px-4 py-2">
                        About
                    </li>
                    <li id="menu" class="hover:border-b-2 hover:border-gray-800 px-4 py-2">
                        Menu
                    </li>
                    <li id="contact" class="hover:border-b-2 hover:border-gray-800 px-4 py-2">
                        Where
                    </li>
                </ul>
            </div>
            `
    return header
}
    
