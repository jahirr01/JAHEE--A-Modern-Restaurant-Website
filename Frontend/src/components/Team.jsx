import React from 'react'
import { data } from '../restApi.json'
const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>Our Team</h1>
                <p>We don’t just cook; we create. Every plate is a shared vision, a masterpiece born from teamwork</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(Element=>
                    {
                        return(
                            <div className="card" key={Element.id}>
                                <img src={Element.image} alt={Element.name}></img>
                                <h3>{Element.name}</h3>
                                <p>{Element.designation}</p>
                            </div>
                        )
                    }
                    )
                }
                        
                    
                
            </div>
        </div>
      
    </section>
  )
}

export default Team
