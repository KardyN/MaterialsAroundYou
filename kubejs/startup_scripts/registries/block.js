StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:metal/anvil/osmirite", "tfc:anvil")
    .tier(6)
    .texture("kubejs:block/metal/smooth/osmirite");
  event.create("kubejs:light_frame");
  event.create("kubejs:heavy_frame");
  event.create("kubejs:chemical_frame");
  event.create("kubejs:chemical_engineering");
});
