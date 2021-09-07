import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class MyFavoritescards extends Component {

    
    render() {
        return (
            <div>
                {this.props.Fvdata.map((item, idx) => {
                    return (<Card key={idx}style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.src} />
                        <Card.Body>
                            <Card.Text>
                                {item.description}
                            </Card.Text>

                            <Button variant="primary" onClick={() =>{this.props.showmodalhandle();this.props.getfavid(item._id)}}>update favorites</Button>

                            <Button variant="primary" onClick={() => this.props.deleteFavorite(item._id)}>Delete favorites</Button>

                        </Card.Body>
                    </Card>)
                })
                }
                
            </div>
        )
    }
}

export default MyFavoritescards;
