ItemEvents.modification((event) => {
  event.modify("waterflasks:iron_flask", (item) => {
    item.maxDamage = 1000;
  });
});
