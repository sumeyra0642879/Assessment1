import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 md"
              src="https://egitimikursu.com/blog/wp-content/uploads/2017/05/insan-kaynaklar%C4%B1-uzmanl%C4%B1%C4%9F%C4%B1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              // src="https://www.erainsankaynaklari.com.tr/images/haberler/0_8388e.jpg"
              src="https://www.akcakontrplak.com/wp-content/uploads/insan-kaynaklari.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="http://www.personelalimi.web.tr/wp-content/uploads/2018/05/A101-is-basvurusu-belgeler.jpg"
              alt="Third slide"
            />
             <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              </Carousel>

      </div>
    )
  }
}
