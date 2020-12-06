import styled from '@emotion/styled';
import React from 'react';
import Icon from './icon';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';
import StyledSkewedSection from './skewed-section';

const StyledContactSection = styled(StyledSkewedSection)`
  margin-bottom: 70px;
`;
const StyledContainer = styled.section`
  display: flex;
  align-items: center;

  & > svg {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  & > span {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--primary-color);

  font-weight: normal;
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
  width: 100%;
  max-width: 800px;
  margin-left: 3px;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 50%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-top: 2rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledEmail = styled.a`
      font-size: 0.75rem;
    font-weight: 500;
    color: white!important;
`

const Contact = ({ data }) => {
  const {
    frontmatter: { phone, email, address, header },
    html,
  } = data;

  return (
    <React.Fragment>
      <StyledContactSection id="contact">
        <StyledH1>{header}</StyledH1>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: html }} />
        <StyledSeparator />
        <StyledContacts>
          {address && (
            <StyledContainer>
              <Icon icon="building" />
              <StyledFormContainer>
                <StyledForm>Location</StyledForm>
                <span>{address}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {email && (
            <StyledContainer>
              <Icon icon="paper-plane" />
              <StyledFormContainer>
                <StyledForm>E-Mail</StyledForm>
                <StyledEmail href={`mailto:${email}`}>{email}</StyledEmail>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {phone && (
            <StyledContainer>
              <Icon icon="mobile-alt" />
              <StyledFormContainer>
                <StyledForm>Phone Number</StyledForm>
                <span>{phone}</span>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledContactSection>
    </React.Fragment>
  );
};

export default Contact;
