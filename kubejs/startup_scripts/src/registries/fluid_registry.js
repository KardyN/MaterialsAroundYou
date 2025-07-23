//priority: 99
StartupEvents.registry("fluid", (event) => {
  //metals
  event.create("metal/osmirite").thickTexture("#444444").noBlock().noBucket();
  global.oreList.forEach((ore) => {
    ore.color &&
      event
        .create(`metal/${ore.name}`)
        .thickTexture(ore.color)
        .noBlock()
        .noBucket();
  });
  event
    .create("metal/bearing_alloy")
    .thickTexture("#7f9789")
    .noBlock()
    .noBucket();
  event
    .create("boiled_water")
    .stillTexture("minecraft:block/water_still")
    .flowingTexture("minecraft:block/water_flow")
    .color("#3F76E4")
    .bucketColor("#3F76E4");
});
