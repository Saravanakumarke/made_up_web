import React, { Component } from 'react'
import './Slider.css'
import shirtImg from '../../assets/images/shirt.png'
import pantsImg from '../../assets/images/pants.png'

/* custom slider implementation without any external libraries - still lot can be improved*/
export default class Slider extends Component {

    render () {
        return (
            <div className="slider-container">
                <p className="slider-heading"><span>LATEST COLLECTIONS</span></p>
                <div id="slider" className="slider">
                    <div className="wrapper">
                        <div id="slides" className="slides desktopSlider">
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image1"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image1"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image2"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image2"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mobileslides" className="slides mobileSlider">
                            <div className="slide-image slide">
                                <img src={shirtImg} alt="shirt image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
