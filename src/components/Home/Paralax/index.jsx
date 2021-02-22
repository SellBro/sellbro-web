import React from 'react';
import PropTypes from 'prop-types';

import { strings } from 'data';

import * as S from './styled';

class Paralax extends React.Component {
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
    const layers = document.getElementsByClassName('paralax');
    for (let i = 0; i < layers.length; i += 1) {
      const speed = layers[i].getAttribute('data-scale');
      const yOffset = -(this.scrollPosition * speed) / 100;
      layers[i].style.transform = `translate3d(0, ${yOffset}px, 0)`;
    }
  };

  handleScroll = () => {
    this.scrollPosition = window.pageYOffset;
    this.moveParalax();
  };

  render() {
    const { children } = this.props;
    return (
      <S.ParalaxRoot>
        <S.Background id="background" className="paralax" data-scale="4" />
        <S.Layer1 id="layer1" className="paralax" data-scale="10" />
        <S.Layer2 id="layer2" className="paralax" data-scale="15" />
        <S.Layer3 id="layer3" className="paralax" data-scale="20" />
        <S.TitleContainer id="title" className="paralax" data-scale="-60">
          <S.Title />
          <S.Info>{strings.title.heading2}</S.Info>
        </S.TitleContainer>
        <S.Foreground id="foreground" className="paralax" data-scale="0" />
        <S.Content>{children}</S.Content>
      </S.ParalaxRoot>
    );
  }
}

Paralax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paralax;
