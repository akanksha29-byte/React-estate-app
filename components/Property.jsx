import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ property }) => {
  const {
    title,
    externalId,
    coverPhoto,
    isVerified,
    price,
    rentFrequency,
    agency,
    rooms,
    baths,
    area,
  } = property;
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex flexWrap="wrap" w="400px" p="5" justifyContent="flex-start" cursor="pointer">
        <Box>
          <Image src={coverPhoto ? coverPhoto?.url: ""}  width={400} height={260} alt={`house-${coverPhoto?.externalId}`}/>
        </Box>
        <Box w="full">
          <Flex py="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
               <Box paddingRight="3" color="green.300">{isVerified && <GoVerified />}</Box>
               <Text fontWeight="bold" fontSize="lg">{`${millify(price)} ${rentFrequency ? `/ ${rentFrequency}` : ''}`}</Text>
            </Flex>
             <Box>
                <Avatar size="sm" src={agency?.logo?.url} />
              </Box>
          </Flex>
          <Flex alignItems="center" p="1" justifyContent="space-between" width="250px" color="blue.400">
             {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text>
              {title?.length > 30 ? `${title?.substring(0, 30)}...`: title}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default Property;