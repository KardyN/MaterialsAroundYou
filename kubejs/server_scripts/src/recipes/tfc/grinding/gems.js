const gemList = [
  "amethyst",
  "diamond",
  "emerald",
  "lapis_lazuli",
  "opal",
  "pyrite",
  "ruby",
  "sapphire",
  "topaz",
];

ServerEvents.recipes((event) => {
  gemList.forEach((gem) => {
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
