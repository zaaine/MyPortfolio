import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import projectsData from "../assets/BDD_JSON/projects.json";
import bookieImage from "../assets/images/Bookie.jpeg";

export default function Cards() {
  return (
    <div>
      {projectsData.projects.map((project) => (
        <Card key={project.id} maxW="sm" m="4">
          {" "}
          <CardBody>
            <Image
              src={project.id === 1 ? bookieImage : project.image}
              alt={project.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.name}</Heading>{" "}
              <Text>{project.description}</Text>
              <Text color="blue.600" fontSize="sm">
                Langages utilisés : {project.languages.join(", ")}{" "}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Description
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Mon code Git
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
