//priority: 99
StartupEvents.registry("fluid", (event) => {
  event
    .create("metal/osmirite")
    .thickTexture("black")
    .bucketColor("black")
    .stillTexture("tfc:block/molten_still")
    .flowingTexture("tfc:block/molten_flow");
});
