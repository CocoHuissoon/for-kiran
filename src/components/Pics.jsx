import React from "react";
import one from "./resources/images/1.jpg"
import two from "./resources/images/2.jpg"
import three from "./resources/images/3.jpg"
import {Carousel} from "react-bootstrap";

const Pics = () => {
    

    return (

        <div className={"App-header"} id={"pics"} >
        <Carousel>
            <Carousel.Item>
                <img
                    className="img-rounded"
                    src={one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-rounded"
                    src={two}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-rounded"
                    src={three}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Pics;
