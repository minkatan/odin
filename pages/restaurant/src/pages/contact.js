import fb from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import bg from '../assets/img_01.png'
import "../style.css"

const API_KEY = process.env.API_KEY

export default function contact(){
    const map = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Space+Needle,Seattle+WA`
    
    const contact = `
        <div class="grid md:grid-cols-2 grid-cols-1 container mx-auto pt-12">
            <iframe src=${map} 
            width="450" 
            height="400" 
            style="border:0;" 
            frameborder="0"
            allowfullscreen="yes" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
            <div class="py-16 md:ml-8 px-8 md:px-0">
                <div class="grid grid-rows-3 gap-1">
                    <h4 class="text-xl font-semibold border-b-2 border-b-gray-800 pb-2 md:pb-0">Address</h4>
                    <p class="py-4 md:py-0">400 Broad St, Seattle, WA 98109, United States</p>
                    <h4 class="text-xl font-semibold border-b-2 border-b-gray-800 pb-2 md:pb-0">Hours</h4>
                    <p class="py-4 md:py-0">Daily - 09:00-18:00</p>
                    <h4 class="text-xl font-semibold border-b-2 border-b-gray-800 pb-2 md:pb-0">Tel</h4>
                    <p class="py-4 md:py-0">(111) 222 - 3333</p>
                </div>
                <div class="py-4 md:py-8">
                    <h4 class="text-xl font-semibold border-b-2 border-b-gray-800 pb-2 md:pb-0">Social</h4>
                    <div class="flex flex-row gap-x-8 pt-4">
                    <a href="./">${fb}</a>
                    <a href="./"><img src=${insta} alt="instagram" class="h-12 w-12"></a>
                    </div>
                </div>
            </div>     
        </div>
        <div>
            <img src=${bg} alt="background" class="h-full w-full">
        </div>
    `

    return contact
}