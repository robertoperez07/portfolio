import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { WorkItem, WorkTitle, JobTitle } from "./styles";

const Work = ({ user }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
              <WorkItem key={i}>
                <WorkTitle>{work.position}</WorkTitle>
                <div>
                  <JobTitle>
                    {work.company}
                    <span> &sdot; </span>
                    <span>{work.location}</span>
                  </JobTitle>
                  <span> &sdot; </span>
                  <span>
                    {monthNames[work.start.month-1]} {work.start.year} to {monthNames[work.end.month-1]} {work.end.year}
                  </span>
                </div>
                <Paragraph>{work.summary}</Paragraph>
                <br/>
                {work.highlights.map((highlight, i) => (
                  <Paragraph>&bull; {highlight}</Paragraph>
                ))}
              </WorkItem>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;