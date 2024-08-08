import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
// Or export `extendBaseTheme` if you only want the default Chakra theme tokens to extend (no default component themes)
const customTheme = extendTheme({ config });

export default customTheme;
