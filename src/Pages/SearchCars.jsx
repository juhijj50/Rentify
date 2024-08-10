import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import SearchBar from "../Components/SearchCarsPage/SearchBar/SearchBar";
import Filters from "../Components/SearchCarsPage/Filters/Filters";
import CarList from "../Components/SearchCarsPage/CarList/CarList";

export default function SearchCars(){
    return(
        <div><NavBar/>
        <SearchBar />
        <Filters />
        </div>
        
    );
}