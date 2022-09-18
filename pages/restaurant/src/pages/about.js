import "../style.css"
import shop from '../assets/shopfront.jpeg'
import bakery from '../assets/bakery.jpeg'

export default function about (){

    const about = `
        <div class="container mx-auto md:py-8 py-4 px-2 md:px-0">
            <h2 class="md:text-4xl text-2xl font-semibold border-b-2 pb-2 border-gray-800">Bricolage's Story</h2>
            <p class="py-4">The name “bricolage / brɪkəˈlɑːʒ” is derived from the French word for “DIY,” or “Do It Yourself” in English. It is the construction or creation of a work from a diverse range of things that happen to be available</p>

            <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full py-4">
            <img src=${shop} alt="shop" class="h-[600px] w-[500px]">
            <div class="px-8 grid grid-rows-2">
            <img src=${bakery} alt="bakery" class="h-full w-full">
            <p class="py-4 indent-8 text-justify tracking-wide leading-6">
                If there is a time and place that you want, go make that world with your own hands. Our name is filled with that sentiment. It isn't only about the bread or the coffee; it is also the good mood that fills the space daily, and people’s happiness. These are things that we can create through “deliciousness.” Through “deliciousness” people and their intentions bloom, just like the branches of a tree, and they gradually grow, leaves sprouting and flowers blossoming.
            </p>
            </div>
            </div>
       </div>
    `

    return about
}