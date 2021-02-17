import styled from 'styled-components';

import { assets, colors } from 'utils/styles';

export const ParalaxRoot = styled.div`
  position: relative;
  top: 0;
  height: 1000px;
  width: 100%;
  min-width: 720px;
  background-position: 0 center;
`;

export const TitleContainer = styled.div`
  display: block;
  position: relative;
  top: 60px;
  width: 100%;
  min-width: 720px;
  height: 300px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: auto;
  display: block;
  width: 655px;
  height: 150px;
  background-size: cover;
  text-align: center;
  position: relative;

  background-image: ${`url(${assets.titleImg})`};
`;

export const Info = styled.h2`
  font-family: Comfortaa;
  width: 525px;
  margin: auto;
  font-size: 24px;
  color: #15231a;
  display: block;
  margin-top: 40px;
`;

export const Foreground = styled.div`
  display: block;
  height: 100%;
  bottom: 160px;
  width: 100%;
  min-width: 720px;
  position: absolute;
  background-position: center;
  background-image: ${`url(${assets.foregroundImg})`};
`;

export const Layer1 = styled.div`
  position: fixed;
  display: block;
  height: 1000px;
  bottom: 100px;
  width: 100%;
  min-width: 720px;
  background-position: center;
  background-image: ${`url(${assets.layer1Img})`};
`;

export const Layer2 = styled.div`
  position: fixed;
  display: block;
  height: 1100px;
  bottom: 50px;
  width: 100%;
  min-width: 720px;
  background-position: center;
  background-image: ${`url(${assets.layer2Img})`};
`;

export const Layer3 = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  min-width: 720px;
  pointer-events: none;
  overflow: hidden;
  height: 800px;
  background-position: center;
  background-image: ${`url(${assets.layer3Img})`};
`;

export const Background = styled.div`
  background-image: ${`url(${assets.backgroundImg})`};
  display: block;
  background-position: center;
  width: 100%;
  min-width: 720px;
  height: 1000px;
  background-repeat: repeat-x;
  bottom: 100px;
  position: fixed;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 800px;
  color: ${colors.textPrimary};
  background-color: ${colors.contentBackground};
`;
