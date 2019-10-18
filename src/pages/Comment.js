import React from 'react';
import { Row, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../css/Comment.css';
import { FaSearch} from 'react-icons/fa';


const Comments = () => {
    return (
        <Card className="mx-4 mb-4 mt-4 px-2">
            <Card.Header className="bg-white py-3 px-1 d-flex">
                <div className="col-md-6">
                    <h6 className="font-weight-bold">Observations / Comment History</h6>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="col-md-7">
                        <p><h6 className="float-right"><FaSearch /></h6></p>
                    </div>
                    <div className="col-md-5">
                        <h6 className="float-right font-weight-bold text-success">Add new comment</h6>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Row className="commentsTitles py-3 px-1 mx-3">
                    <div className="col-md-1">
                        <p className="mb-0">Date</p>
                    </div>
                    <div className="col-md-2 font-weight-bold">
                        <p className="mb-0">Interview Title</p>
                    </div>
                    <div className="col-md-7">
                        <p className="mb-0">Comments</p>
                    </div>
                    <div className="col-md-2">
                        <p className="mb-0 text-center">Action</p>
                    </div>
                </Row>
                <Row className="py-4 px-1 mx-3">
                    <div className="col-md-1 fontsize">
                    <p className="font-weight-bold">21/08/2019</p>
            </div>
                    <div className="col-md-2 fontsize">
                        <p className="font-weight-bold">Cognizant Interview</p>
                    </div>
                    <div className="col-md-7 month">
                        <p>Pass in the url prop of your social network, and the icon will be rendered.</p>
                    </div>
                    <div className="col-md-2 d-flex text-center">
                        <p className="mr-2"><Link to="" className="text-success fontsize float-left">Edit</Link></p>
                        <p className="ml-2"><Link to="" className="text-danger fontsize float-left">Delete</Link></p>
                    </div>
                </Row>
                <Row className="py-4 px-1 mx-3">
                    <div className="col-md-1">
                        <p className="font-weight-bold">21/08/2019</p>
                    </div>
                    <div className="col-md-2">
                        <p className="font-weight-bold">Cognizant Interview</p>
                    </div>
                    <div className="col-md-7 month">
                        <p>Pass in the url prop of your social network, and the icon will be rendered.</p>
                    </div>
                    <div className="col-md-2 d-flex">
                    <p className="mr-2"><Link to="" className="text-success fontsize float-left">Edit</Link></p>
                        <p className="ml-2"><Link to="" className="text-danger fontsize float-left">Delete</Link></p>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default Comments;