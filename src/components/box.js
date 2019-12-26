import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  layout,
  flexbox,
  typography,
  grid,
  background,
  border,
  position,
  shadow,
  color
} from "styled-system";

const Box = styled("div", {
  shouldForwardProp
})(
  space,
  layout,
  color,
  flexbox,
  typography,
  grid,
  background,
  border,
  position,
  shadow
);

export default Box;
