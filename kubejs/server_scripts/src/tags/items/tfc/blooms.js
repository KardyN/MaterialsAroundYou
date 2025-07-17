ServerEvents.tags("item", (event) => {
  event.remove("tfc:blooms", /kubejs:.+bloom/);
});
