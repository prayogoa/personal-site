import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { WrapRootElement } from "./src/provider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <WrapRootElement element={element} />;
