import { useState } from 'react'
import {   
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from '@chakra-ui/react'
import { LockIcon, CheckIcon } from '@chakra-ui/icons'
import { IoMdEyeOff, IoMdEye } from 'react-icons/io'

function PasswordInputGroup({ field, valid, id }) {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)

    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<LockIcon />}
                />
                <Input
                    {...field}
                    id={id}
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    focusBorderColor='mypets.100'
                />
                <InputRightElement
                    children={<IconButton
                                icon={show == false ? <IoMdEye size='md' /> : <IoMdEyeOff size='md' />}
                                onClick={handleShow}
                                size='sm'
                            />}
                />
            </InputGroup>
        </>
    )
}

export default PasswordInputGroup
