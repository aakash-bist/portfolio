import React from "react";
import { Modal, Col, Button } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "../../Assets/CSS/DetailModal.css";
import "../../Assets/CSS/About.css";
import Tilt from "react-parallax-tilt";
import 'react-awesome-slider/dist/styles.css';
 

const DetailModal = (props) => {
  const project = props.projectDetails;
  return (
    <Modal show={props.showModal} onHide={() => props.setShowModal(false)} size={"lg"}>
      {/* <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
      <div className="about_card">
                <span className="modal_project_title">{project.title}</span>
                <Button variant="danger" className="close_modal" onClick={()=> props.setShowModal(false)}><i class="fa fa-times" aria-hidden="true"></i></Button>
              <div className="about_card_dots">
                <span></span>
                <span></span>
                <span></span>
                {/* <span closeButton></span> */}
              </div>
              <div className="modal_about_content">
        <AwesomeSlider animation="cubeAnimation">
            {project?.images?.map((item,i)=> <div key={i} data-src={item} />)}
        </AwesomeSlider>
              </div>
            </div>

      </Modal.Body>
      <Modal.Footer className="modal_footer">
        <p>{project.description}</p>
          {project?.technologies?.map((item,i)=>      
          <Tilt key={i}>
      <Col xs={4} md={2} className="tech_icons">
        <div className="d-flex align-items-center flex-column">
        <i className={`${item.class} tech_icon_images`}></i>
        <span>{item.name}</span>
        </div>
      </Col>
      </Tilt>)}
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
