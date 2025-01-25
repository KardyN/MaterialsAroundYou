ServerEvents.recipes((event) => {
  global.gemList.forEach((gem) => {
    event.custom({
      type: "tfc:quern",
      ingredient: {
        item: `tfc:ore/${gem}`,
      },
      result: {
        item: `tfc:powder/${gem}`,
        count: 1,
      },
    });
  });
});
