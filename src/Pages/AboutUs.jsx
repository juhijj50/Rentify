import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import CompanyInfo from "../Components/AboutUsPage/CompanyInfo";
import Services from "../Components/AboutUsPage/Services";
import ContactUs from "../Components/AboutUsPage/ContactUs";
import FooterSection from "../Components/HomePage/FooterSection/FooterSection";

export default function AboutUs(){
    return(
        <div><NavBar/><CompanyInfo/><Services/><ContactUs/><FooterSection/></div>
    );
}