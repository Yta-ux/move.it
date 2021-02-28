import { CompletedChallenges } from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import {ExperienceBar} from  '../components/ExperienceBar';
import Profile from '../components/Profile';
import {GetServerSideProps} from 'next';

import Head from 'next/head';

import styles from "../styles/pages/Home.module.css";
import ChallengeBox from '../components/ChallengeBox';
import React, { useContext, useState } from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import SwitchThemes from "../components/SwitchTheme";
import GlobalStyle from '../styles/global';
import {ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import usePersistedState from '../utils/usePersistedState';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
   
    <GlobalStyle />

      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
      
      <SwitchThemes toggleTheme={toggleTheme}/>
      <ExperienceBar />

    <CountdownProvider>
      <section>
        <div>
            <Profile />

            <CompletedChallenges />

            <Countdown />
        </div>
            
        <ChallengeBox/>
        <div>

        </div>
      </section>
    </CountdownProvider>
      </div>
    </ChallengesProvider>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}