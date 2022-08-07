import { useEffect, useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

export const List = ()=>{
    const [fetchResponse, setfetchResponse] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(setfetchResponse)
    },[])

    return(
        <TableContainer>
        <Table variant='simple' size='lg'>
            <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>E-mail</Th>
                <Th>ID</Th>
            </Tr>
            </Thead>
            <Tbody>
                {fetchResponse.map((value: any)=>{
                    return(
                        <Tr>
                            <Td>{value.name}</Td>
                            <Td>{value.email}</Td>
                            <Td>{value.id}</Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
        </TableContainer>
    )

}