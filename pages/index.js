import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Property from '../components/Property';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import styles from '../styles/Home.module.css'

const Banner = ({ title1, title2, desc1, desc2, buttonText, linkPage, purpose = "", imageUrl }) => {
  return <Flex flexWrap="wrap" m="10" justifyContent="center" alignItems="center">
    <Image src={imageUrl} width="500" height="300" alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/> {title2}</Text>
      <Text fontSize="xl" py="4" color="gray.700">{desc1} <br/> {desc2}</Text>
      <Button fontSize="xl" px="20" py="10">
        <Link href={linkPage}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
}

export default function Home({ forRent, forSale}) {
  return (
    <Box>
      <Banner 
        purpose='RENT A HOME' 
        title1="Rental Homes for" 
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkPage="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
       {
        forRent?.map(property => {
          return <Property property={property} key={property?.id} />
        })
       }
      </Flex>
       <Banner 
        purpose='BUY A HOME' 
        title1="Find, Buy & Own Your" 
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkPage="/search?purpose=buy"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
       <Flex flexWrap="wrap">
       {
        forSale?.map(property => {
          return <Property property={property} key={property?.id} />
        })
       }
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  
  return {
    props: {
     forRent: propertyForRent?.hits,
     forSale: propertyForSale?.hits,
    }
  }
}