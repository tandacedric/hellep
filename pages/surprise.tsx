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

const Surprise: NextPage = () => {
    const router = useRouter()
    const { n, c } = router.query
    const [formName, setFormName] = React.useState('');
    const [formCity, setFormCity] = React.useState('');
    function handleClick() {
        let message = `🙌 Une surprise spéciale pour toi de la part de 👉 ${formName} 👈 
        Clique ici pour voir
       ‼️👇👇👇👇‼️
       https://hellep.vercel.app/surprise?n=${formName}&c=${formCity}`;
       console.log(message);
         
        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        console.log(url);
        window.open(url,'_blank');
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
                <iframe className={styles.iframe} src="https://embed.lottiefiles.com/animation/53154"></iframe>

                <h5 className={styles.message}>
                    Envoyé par <b>{n}</b>, de <b>{c}</b>
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
                            <span className={styles.footerMessage}>Souhaitez aussi bonne fête de pâques à mes contacts.</span>
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
