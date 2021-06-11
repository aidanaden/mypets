import React from 'react'
import { Button } from '@chakra-ui/react'

function MypetsBtn({ w, btnText, mt, onClick, isLoading, type, variant='solid', isDisabled, noAnimate=false, ...props }) {
    return (
        <Button
            mt={mt}
            variant={variant}
            bgGradient={ (variant === 'solid') && "linear(to-t, mypets.900, mypets.100)"}
            borderColor={(variant !== 'solid') && 'mypets.100'}
            boxShadow="sm"
            _hover={(variant === 'solid') ? 
                    { boxShadow: !noAnimate ? "lg" : "none" , textColor: "white"} 
                    : { boxShadow:!noAnimate ? "lg" : "none" , textColor: "mypets.100"}}
            _active={(variant === 'solid') 
            ? {
                textColor: "white",
                transform: !noAnimate ? "scale(0.95)" : "none"
            } 
            : {
                textColor: "mypets.100",
                transform: !noAnimate ? "scale(0.95)" : "none"
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
