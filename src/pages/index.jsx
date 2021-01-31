import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import title from '../images/title.png';
import background from '../images/background.jpg';
import foreground from '../images/foreground.png';

const TitleContainer = styled.div`
  display: block;
  position: absolute;
  top: 75px;
  width: 100%;
  min-width: 720px;
  height: 300px;
  text-align: center;
  z-index: -50;
`;

const Title = styled.h1`
  position: relative;
  font-weight: normal;
  display: block;
  overflow: hidden;
  margin: auto;
  width: 591px;
  height: 0;
  padding-top: 150px;
  background-image: url(${title});
`;

const Info = styled.h2`
  width: 525px;
  margin: auto;
  font-size: 23px;
  color: #15231a;
  display: block;
  margin-top: 40px;
`;

const Foreground = styled.div`
  position: absolute;
  width: 100%;
  min-width: 720px;
  pointer-events: none;
  overflow: hidden;
  height: 100%;
  background-image: url(${foreground});
  background-size: cover;
`;

const Background = styled.div`
  background-image: url(${background});
  background-position: center 0;
  width: 100%;
  min-width: 720px;
  height: 835px;
  display: block;
  position: absolute;
  top: 0;
  z-index: -100;
`;

const Content = styled.div`
  position: absolute;
  min-width: 720px;
  width: 100%;
  top: 710px;
  color: #ffffff;
  background-color: #1d154e;
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPosition = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  moveParalax = () => {
    const offset1 = this.scrollPosition * 0.7;

    const layer1 = document.getElementById('background');
    const layer2 = document.getElementById('title');

    layer1.style.webkitTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.MozTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.msTransform = `translateY(${offset1}px)`;
    layer1.style.OTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.transform = `translate3d(0, ${offset1}px, 0)`;

    const offset2 = this.scrollPosition * 0.5;

    layer2.style.webkitTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.MozTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.msTransform = `translateY(${offset2}px)`;
    layer2.style.OTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.transform = `translate3d(0, ${offset2}px, 0)`;
  };

  handleScroll = () => {
    console.log('render');
    this.scrollPosition = Math.max(window.pageYOffset, 0);
    this.moveParalax();
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Background id="background" />
        <TitleContainer id="title">
          <Title />
          <Info>Games and more</Info>
        </TitleContainer>
        <Foreground id="foreground" />
        <Content>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
        </Content>
      </Layout>
    );
  }
}

export default IndexPage;
