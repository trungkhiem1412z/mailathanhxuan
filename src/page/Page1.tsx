import React, { useEffect } from 'react'

const Page1 = () => {
    useEffect(() => {
        document.title = "Page 1"
    })
    
    return (
        <div>Page1</div>
    )
}

export default Page1