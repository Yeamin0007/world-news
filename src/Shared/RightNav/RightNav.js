import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 rounded-0' variant="outline-success"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button className='rounded-0 mb-2' variant="outline-dark"><FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
            <div
            className='mt-2'>
                <h4>Find us on</h4>

          <ListGroup>
            <ListGroup.Item className='mb-2 rounded'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2 rounded'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
            <ListGroup.Item className='mb-2 rounded'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2 rounded'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2 rounded'><FaDiscord></FaDiscord> Discord</ListGroup.Item>
          </ListGroup>

            </div>

            <div className='mt-4'>

                <h6> <span className='text-warning'>"House Of The Dragon"</span> Finale This Sunday. </h6>


            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fdn.gsmarena.com/imgroot/news/22/10/oppo-reno8-pro-hotd-edition/inline/-1200/gsmarena_004.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://tomandlorenzo.com/wp-content/uploads/2022/07/House-of-the-Dragon-Los-Angeles-Premiere-HBO-Style-Fashion-Red-Carpet-Tom-Lorenzo-Site-0.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thecosmiccircus.com/wp-content/uploads/2022/05/Untitled_design_43.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
            </div>

             </div>
    );
};

export default RightNav;