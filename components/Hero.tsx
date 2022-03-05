import React from 'react'
const Hero = () => {
    const containerStyle = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        background: 'linear-gradient(90deg, rgba(183,121,185,1) 0%, rgba(254,221,255,1) 44%, rgba(233,0,255,1) 100%);'
    }
    return(
    <div style={containerStyle}>
        <h1>Hi</h1>
    </div>
    )
    
}
export default Hero
