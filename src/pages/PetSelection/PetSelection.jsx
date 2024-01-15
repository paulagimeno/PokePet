import eggGrass from "../../Assets/Pokemon/Egg_Grass.png";
import eggFire from "../../Assets/Pokemon/Egg_Fire.png";
import eggWater from "../../Assets/Pokemon/Egg_Water.png";
import eggElectric from "../../Assets/Pokemon/Egg_Electric.png";


export default function PetSelection() {


    return (
    <div className="PetSelection">
    <div className="PetSelection__Eggs">
    <p>HOLITA</p>
        <img src={eggGrass} className="PetSelection__Eggs__Grass" alt="Grass Egg"/>
        <img src={eggFire} className="PetSelection__Eggs__Fire" alt="Grass Egg"/>
        <img src={eggWater} className="PetSelection__Eggs__Water" alt="Grass Egg"/>
        <img src={eggElectric} className="PetSelection__Eggs__Electric" alt="Grass Egg"/>
    </div>

    </div>
    )
}