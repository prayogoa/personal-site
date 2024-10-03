import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Heading,
  HStack,
  ListItem,
  Text,
  Image,
  Code,
  CodeProps,
  Divider,
  Avatar,
  VStack,
  Card,
  CardBody,
  Grid,
  GridItem,
  Link,
  List,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import gravatar from "../utils/gravatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faSquareEnvelope,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const templateAreas = {
  base: `"header"
       "main"
       "contact"`,
  md: `"header header"
       "main contact"`,
};
const templateColumns = {
  base: "1fr",
  md: "fit-content(60ch) fit-content(100%)",
};
const templateRows = {
  base: "max-content",
  md: "max-content 1fr",
};
const IndexPage: React.FC<PageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Grid
      as="main"
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      autoRows="max-content"
      templateRows={templateRows}
      gap={3}
      width="fit-content"
      minH="100vh"
      m="auto"
      p={4}
    >
      <GridItem area="header">
        <HStack m="auto">
          <Avatar
            name="Adrian Prayogo"
            size="xl"
            src={gravatar("adr010590@gmail.com", 100)}
          />
          <Heading as="h1" size="3xl">
            Adrian Prayogo
          </Heading>
          <IconButton
            size="md"
            ms="auto"
            variant="ghost"
            icon={
              colorMode === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )
            }
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
          />
        </HStack>
        <Divider my={4} />
      </GridItem>
      <GridItem
        area="main"
        as={Flex}
        direction="column"
        justify="space-between"
        sx={{
          "& a": { color: "teal.500" },
        }}
      >
        <Spacer flexBasis="20%" display={{ base: "none", md: "block" }} />
        <VStack>
          <Heading>
            Hi! I'm Adrian, I'm passionate about crafting intuitive user
            interfaces and driving impactful engineering initiatives.
          </Heading>
          <Text>
            I spent the last 9 years at{" "}
            <Link isExternal href="https://www.rainforestqa.com">
              Rainforest QA
            </Link>
            , where I started as their second frontend engineering hire and
            eventually became the lead frontend engineer of a globally
            distributed team. This experience has shaped me both professionally
            and personally, allowing me to develop a unique set of skills in
            remote collaboration and team leadership.
          </Text>

          <Text>
            I'm always eager to connect with fellow professionals, discuss
            exciting opportunities, or simply share ideas about software
            engineering and team leadership. Feel free to reach out to me at{" "}
            <Link href="mailto:prayogoadrian@gmail.com">
              prayogoadrian@gmail.com
            </Link>{" "}
            or connect with me on{" "}
            <Link isExternal href="https://linkedin.com/in/prayogoa">
              LinkedIn
            </Link>
            .
          </Text>
        </VStack>
        <Spacer flexBasis="80%" display={{ base: "none", md: "block" }} />
      </GridItem>
      <GridItem area="contact">
        <VStack alignItems="stretch">
          <Card>
            <CardBody>
              <List>
                <ListItem>
                  <Link isExternal href="https://linkedin.com/in/prayogoa">
                    <FontAwesomeIcon icon={faLinkedin} /> prayogoa
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal href="https://github.com/prayogoa">
                    <FontAwesomeIcon icon={faGithub} /> @prayogoa
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="tel:+6587985759">
                    <FontAwesomeIcon icon={faPhone} /> +65 8798 5759
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="mailto:prayogoadrian@gmail.com">
                    <FontAwesomeIcon icon={faSquareEnvelope} />{" "}
                    prayogoadrian@gmail.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/cv.pdf">Resume</Link>
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html data-theme="dark" />
    <title>Adrian Prayogo</title>
    <body className="chakra-ui-dark" />
  </>
);
