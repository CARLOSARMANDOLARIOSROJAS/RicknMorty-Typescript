import "./App.css";
import useFetchCharacters from "./custom_hooks/useFetchCharacters";
import { Box, Spinner, Stack, Heading } from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard";

const App: React.FC = () => {
  const { characters, error, loading } = useFetchCharacters();

  if (loading) {
    return (
      <Box textAlign="center" mt={8}>
        <Spinner />
        <p>Cargando...</p>
      </Box>
    );
  }

  if (error) {
    return <div className="">Error: {error}</div>;
  }

  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4} textAlign="center" color="teal.500">
        Rick and Morty characters
      </Heading>

      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={4}
        justifyContent="center"
      >
        {characters.map((item) => (
          <CharacterCard key={item.id} props={item} />
        ))}
      </Stack>
      
    </Box>
  );
};

export default App;
