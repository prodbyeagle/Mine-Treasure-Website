import Image from 'next/image'
import React from 'react'
import Card from '../Card'

const Navbar = () => {
    return (
        <Card background={"#00a6ed"}>
            <p className='text-4xl font-mono text-center font-bold'>Mine Treasures</p>
        </Card>
    )
}

export default Navbar