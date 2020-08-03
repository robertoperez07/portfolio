import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              {networkIcon(profile.network)}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const networkIcon = ( network ) => {
  network = network.toLowerCase();
  switch (network) {
    case 'gitconnected':
      return  <FontAwesomeIcon icon={['fas', 'code']} className='icon'/>
    case 'github':
    case 'linkedin':
      return  <FontAwesomeIcon icon={['fab', network]} className='icon'/>
    default:
      break;
  }
}

export default Me;
