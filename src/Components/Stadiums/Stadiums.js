


import CardStadium from "../Items/CardStadium";
import RowSeparator from "../Items/RowSeparator";

import Pictures from "../../Pictures";


const Stadiums = () =>(
    <main>
        <div className="stadiums">

        <CardStadium 
            
            pictures = {Pictures.alThumama} 
            name = "Al Thumama Stadium" 
            desc = "Al Thumama Stadium’s dynamic and imaginative shape celebrates local culture and traditions just as much as it does a new era for stadium design." 
            location = "Al Thumama" 
            spectators = "44,400"
            
            />

            <RowSeparator />

            <CardStadium 
            
            pictures = {Pictures.lusail} 
            name = "Lusail Stadium" 
            desc = "Lusail Stadium will host the FIFA World Cup Qatar 2022™ Final an event that will secure its place in football and architectural history." 
            location = "Lusail" 
            spectators = "88,966"
            
            />

            <RowSeparator />

            <CardStadium 
            
            pictures = {Pictures.alBayt} 
            name = "Al Bayt Stadium" 
            desc = "Al Bayt Stadium’s role as host for the FIFA World Cup 2022™ Opening Match was assured from its first design sketch. Qatar turned to the rich fabric of its culture to welcome the world." 
            location = "Al Khor" 
            spectators = "68,895"
            
            />
            <RowSeparator />

            <CardStadium 
            
            pictures = {Pictures.ahmadBinAli} 
            name = "Ahmad Bin Ali Stadium" 
            desc = "Ahmad Bin Ali Stadium stands proudly in Umm Al Afaei– one of Qatar’s most historic cities and home to the famous Al Rayyan SC." 
            location = "Umm Al Afaei" 
            spectators = "45,032"
            
            />
            <RowSeparator />

            <CardStadium 
            
            pictures = {Pictures.alJanoub} 
            name = "Al Janoub Stadium" 
            desc = "Al Janoub Stadium lies in the southern city of Al Wakrah, one of Qatar’s oldest continuously inhabited areas. A city rich in history but with its sights set on a new horizon – the future of football." 
            location = "Al Wakrah" 
            spectators = "44,325"
            
            />
            <RowSeparator />

            <CardStadium 

            pictures = {Pictures.educationCity} 
            name = "Education City Stadium" 
            desc = "Education City Stadium is an extraordinary venue. It shines a brilliant light on Qatar’s position as a dynamic learning hub for students and academics across the Arab World and beyond." 
            location = "Al Rayyan" 
            spectators = "44,667"

            />

            <RowSeparator />

            <CardStadium 

            pictures = {Pictures.khalifaInternational} 
            name = "Khalifa International Stadium" 
            desc = "Khalifa International Stadium has hosted a long list of momentous sporting events since its inauguration in 1976. In fact, rarely is football or athletics mentioned in Qatar without referring to this venue." 
            location = "Aspire" 
            spectators = "45,857"

            />

            <RowSeparator />

            <CardStadium 

            pictures = {Pictures.stadium974} 
            name = "Stadium 974" 
            desc = "Stadium 974 made history even before its first match. Constructed entirely from shipping containers and modular steel, it is the first fully demountable covered football stadium." 
            location = "Ras Abu Aboud" 
            spectators = "44,089"

            />
        </div>
    </main>
)

export default Stadiums