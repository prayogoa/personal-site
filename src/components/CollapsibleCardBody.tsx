import {
  Box,
  Button,
  CardBody,
  CardBodyProps,
  LayoutProps,
} from "@chakra-ui/react";
import * as React from "react";
import useResizeObserver from "use-resize-observer";

interface CollapsibleCardBodyProps extends CardBodyProps {
  numCollapsedLines: number;
}
const CollapsibleCardBody = ({
  children,
  numCollapsedLines,
  ...rest
}: CollapsibleCardBodyProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useResizeObserver({
    ref,
    onResize() {
      if (!ref.current) {
        return;
      }
      if (ref.current.scrollHeight > ref.current.clientHeight) {
        setIsOverflowing(true);
      }
    },
  });
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true);
  const [isOverflowing, setIsOverflowing] = React.useState<boolean>(false);
  return (
    <CardBody {...rest}>
      <Box
        ref={ref}
        overflow="hidden"
        display="-webkit-box"
        sx={{
          "-webkit-line-clamp": isCollapsed ? `${numCollapsedLines}` : "none",
          "-webkit-box-orient": "vertical",
        }}
      >
        {children}
      </Box>
      {isOverflowing && isCollapsed && (
        <Button variant="unstyled" onClick={() => setIsCollapsed(false)}>
          more
        </Button>
      )}
      {!isCollapsed && (
        <Button
          variant="unstyled"
          onClick={() => {
            setIsCollapsed(true);
          }}
        >
          less
        </Button>
      )}
    </CardBody>
  );
};

export default CollapsibleCardBody;
