import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './icon';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import cvGerman from '../assets/Olga_Piagareva.pdf';
import cvEnglish from '../assets/Olga_Pigareva_en.pdf';

const StyledFeaturedProject = styled.article`
  display: flex;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`;
const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledDescription = styled.section`
  ${contentBox}
  // max-height: 200px;
  position: relative;
  padding: 10px;
  margin: 0;
  max-width: 100%;
  background-color: var(--bg-color);

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;
const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--body-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  & svg {
    margin: 0 0.5rem;
  }
`;
const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const StyledA = styled.a`
  ${flexCenter};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }

  & > svg {
    height: 0.8rem;
    fill: currentColor;
    margin-left: 0.25rem;
    transition: margin-left var(--transition-fast) ease;
  }

  &:hover > svg {
    margin-left: 0.5rem;
  }
`

const StyledProjectTitle = styled(StyledContentLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const FeaturedProjects = ({ featured }) => {
  const featuredProjects = featured.map((project, index) => {
    // const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;
    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const duration = project.frontmatter.duration;
    // const demoLinkLabel = `featured project ${title} demo`;
    const repoLinkLabel = `featured project ${title} repo`;

    return (
      <StyledFeaturedProject key={title + index}>
        <StyledProjectInfoContainer>
          <StyledProjectTitle href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
            {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                  <Icon icon="github" prefix="fab" />
                </a>
            )}
            {demoLink && (

                  <Icon icon="external-link-alt" />

            )}
          </StyledProjectTitle>
          <StyledDescription>{duration}</StyledDescription>
          <StyledDescription dangerouslySetInnerHTML={{ __html: project.html }} />
          <TechList techs={project.frontmatter.techs} />
        </StyledProjectInfoContainer>
      </StyledFeaturedProject>
    );
  });

  return (
    <StyledSection id="projects">
      {/*<StyledH1>Latest Projects</StyledH1>*/}
      <StyledH1>Projekthistorie</StyledH1>
      Projekthistorie
      {featuredProjects}
      <StyledArchiveContainer>
        {/*<StyledA href={cvGerman} target="_blank">Full profile in German  <Icon icon="download" prefix="fas" /></StyledA>*/}
        {/*<StyledA href={cvGerman} target="_blank">Full profile in English  <Icon icon="download" prefix="fas" /></StyledA>*/}
        <StyledA href={cvGerman} target="_blank">Profil (Deutsch)  <Icon icon="download" prefix="fas" /></StyledA>
        <StyledA href={cvEnglish} target="_blank">Profil (English)  <Icon icon="download" prefix="fas" /></StyledA>
      </StyledArchiveContainer>
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  featured: PropTypes.array.isRequired,
};

export default FeaturedProjects;
