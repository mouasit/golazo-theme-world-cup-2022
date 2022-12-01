


import CardStadium from "../Items/CardStadium";
import RowSeparator from "../Items/RowSeparator";

import alThumama from "../../assets/stadiums/al-thumama/1.jpg";
import lusail from "../../assets/stadiums/lusail/1.jpg";
import khalifaInternational from "../../assets/stadiums/khalifa-international/1.jpg";
import educationCity from "../../assets/stadiums/education-city/1.jpg";
import alJanoub from "../../assets/stadiums/al-janoub/1.jpg";
import alBayt from "../../assets/stadiums/al-bayt/1.jpg";
import ahmadBinAli from "../../assets/stadiums/ahmad-bin-ali/1.jpg";
import containers from "../../assets/stadiums/974/1.jpg";

const Stadiums = () =>(
    <main>
        <div className="stadiums">

        <CardStadium 
            
            pictures = {alThumama} 
            name = "Al Thumama Stadium" 
            desc = "Al Thumama Stadium’s dynamic and imaginative shape celebrates local culture and traditions just as much as it does a new era for stadium design." 
            location = "Al Thumama" 
            spectators = "44,400"
            
            />

            <RowSeparator />

            <CardStadium 
            
            pictures = {lusail} 
            name = "Lusail Stadium" 
            desc = "Lusail Stadium will host the FIFA World Cup Qatar 2022™ Final an event that will secure its place in football and architectural history." 
            location = "Lusail" 
            spectators = "88,966"
            
            />

            <RowSeparator />

            <CardStadium 
            
            pictures = {alBayt} 
            name = "Al Bayt Stadium" 
            desc = "Al Bayt Stadium’s role as host for the FIFA World Cup 2022™ Opening Match was assured from its first design sketch. Qatar turned to the rich fabric of its culture to welcome the world." 
            location = "Al Khor" 
            spectators = "68,895"
            
            />
            <RowSeparator />

            <CardStadium 
            
            pictures = {ahmadBinAli} 
            name = "Ahmad Bin Ali Stadium" 
            desc = "Ahmad Bin Ali Stadium stands proudly in Umm Al Afaei– one of Qatar’s most historic cities and home to the famous Al Rayyan SC." 
            location = "Umm Al Afaei" 
            spectators = "45,032"
            
            />
            <RowSeparator />

            <CardStadium 
            
            pictures = {alJanoub} 
            name = "Al Janoub Stadium" 
            desc = "Al Janoub Stadium lies in the southern city of Al Wakrah, one of Qatar’s oldest continuously inhabited areas. A city rich in history but with its sights set on a new horizon – the future of football." 
            location = "Al Wakrah" 
            spectators = "44,325"
            
            />
            <RowSeparator />

            <CardStadium 

            pictures = {educationCity} 
            name = "Education City Stadium" 
            desc = "Education City Stadium is an extraordinary venue. It shines a brilliant light on Qatar’s position as a dynamic learning hub for students and academics across the Arab World and beyond." 
            location = "Al Rayyan" 
            spectators = "44,667"

            />

            <RowSeparator />

            <CardStadium 

            pictures = {khalifaInternational} 
            name = "Khalifa International Stadium" 
            desc = "Khalifa International Stadium has hosted a long list of momentous sporting events since its inauguration in 1976. In fact, rarely is football or athletics mentioned in Qatar without referring to this venue." 
            location = "Aspire" 
            spectators = "45,857"

            />

            <RowSeparator />

            <CardStadium 

            pictures = {containers} 
            name = "Stadium 974" 
            desc = "Stadium 974 made history even before its first match. Constructed entirely from shipping containers and modular steel, it is the first fully demountable covered football stadium." 
            location = "Ras Abu Aboud" 
            spectators = "44,089"

            />
        </div>
    </main>
)

export default Stadiums