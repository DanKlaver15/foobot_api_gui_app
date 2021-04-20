import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark,
});

// Add a global decorator that will render a dark background when the
// "Color Scheme" knob is set to dark
const knobDecorator = (storyFn) => {
  // A knob for color scheme added to every story
  const colorScheme = select("Color Scheme", ["light", "dark"], "light");

  // Hook your theme provider with some knobs
  return React.createElement(ThemeProvider, {
    // A knob for theme added to every story
    theme: select("Theme", Object.keys(themes), "default"),
    colorScheme,
    children: [
      React.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: `html { ${
            colorScheme === "dark" ? "background-color: rgb(35,35,35);" : ""
          } }`,
        },
      }),
      storyFn(),
    ],
  });
};

export const decorators = [knobDecorator];
