import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageurl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageurl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
