/* eslint-disable react/prop-types */
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
import { useNavigate } from "react-router-dom";
import bookieImage from "../assets/images/home_img/Bookie.webp";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const images = importAll(
  require.context(
    "../assets/images/home_img",
    false,
    /\.(png|jpe?g|svg|webp)$/,
  ),
);

export default function Cards({ project }) {
  const navigate = useNavigate();

  const goToDescription = () => {
    navigate(`/description/${project.id}`);
  };
  return (
    <Card
      key={project.id}
      maxW={{ base: "100%", sm: "sm", md: "md", lg: "lg" }}
      m="4"
      height="30rem"
      width="25rem"
    >
      {" "}
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Image
          src={project.id === 1 ? bookieImage : images[project.image]}
          alt={project.name}
          borderRadius="lg"
          height="210px"
          width="100%"
        />
        <Stack mt="6" spacing="3" flexGrow="1">
          {" "}
          <Heading size="md" noOfLines={2}>
            {" "}
            {project.name}
          </Heading>
          <Text noOfLines={3}> {project.description}</Text>
          <Text color="blue.600" fontSize="sm">
            Langages utilisés : {project.languages.join(", ")}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup
          spacing="2"
          mt={2}
          display="inline-flex"
          justifyContent="center"
          alignItems="baseline"
          alignContent="center"
          flexDirection="row"
          width="100%"
          gap="15%"
        >
          <Button variant="solid" colorScheme="blue" onClick={goToDescription}>
            Description
          </Button>
          <a href={project.Link_Git} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" colorScheme="blue">
              Mon code Git
            </Button>
          </a>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
