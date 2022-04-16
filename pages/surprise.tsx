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
    const { name } = router.query



    return (
        <div className={styles.container}>
            <Head>
                <title>Fête de Pâques 2022</title>
                <meta name="description" content="Voeux de Pâques 2022" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h5 className={styles.message}>
                    Salut <b>{name}</b>,je te souhaite une très bonne<a href="https://nextjs.org"> fête de Pâques</a> de notre Seigneur Jesus Christ à toi  à toute ta famille. 
                    <b/>Prends bien soin de toi. 
                </h5>

            </main>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={styles.footer}>
                        <TextField
                            label="Mon nom"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                        />
                        <TextField
                            label="Ma ville"
                            id="outlined-size-small"
                            defaultValue="Small"
                            size="small"
                            
                        />
                        <Button startIcon={<ShareIcon />} variant="outlined">Partager</Button>

                    </div>
                    
                </Box>
            </div>
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
