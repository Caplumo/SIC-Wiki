/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  coopSidebar: [
    "coop",
    {
      type: "category",
      label: "群聊",
      items: ["group/TSCG", "group/POLAB"],
    },
    {
      type: "category",
      label: "频道",
      items: ["channel/channel"],
    },
  ],
};
module.exports = sidebars;
