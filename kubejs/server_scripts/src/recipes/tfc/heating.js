ServerEvents.recipes((event) => {
  event.remove({ input: "#tfc:ore_pieces" });
  event.remove({ input: "tfc:small_ore_pieces" });
});
