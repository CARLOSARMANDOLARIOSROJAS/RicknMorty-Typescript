import React from "react";
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Character } from "../models/type";

interface CharacterCardProps {
    props: Character ;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ props }) => {
    return (
        <Card maxW="sm" boxShadow="lg" borderRadius="lg">
            <CardBody>
                <Image
                    src={props.image}
                    alt={props.name}
                    borderRadius="lg"
                />
                <Box mt={4}>
                    <Heading size="md" mb={2}>{props.name}</Heading>
                    <Text>ID: {props.id}</Text>
                    <Text>Location: {props.location.name}</Text>
                    <Text>Species: {props.species} 🤪</Text>
                </Box>
            </CardBody>
        </Card>
    );
};

export default CharacterCard;
