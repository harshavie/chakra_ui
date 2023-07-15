import {AiOutlineSend} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai'
import { Box,Stack,VStack,Heading,HStack, Button,Input,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box 
        bgColor={"blackAlpha.900"} 
        minH={'40'} 
        p={'16'}
        color={'white'}        
        >
        <Stack direction={['column','row']}>
            <VStack
                alignItems={'stretch'}
                w={'full'}
                px={'4'}
            >
                <Heading size={'md'} textTransform={'uppercase'}
                textAlign={'center'}
                >
                    Subscribe to get Updates
                </Heading>
                <HStack
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                <Input 
                    placeholder='Enter Email Here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor={'none'}
                />
                    <Button
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
                w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO IT</Heading>
                <Text>All Rights Reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading 
                size={'md'} 
                textTransform={'uppercase'}>SOCIALS</Heading>
                <HStack>
                <Button m={'2'}variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target='blank'href="https://youtube.com">
                        <AiOutlineYoutube size={'40'}/>
                    </a>
                </Button>
                <Button m={'2'} variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target='blank' href="https://instagram.com">
                        <AiOutlineInstagram size={'40'}/>
                    </a>
                </Button>
                <Button m={'2'} variant={'link'} colorScheme={'whiteAlpha'}>
                    <a target='blank' href="https://twitter.com">
                        <FaTwitterSquare size={'40'}/>
                    </a>
                </Button>
                </HStack>
            </VStack>
            




        </Stack>
    </Box>
  )
}

export default Footer