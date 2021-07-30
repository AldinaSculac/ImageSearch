import React from 'react';
import {
  Box,
  Image,
  Badge 
} from "@chakra-ui/react";

const PicItem = (props) => {

  const {pic} = props;

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
      <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      width={{ base: "100%", sm: "100%", md: "100%" }}
      >
      <Image src={pic.urls.regular} alt={pic.urls.regular} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {pic.tags ?
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {pic.tags[0].title}
          </Badge>
          : null
          }
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {pic.user.first_name} {pic.user.last_name}
          <p>@{pic.user.username}</p>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {pic.likes} likes
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PicItem;
