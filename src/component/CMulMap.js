import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Text } from "@chakra-ui/react";

function CmulMap() {
  const users = {
    data: [
      {
        id: 0,
        name: "Sam",
        details: [
          {
            0: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/9/main-img-9.jpg",
          },
          {
            1: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/9/sub-img-9-1.jpg",
          },
          {
            2: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/9/sub-img-9-2.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "John",
        details: [
          {
            0: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/10/main-img-10.jpg",
          },
          {
            1: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/10/sub-img-10-1.jpg",
          },
          {
            2: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/10/sub-img-10-2.jpg",
          },
          {
            3: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/10/sub-img-10-3.jpg",
          },
          {
            4: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/10/sub-img-10-4.jpg",
          },
        ],
      },
      {
        id: 2,
        name: "Anil",
        details: [
          {
            0: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/8/main-img-8.jpg",
          },
          {
            1: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/8/sub-img-8-1.jpg",
          },
          {
            2: "https://bryan-test-2022.s3-ap-southeast-1.amazonaws.com/prd-img/8/sub-img-8-2.jpg",
          },
        ],
      },
    ],
  };

  return (
    <Box>
      <Text>Handle Nested Object React</Text>

      {users.data.map((item) => (
        <Box>
          <Text fontWeight='bold' margin={5}>
            {item.name}
          </Text>
          <Carousel>
            {item.details.map((sub) => (
              <Image src={Object.values(sub)} w='100px' h='400px' />
            ))}
          </Carousel>
        </Box>
      ))}
    </Box>
  );
}

export default CmulMap;
