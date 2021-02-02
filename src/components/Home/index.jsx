import React from 'react';
import { withTheme } from 'styled-components';

import { strings } from 'data';

import { Convex, Section } from 'components/Dividers';

import * as S from './styled';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPosition = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  moveParalax = () => {
    const offset1 = this.scrollPosition * 0.7;
    const offset2 = this.scrollPosition * 0.5;

    const layer1 = document.getElementById('background');
    const layer2 = document.getElementById('title');

    layer1.style.webkitTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.MozTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.msTransform = `translateY(${offset1}px)`;
    layer1.style.OTransform = `translate3d(0, ${offset1}px, 0)`;
    layer1.style.transform = `translate3d(0, ${offset1}px, 0)`;

    layer2.style.webkitTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.MozTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.msTransform = `translateY(${offset2}px)`;
    layer2.style.OTransform = `translate3d(0, ${offset2}px, 0)`;
    layer2.style.transform = `translate3d(0, ${offset2}px, 0)`;
  };

  handleScroll = () => {
    this.scrollPosition = Math.max(window.pageYOffset, 0);
    this.moveParalax();
  };

  render() {
    return (
      <>
        <S.Background id="background" />
        <S.TitleContainer id="title">
          <S.Title />
          <S.Info>{strings.title.heading2}</S.Info>
        </S.TitleContainer>
        <S.Foreground />
        <S.Content>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
          <Convex />
          <Section>Contacts</Section>
          <h1>Pepega</h1>
          <h1>Pepega</h1>
        </S.Content>
      </>
    );
  }
}

export default withTheme(Home);
