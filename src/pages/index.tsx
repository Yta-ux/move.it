import styles from '../styles/pages/Profile.module.css';
import {VscGithub} from 'react-icons/vsc';
import {CgArrowRightO} from 'react-icons/cg';

import Head from 'next/head';

import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const User: React.FC = () =>  {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const { push } = useRouter();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      push(`/${username}`);
    }
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>Home | Pomo.fy</title>
      </Head>

      

      <div className={styles.content}>
        <img src="Logo.svg" alt="logo"/>
        <strong>Bem- vindo</strong>

      <div className={styles.title}>
          < VscGithub size={36} color="#8A4E1A"/>
            <span>   
              Faça login com seu Github para começar
            </span>
      </div>

      <div className={styles.posForm}>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder="Digite seu username" 
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}/>

         
      
        <button type="submit">
              <CgArrowRightO size={24} color="#FFFFFF"/>  
        </button>
        </form>
        </div>
      </div>
    </div>
);
}
export default User;