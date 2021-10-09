import React from 'react'
import Card from 'react-bootstrap/Card'


const New = ({title,description,date,content,author,archiveDate}) => {

    const pape = (e) => {
        console.log(e)
    }


    return (
        <Card style={{ width: '90%' }} className="my-3">
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Card.Text>{content}</Card.Text>
            <Card.Footer >

            <div className="row">
                <div className="col">
                    Date: {date} 
                </div>
                <div className="col">
                    Author: {author}
                </div>
                <div className="col">
                    <img 
                        role='button'
                        src="./eye-off.png"
                        width="30"
                        height="30"                    
                        onClick={pape}
                        >
                    </img>
                </div>
            </div>
                
            </Card.Footer>
        </Card.Body>
        </Card>
    )
}


export default New
