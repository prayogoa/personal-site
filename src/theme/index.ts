import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";

const override: ThemeOverride = {
  config: { initialColorMode: "system", useSystemColorMode: true },
};
// Or export `extendBaseTheme` if you only want the default Chakra theme tokens to extend (no default component themes)
const customTheme = extendTheme(override);

export default customTheme;
