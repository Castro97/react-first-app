import {
  Box,
  VStack,
  Grid,
} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Logo } from "../Logo"
import {List} from "./List"

export const Principal = () =>{

    return(
        <Box textAlign="center" fontSize="xl">
        <Grid>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Logo</Tab>
                    <Tab>List</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <VStack justify='center' mt='10em'>
                        <Logo h="30vmin" pointerEvents="none" />
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <List/>
                    </TabPanel>
                </TabPanels> 
            </Tabs>
        </Grid>
    </Box>
    );
}