import { CompletedChallenges } from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import {ExperienceBar} from  '../components/ExperienceBar';
import Profile from '../components/Profile';
import {GetServerSideProps} from 'next';

import Head from 'next/head';

import {Container} from '../styles/pages/Home'

import ChallengeBox from '../components/ChallengeBox';
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";

interface userGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


const Home: React.FC<HomeProps> = (props: HomeProps) => {

  const {user} = props;

  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
    
    <Container>
      <div className="container">
        <Head>
          <title>{user.name} | Move.it</title>
        </Head>
      <ExperienceBar />

    <CountdownProvider>
      <section className="components">
      
        <div>
            <Profile {...user}/>

            <CompletedChallenges />

            <Countdown />
        </div>
            
        <ChallengeBox/>
        <div>

        </div>
      </section>
    </CountdownProvider>
      </div>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {username} = ctx.params;
  const response = await fetch (`https://api.github.com/users/${username}`)
  const user = await response.json();
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default Home;