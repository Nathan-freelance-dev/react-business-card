import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import avatar from '../assets/avatar.png'

import * as hiIcons from 'react-icons/hi'
import * as aiIcons from 'react-icons/ai'

const BusinessCard = ({themeClass}) => {
     return (
          <>
               <Card className={themeClass}>
                    <Card.Img variant="top" src={avatar} className="border-bottom pb-3" alt="Nathaniel Joseph" />
                    <Card.Body>
                         <Card.Title className='text-center fs-3 fw-bold'>Nathaniel Joseph</Card.Title>
                         <h6 className='text-primary text-center'>Front-end Developer</h6>
                         <div className='text-center'>
                              <a href='https://nathanfreelance.netlify.app/' rel='noreferrer' target={"_blank"} className='text-primary text-decoration-underline fw-light'><small>
                                        nathanfreelance.netlify.app
                                   </small></a>
                         </div>

                         <Row className='mt-3 text-center'>
                              <Col>
                                   <a href='mailto:nathanfreelancedev@gmail.com' className='text-decoration-none'>
                                        <Button className='w-100 d-flex justify-content-center' variant="primary"><hiIcons.HiOutlineMail className="me-2 fs-4" /> Email</Button>
                                   </a>
                              </Col>

                              <Col>
                                   <a href='https://www.linkedin.com/in/nathaniel-joesph-50780423b/' className="text-decoration-none">
                                        <Button className='w-100 d-flex justify-content-center' variant="outline-primary"><aiIcons.AiOutlineLinkedin className="me-2 fs-4" /> LinkedIn</Button>
                                   </a>
                              </Col>
                         </Row>

                         <h5 className='mt-4'>About</h5>

                         <Card.Text>
                              <small className='text-muted'>
                                   I am a front-end developer with a particular interest in making thigns simple and automating daily task. I try to keep up with security and best practices, and am always looking for new thigns to learn.
                              </small>
                         </Card.Text>
                    </Card.Body>
               </Card>
          </>
     )
}

export default BusinessCard