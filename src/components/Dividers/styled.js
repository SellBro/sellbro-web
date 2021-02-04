import styled from 'styled-components';

import { colors } from 'utils/styles';

export const DividerContainer = styled.div`
  background: ${colors.dividerBackground};
`;

export const DividerWrapper = styled.div`
  height: 200px;
  background: ${colors.dividerBackground};
  clip-path: polygon(0% 0%, 0% 20%, 50% 100%, 100% 20%, 100% 0%);
`;

export const DividerPolygon = styled.div`
  height: 100%;
  background: ${colors.contentBackground};
  clip-path: polygon(0% 0%, 50% 80%, 100% 0%);
`;

export const SectionContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const SectionHeading = styled.h2`
  color: ${colors.textSecondary};
  font-size: 40px;
`;
