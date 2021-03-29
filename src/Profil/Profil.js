import React from 'react'
import PropTypes from "prop-types";

const Profil = ({fullname , bio , profession ,children , handlalert}) => {

 
     
    return (
        <div style={{color:"blue" , textDecorationStyle:"wavy" , backgroundColor: "#cccccc" , margin:"30px 40px"}}>
            <button onClick={()=>handlalert(fullname , bio)} style={{backgroundColor: "blue"}} >name/bio</button>
            <h1>{fullname}</h1>
            <h1>{bio}</h1>
            <h1>{profession}</h1>
            {children}
            
        </div>
    )
}
Profil.defaultProps={fullname: 'no user' , bio: 'no user' , profession: 'no user'}
Profil.propTypes={
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profil
