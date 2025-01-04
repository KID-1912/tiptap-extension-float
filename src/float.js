import { Extension } from "@tiptap/core";

export default Extension.create({
  name: "float",
  addOptions() {
    return {
      types: ["image"],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          float: {
            default: "default",
            parseHTML: (element) => {
              const float = element.style.float;
              if (!["left", "right"].includes(float)) return "default";
              return float;
            },
            renderHTML: (attributes) => {
              if (attributes.float === "default") return {};
              return { style: `float: ${attributes.float}` };
            },
          },
        },
      },
    ];
  },
});
