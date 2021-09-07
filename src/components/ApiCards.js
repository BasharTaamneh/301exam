import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Datacards extends Component {

    render() {
        return (
            <div>
                {this.props.Apidata.map((item, idx) => {
                    return (<Card key={idx}style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.src} />
                        <Card.Body>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() =>this.props.addTofavorite(item)}>Add to favorites</Button>
                        </Card.Body>
                    </Card>)
                })
                }
            </div>
        )
    }
}

export default Datacards;
