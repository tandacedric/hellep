import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Surprise.module.css'

import { useRouter } from 'next/router'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";

import groovyWalkAnimation from "../assets/53154-happy-easter-holiday.json";


const Example = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

const Surprise: NextPage = () => {
    const router = useRouter()
    const { n, c } = router.query
    const [formName, setFormName] = React.useState('');
    const [formCity, setFormCity] = React.useState('');
    async function handleClick()  {
        let message = `🙌 Une surprise spéciale pour toi de la part de 👉 ${formName} 👈  depuis la ville de 👉 ${formCity} 👈 
        Clique ici pour voir
       ‼️👇👇👇👇‼️
       https://hellep.vercel.app/surprise?n=${formName.trim()}&c=${formCity.trim()}`;
        console.log(message);

        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        console.log(url);

        try {
            await fetch('/api/surprise', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({name:formName, city: formCity, created: (new Date()).toString()}),
            })
            window.open(url, '_blank');
        } catch (error) {
            console.log("Error", error);
        }
        console.log("share")
    }
    const handleChangeFormName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormName(event.target.value);
    };
    const handleChangeFormCity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormCity(event.target.value);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Fête de Pâques 2022</title>
                <meta name="description" content="Voeux de Pâques 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {/* <iframe className={styles.iframe} src="https://embed.lottiefiles.com/animation/53154"></iframe> */}
                <div className={styles.iframe}> <Example /></div>
                <h5 className={styles.message}>
                    Envoyé par <span className={styles.name}>{n}</span> depuis <span className={styles.city}>{c}</span> pour vous souhaiter une joyeuse fête de Pâques.
                </h5>

                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <div>
                            <span className={styles.footerMessage}>Souhaiter une bonne fête de pâques 2022 à mes contacts.</span>
                        </div>
                        <div className={styles.formInline}>
                            <TextField
                                label="Mon nom"
                                id="outlined-size-small"
                                defaultValue="Small"
                                size="small"
                                value={formName}
                                onChange={handleChangeFormName}
                            />
                            <TextField
                                label="Ma ville"
                                id="outlined-size-small"
                                defaultValue="Small"
                                size="small"

                                value={formCity}
                                onChange={handleChangeFormCity}

                            />
                            <Button onClick={handleClick} disabled={!formName || !formCity} startIcon={<ShareIcon />} variant="outlined">Partager</Button>

                        </div>

                    </Box>
                </div>
            </main>

            <footer className={styles.footer}>

                <div><a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="HTTC" width={72} height={16} />
                    </span>
                </a></div>
            </footer>
        </div>
    )
}

export default Surprise
