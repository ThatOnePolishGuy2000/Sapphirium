const creotitePowerStation = extendContent(SectorPreset, "creotite-power-station", Planets.serpulo, 256, {});
  creotitePowerStation.captureWave = 55;
  creotitePowerStation.difficulty = 7;
  creotitePowerStation.alwaysUnlocked = true;

const​ ​node​ ​=​ ​(​parent​,​ ​contentType​,​ ​requirements​,​ ​objectives​)​ ​=>​ ​{ 
 ​    ​const​ ​tnode​ ​=​ ​new​ ​TechTree​.​TechNode​(​TechTree​.​get​(​parent​)​,​ ​contentType​,​ ​requirements​ ​!=​ ​null​ ? ​requirements​ : ​contentType​.​researchRequirements​(​)​)​; 
 ​    ​let​ ​used​ ​=​ ​new​ ​ObjectSet​(​)​; 
 ​     
 ​    ​if​(​objectives​ ​!=​ ​null​)​{ 
 ​        ​tnode​.​objectives​.​addAll​(​objectives​)​; 
 ​    ​}​; 
 ​}​;
 
node(SectorPresets.groundZero, creotitePowerStation, null, Seq.with(new Objectives.SectorComplete(SectorPresets.groundZero)));

module.exports = {
creotitePowerStation: creotitePowerStation
}
