import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import {  Form, Modal } from 'react-bootstrap';


class Updatemodal extends Component {


    render() {
        // console.log('rrr',this.props);
        return (
            <div>
                <Modal show={this.props.show}>
                    <Modal.Header closeButton onHide={this.props.showmodalhandle}>
                        <Modal.Title>Update Favorites</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.updatefav}>
                            <Form.Control name="description" size="lg" type="text" defaultValue={this.props.Fvdata.description} />
                            <br />
                            <Form.Control name="src" size="lg" type="text" defaultValue={this.props.Fvdata.src} />
                            <br />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.showmodalhandle}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Updatemodal;
