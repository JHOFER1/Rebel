import React from "react"
import { Logout } from "./logout"
import SearchBar from "./search";

//dev
import { Categories } from "./categories";
import { Featured } from "./featured";
import { FeaturedBanner } from "./featuredBanners";
import { Recharge } from "./recharge";
import imgUser from '../../../assets/imgPreApi/usuario.png'
import imgCoin from '../../../assets/imgPreApi/coin.png'




function Home() {

    const handleSearchSubmit = async (searchResults) => {
    };

    return (
        <div className=" bg-primary font-primary">
            <Logout />
            <div className="flex flex-row  items-center">
                <div className="ml-8 mt-8 mr-2">
                    <img
                        src={imgUser}
                        alt="user"
                        className="rounded-full" />
                </div>
                <div className="mt-8 mx-4">
                    <h1 className="text-third text-lg" >Hola,</h1>
                    <h1 className="text-white text-xl font-semibold">Juan Gonzales</h1>
                </div>
                <div className="mx-6 flex justify-center">
                    <img src={imgCoin} alt="" />
                    <h1 className="text-white">35</h1>
                </div>

            </div>
            
            <div className="w-full">
                <SearchBar onSearchSubmit={handleSearchSubmit} />
            </div>
           
            <div className="w-full flex justify-center">
                <Categories />
            </div>

            <div>
                <Featured/>
            </div>
            <div>
                <FeaturedBanner/>
            </div>
            <div className="pb-24">
                <Recharge/>
            </div>

        </div>
    )
}
export default Home;