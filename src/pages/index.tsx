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
  CardHeader,
  CardBody,
  UnorderedList,
  Grid,
  GridItem,
  Link,
  List,
} from "@chakra-ui/react";
import gravatar from "../utils/gravatar";
import RfLogo from "../images/rainforestqa_logo.jpeg";
import CollapsibleCardBody from "../components/CollapsibleCardBody";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faMobile,
  faPhone,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const PurpleCode = (props: CodeProps) => (
  <Code colorScheme="purple" {...props} />
);

const templateAreas = {
  base: `"header"
       "experience"
       "education"
       "award"
       "contact"`,
  md: `"header     header"
       "experience education"
       ". award"
       ". contact"`,
};
const templateColumns = {
  base: "1fr",
  md: "fit-content(60ch) fit-content(100%)",
};
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Grid
      as="main"
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      gap={3}
      width="fit-content"
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
          <VStack align="flex-start">
            <Heading as="h1" size="3xl">
              Adrian Prayogo
            </Heading>
            <Text size="sm">
              Experienced software engineer and team lead with a strong
              background in frontend development
            </Text>
          </VStack>
        </HStack>
        <Divider my={4} />
      </GridItem>
      <GridItem area="experience" rowSpan={{ md: 4 }}>
        <VStack align="flex-start" alignItems="stretch">
          <Heading as="h2" size="lg">
            Experience
          </Heading>
          <Card>
            <CardHeader>
              <HStack>
                <Image src={RfLogo} borderRadius="full" boxSize={10} />
                <VStack align="flex-start" gap={1}>
                  <Heading as="h3" size="md">
                    <Link isExternal href="https://www.rainforestqa.com">
                      Rainforest QA
                    </Link>
                  </Heading>
                  <Text>Remote</Text>
                </VStack>
              </HStack>
            </CardHeader>
            <CollapsibleCardBody numCollapsedLines={15}>
              <Heading as="h4" size="sm">
                Senior Engineering Manager
              </Heading>
              <Text fontSize="xs">Oct 2017 - Present</Text>
              <Heading as="h4" size="sm" mt={1}>
                Engineering Manager
              </Heading>
              <Text fontSize="xs">Mar 2017 - Oct 2017</Text>
              <Text mt={1}>
                Lead the frontend team at Rainforest QA, responsible for the
                single page application used by customers to interact with the
                product (test authoring / organization, result review, account
                management). This included:
              </Text>
              <UnorderedList>
                <ListItem>
                  Advising team members in planning and implementation of all
                  frontend projects
                </ListItem>
                <ListItem>
                  Coaching and mentoring on communication, collaboration,
                  planning and estimation, etc.
                </ListItem>
                <ListItem>Conducting performance reviews</ListItem>
                <ListItem>Reviewing code</ListItem>
                <ListItem>
                  Collaborating with product managers to plan out future feature
                  work
                </ListItem>
                <ListItem>
                  Facilitating constant discussions within the team to improve
                  processes and conventions
                </ListItem>
                <ListItem>Hiring new team members</ListItem>
              </UnorderedList>
              <Text>
                In this role I still make contributions to the codebase
                regularly, acting as a flexible additional manpower to be
                deployed on ongoing projects as needed.
              </Text>
              <Divider my={2} />
              <Heading as="h4" size="sm">
                Senior Frontend Engineer
              </Heading>
              <Text fontSize="xs">Jul 2015 - Mar 2017</Text>
              <Text>
                Second frontend hire of a fully remote, globally distributed,
                small engineering team. Responsible for the development and
                maintenance of the web app used by customers to author and run
                tests and review results, as well as the web interface testers
                used to execute tests. This included:
              </Text>
              <UnorderedList>
                <ListItem>Migrating from Backbone.js to React, Redux</ListItem>
                <ListItem>
                  Migrating unit testing framework from Jasmine to Jest
                </ListItem>
                <ListItem>
                  Setting up instrumentation and analytics integration (Segment)
                </ListItem>
                <ListItem>
                  Adding crash reporting integration (Sentry) and conducting bug
                  triage
                </ListItem>
                <ListItem>Configuring CI / CD pipeline (Circle CI)</ListItem>
              </UnorderedList>
              <Text>
                Initially the engineering team also carried out product
                management and design responsibilities. As we hired dedicated
                product managers and designers, I worked closely with them in
                coming up with solutions to user problems, providing estimates
                and suggestions on how it can better solve the problem or be
                shipped faster.
              </Text>
            </CollapsibleCardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading as="h3" size="md">
                <Link href="https://innovationpartnerships.umich.edu/company/collabrify-it/">
                  Collabrify.IT
                </Link>
              </Heading>
              <Text>Ann Arbor, Michigan</Text>
            </CardHeader>
            <CollapsibleCardBody numCollapsedLines={15} maxW="60ch">
              <Heading as="h4" size="sm">
                Co-founder, Lead Software Engineer
              </Heading>
              <Text fontSize="xs">2013-2015</Text>
              <UnorderedList>
                <ListItem>
                  Lead a team of engineers in the design, implementation, and
                  maintenance of Collabrify client libraries for iOS and
                  Javascript
                </ListItem>
                <ListItem>
                  Held talks in developer meetups to demonstrate and promote the
                  usage of the Collabrify client library
                </ListItem>
                <ListItem>
                  Wrote documentation, developer guide, and sample applications
                  to showcase the capabilities of the Collabrify platform, also
                  to be used in developer tutorials
                </ListItem>
                <ListItem>
                  Designed and built Collabrify Cobrowse, a cloud based
                  no-install web application that synchronizes browser state and
                  content in real time over the Internet to allow users to
                  browse the web together
                </ListItem>
              </UnorderedList>
            </CollapsibleCardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading as="h3" size="md">
                <Link href="https://www.imlc.io/">
                  Intergalactic Mobile Learning Center (University of Michigan)
                </Link>
              </Heading>
              <Text>Ann Arbor, Michigan</Text>
            </CardHeader>
            <CollapsibleCardBody numCollapsedLines={15} maxW="60ch">
              <Heading as="h4" size="sm">
                Lead Software Engineer
              </Heading>
              <Text fontSize="xs">2011-2013</Text>
              <Text>
                Lead software engineer of a team studying improvements on early
                learning efficiency through collaborative apps
              </Text>
              <UnorderedList>
                <ListItem>
                  Built Collabrify - a platform that enables applications to
                  synchronize data in real time, runs on AWS
                </ListItem>
                <ListItem>
                  Co-designed the next iteration of the Collabrify platform to
                  run in Google App Engine, improving its scalability and
                  reliability
                </ListItem>
                <ListItem>
                  Designed and built the Collabrify client library for Android
                  to broadcast and listen to data change events
                </ListItem>
                <ListItem>
                  Created WeMap and WeSketch, a concept mapping and
                  drawing/animation tool on Android, with real-time
                  collaboration
                </ListItem>
                <ListItem>
                  Lead a group of students in creating a suite of real-time
                  collaborative mobile applications to be used in schools as
                  well as a Learning Management System to synchronize and back
                  up student files
                </ListItem>
                <ListItem>
                  Maintained MyDesk, a suite of educational mobile applications
                  for Windows Phone used in Nan Chiau Primary School, Singapore
                </ListItem>
              </UnorderedList>
            </CollapsibleCardBody>
          </Card>
        </VStack>
      </GridItem>
      <GridItem area="education">
        <VStack align="flex-start" alignItems="stretch">
          <Heading as="h2" size="lg">
            Education
          </Heading>
          <Card size="sm">
            <CardBody>
              <Heading as="h3" size="sm">
                University of Michigan
              </Heading>
              <Text fontSize="xs">Ann Arbor, Michigan</Text>
              <Text>M.S.E Computer Science and Engineering</Text>
              <Text fontSize="xs">2013</Text>
              <Text fontSize="xs">GPA: 7.00/8.00</Text>
              <Divider my={4} />
              <Heading as="h3" size="sm" mt={1}>
                University of Michigan
              </Heading>
              <Text fontSize="xs">Ann Arbor, Michigan</Text>
              <Text>B.S.E. Computer Science and Engineering</Text>
              <Text fontSize="xs">2011</Text>
              <Text fontSize="xs">GPA: 3.55/4.00</Text>
            </CardBody>
          </Card>
        </VStack>
      </GridItem>
      <GridItem area="award">
        <VStack align="flex-start" alignItems="stretch">
          <Heading as="h2" size="lg">
            Awards
          </Heading>
          <Card size="sm">
            <CardBody>
              <Heading as="h3" size="sm">
                Magna Cum Laude
              </Heading>
              <Text>University of Michigan</Text>
              <Text fontSize="xs">2011</Text>
            </CardBody>
          </Card>
        </VStack>
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
