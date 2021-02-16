import styled from 'styled-components';

import { assets, colors } from 'utils/styles';

export const TitleContainer = styled.div`
  display: block;
  position: absolute;
  top: 75px;
  width: 100%;
  min-width: 720px;
  height: 300px;
  text-align: center;
  z-index: -50;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: normal;
  display: block;
  overflow: hidden;
  margin: auto;
  width: 591px;
  height: 0;
  padding-top: 150px;
  background-image: ${`url(${assets.titleImg})`};
`;

export const Info = styled.h2`
  width: 525px;
  margin: auto;
  font-size: 23px;
  color: #15231a;
  display: block;
  margin-top: 40px;
`;

export const Foreground = styled.div`
  position: absolute;
  width: 100%;
  min-width: 720px;
  pointer-events: none;
  overflow: hidden;
  height: 100%;
  background-image: ${`url(${assets.foregroundImg})`};
  background-size: cover;
`;

export const Background = styled.div`
  background-image: ${`url(${assets.backgroundImg})`};
  background-position: center 0;
  width: 100%;
  min-width: 720px;
  height: 835px;
  display: block;
  position: absolute;
  top: 0;
  z-index: -100;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 710px;
  color: ${colors.textPrimary};
  background-color: ${colors.contentBackground};
`;