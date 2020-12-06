import styled from '@emotion/styled';
import React from 'react';
import { StyledSection } from './_shared/styled-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .number {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  & > .fact {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const Facts = () => {
  return (
    <StyledSection angle={10}>
      <StyledH1>Studies</StyledH1>
      <StyledLogoSection>
        <StyledFactNumber>
          <span className="number">Master of Science (2008)</span>
            <span className="fact">Applied Mathematics and Physics</span>
            <span className="fact">Specialization: Management and System Analysis</span>
            <span className="fact">Moscow Institute of Physics and Technology (State University)</span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">Bachelor of Science (2006)</span>
          <span className="fact">Applied Mathematics and Physics</span>
          <span className="fact">Specialization: Physical Processes Modeling</span>
          <span className="fact">Moscow Institute of Physics and Technology (State University)</span>
        </StyledFactNumber>
      </StyledLogoSection>
    </StyledSection>
  );
};

export default Facts;
