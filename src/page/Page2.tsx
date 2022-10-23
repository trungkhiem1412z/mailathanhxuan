import React, { useEffect } from 'react'

const Page2 = () => {
    useEffect(() => {
        document.title = "Page 2"
    })
    return (
        <div>Page2</div>
    )
}

export default Page2