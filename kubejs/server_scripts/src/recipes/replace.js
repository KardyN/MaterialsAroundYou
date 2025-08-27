ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: "minecraft:quartz" },
    "minecraft:quartz",
    "#forge:gems/quartz"
  );
});
