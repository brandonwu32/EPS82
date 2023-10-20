import './App.css';
import Background from './static/ocean_background.svg';
import Family from './static/family.svg';
import { useState } from 'react';

function App() {
  /* Each metazoa will be a button that will toggle something like a menu that appears from the side and gives a description

      Clicking the button will toggle the menu for THAT metazoa and then the menu appears. The function used to activate the menu
      should also take in a prop that holds an exit function that can toggle the menu off.

      Each menu components should use the same css file to make life easier. We can also have all the menu come from the same js file
      just that the component passes in props for things like animals in the family, features etc.. */
  const poriferaDescription = "There are over 1,000 species of Porifera. Some notable features is that they have no true tissue no digestive or circulatory system. They're suspension feeders, and can be made out of glass or calcium carbonate";
  const cnidariaDescription = "This group is defined by stinging cells called cnidoblasts on tentaclesm, they have a single opening for their mouth and anus, radial symmetry, and eat zooplankton and small fish, some popular animals that belong to this family are fish eating anemone, orange cup coral, and strawberry anemones ";
  const molluscaDescription = "Some features of Mollusca are a fleshy mantle, muscular foot, more developed nervous system, and beak like resping radula. ";
  const annelidaDescription = "The animals in this family are segmented worms";
  const arthropodaDescription = "Some features of arthropods are jointed appendages, segmented body, exoskeleton, greatest number of species, ";
  const echinodermataDescription = "Echinodermata have radial symmetry, tube feet, and hydrostatic skeleton, ";
  const chordataDescription = "Chordates possess: notochord, dorsal hollow nerve cord, pharyngeal gill slits and post anal tails.";

  const [currentDisplay, setCurrentDisplay] = useState("click on a phyla");

  return (
    <div className="App">
      <img className = "background" src = {Background} alt = "none"></img>
      <img className = "family" src = {Family} alt = "none"></img>
      <div className="porifera">
        <button className = "button" onClick={() => setCurrentDisplay(poriferaDescription)}></button>
      </div>
      <div className="cnidaria">
        <button className = "button" onClick={() => setCurrentDisplay(cnidariaDescription)}></button>
      </div>
      <div className="mollusca">
        <button className = "button" onClick={() => setCurrentDisplay(molluscaDescription)}></button>
      </div>
      <div className="annelida">
        <button className = "button" onClick={() => setCurrentDisplay(annelidaDescription)}></button>
      </div>
      <div className="arthropoda">
        <button className = "button" onClick={() => setCurrentDisplay(arthropodaDescription)}></button>
      </div>
      <div className="echinodermata">
        <button className = "button" onClick={() => setCurrentDisplay(echinodermataDescription)}></button>
      </div>
      <div className="chordata">
        <button className = "button" onClick={() => setCurrentDisplay(chordataDescription)}></button>
      </div>
      <div className = "textbox">
        <p>{currentDisplay}</p>
      </div>
    </div>
  );
}

export default App;
