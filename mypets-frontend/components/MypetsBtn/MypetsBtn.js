import React from 'react'
import { Button } from '@chakra-ui/react'

function MypetsBtn({ w, btnText, mt, onClick, isLoading, type, variant='solid', isDisabled }, props) {
    return (
        <Button
            mt={mt}
            variant={variant}
            bgGradient={ (variant === 'solid') && "linear(to-t, mypets.900, mypets.100)"}
            borderColor={(variant !== 'solid') && 'mypets.100'}
            boxShadow="sm"
            _hover={(variant === 'solid') ? { boxShadow: "lg", textColor: "white"} : { boxShadow: "lg", textColor: "mypets.100"}}
            _active={(variant === 'solid') ? {
                textColor: "white",
                transform: "scale(0.95)"
            } : {
                textColor: "mypets.100",
                transform: "scale(0.95)"
            }}
            onClick={onClick}
            isLoading={isLoading}
            type={type}
            w={w}
            minHeight={10}
            isDisabled={isDisabled}
            {...props}
        >
            {btnText}
        </Button>
    )
}

export default MypetsBtn
