import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../src/assets/images/,.NET.gif';
import image2 from '../src/assets/images/3D modeling.gif';
import image3 from '../src/assets/images/Arduino.gif';
import image4 from '../src/assets/images/Artificial Intelligence.webp';
import image5 from '../src/assets/images/Augmented Reality.jpg';
import image6 from '../src/assets/images/Back-End Develpoment.jpeg';
import image7 from '../src/assets/images/Blockchain.jpeg';
import image8 from '../src/assets/images/Blynk IoT.jpg';
import image9 from '../src/assets/images/CBIR (Content-Based Image Retrieval).jpeg';
import image10 from '../src/assets/images/Cloud.jpg';
import image11 from '../src/assets/images/Data analysis.jpg';
import image12 from '../src/assets/images/Desktop Application.jpeg';
import image13 from '../src/assets/images/Digital Twinning.jpg';
import image14 from '../src/assets/images/Embedded Systems.jpeg';
import image15 from '../src/assets/images/ESP32.jpg';
import image16 from '../src/assets/images/Fire base.jpg';
import image17 from '../src/assets/images/Flutter.jpeg';
import image18 from '../src/assets/images/Flutter.jpg';
import image19 from '../src/assets/images/Front-End-Development.jpg';
import image20 from '../src/assets/images/Full Stack Development.jpeg';
import image21 from '../src/assets/images/Game Development.jpeg';
import image22 from '../src/assets/images/Hockey.jpg';
import image23 from '../src/assets/images/Industrie 4.0.jpg';
import image24 from '../src/assets/images/IoT.jpg';
import image25 from '../src/assets/images/Ladder Logic.jpg';
import image26 from '../src/assets/images/Logo creation.webp';
import image27 from '../src/assets/images/Machine learning.jpeg';
import image28 from '../src/assets/images/Mechatronics.jpg';
import image29 from '../src/assets/images/MERN development.jpeg';
import image30 from '../src/assets/images/Mobile Applications.jpeg';
import image31 from '../src/assets/images/Music Production.jpg';
import image32 from '../src/assets/images/Node Red.jpg';
import image33 from '../src/assets/images/PCB Designer.jpg';
import image34 from '../src/assets/images/Posters.jpg';
import image35 from '../src/assets/images/React.jpg';
import image36 from '../src/assets/images/Rigging.jpg';
import image37 from '../src/assets/images/Robotics.jpeg';
import image38 from '../src/assets/images/Software Development.png';
import image39 from '../src/assets/images/Space Rocket.jpg';
import image40 from '../src/assets/images/Virtual Reality.jpeg';
import image41 from '../src/assets/images/Web3.png';
import image42 from '../src/assets/images/z.jpg';


const Menu = () => {
    // Define an array of image filenames (statically imported)
    const imageFilenames = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,image41,image42]; // Add more images here

    const getImageNameWithoutExtension = (filename) => {
        // Remove the file extension from the filename
        const parts = filename.split('/').pop().split('.');
        const nameWithoutExtension = parts.slice(0, parts.length - 1).join('.');
        return nameWithoutExtension;
    };

    return (
        <div>
            <h1 style={{ marginLeft: '40px' }}>Menu:</h1>
            <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {imageFilenames.map((filename, index) => (
                    <Card key={index} style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={filename} alt={`Image ${index}`} style={{ height: '9rem' }} />
                        <Card.Body>
                            <Card.Title>{getImageNameWithoutExtension(filename)}</Card.Title> {/* Display image name without extension as Card Title */}
                            <Card.Text>
                                Check out the content below.
                            </Card.Text>
                            <Button variant="primary">Dive into more</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Menu;
