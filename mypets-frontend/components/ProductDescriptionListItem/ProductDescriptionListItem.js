import React from 'react'
import { ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

function ProductDescriptionListItem({ description }) {

    const capitaliseFirstLetter = (string) => {
        string = string.replace(/^ /, '');
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <ListItem>
            <ListIcon as={CheckCircleIcon} color='mypets.100'/>
            {capitaliseFirstLetter(description)}
        </ListItem>
    )
}

export default ProductDescriptionListItem
