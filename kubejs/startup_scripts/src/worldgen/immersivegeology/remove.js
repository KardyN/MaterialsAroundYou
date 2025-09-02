WorldgenEvents.remove((event) => {
  event.removeFeatureById("underground_ores", [
    "immersivegeology:acanthite",
    "immersivegeology:alumina",
    "immersivegeology:anatase",
    "immersivegeology:apatite",
    "immersivegeology:bauxite",
    "immersivegeology:bituminous",
    "immersivegeology:cassiterite",
    "immersivegeology:chalcocite",
    "immersivegeology:chalcopyrite",
    "immersivegeology:chromite",
    "immersivegeology:cobaltite",
    "immersivegeology:copper",
    "immersivegeology:cryolite",
    "immersivegeology:cuprite",
    "immersivegeology:fluorite",
    "immersivegeology:galena",
    "immersivegeology:gold",
    "immersivegeology:gypsum",
    "immersivegeology:hematite",
    "immersivegeology:ilmenite",
    "immersivegeology:lead",
    "immersivegeology:lignite",
    "immersivegeology:magnetite",
    "immersivegeology:millerite",
    "immersivegeology:molybdenite",
    "immersivegeology:monazite",
    "immersivegeology:platinum",
    "immersivegeology:pyrite",
    "immersivegeology:pyrolusite",
    "immersivegeology:scheelite",
    "immersivegeology:silver",
    "immersivegeology:smithsonite",
    "immersivegeology:sphalerite",
    "immersivegeology:thorianite",
    "immersivegeology:thorite",
    "immersivegeology:unobtania",
    "immersivegeology:uraninite",
    "immersivegeology:vanadinite",
    "immersivegeology:wolframite",
    "immersivegeology:zircon",
  ]);

  event.removeFeatureById("surface_structures", [
    "immersivegeology:carnallite_evaporate",
    "immersivegeology:rocksalt_evaporate",
    "immersivegeology:saltpeter_evaporate",
  ]);

  // event.printFeatures("fluid_springs");
  // event.printFeatures("lakes");
  // event.printFeatures("local_modifications");
  // event.printFeatures("raw_generation");
  // event.printFeatures("strongholds");
  // event.printFeatures("surface_structures");
  // event.printFeatures("top_layer_modification");
  // event.printFeatures("underground_decoration");
  // event.printFeatures("underground_ores");
  // event.printFeatures("underground_structures");
  // event.printFeatures("vegetal_decoration");
});
