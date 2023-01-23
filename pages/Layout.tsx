import Head from "next/head"
import { useRouter } from "next/router";
import styles from "../styles/style";
import Navbar from "./Navbar"
import { Footer } from "./portfolio/components";


export default function Layout({ children }: any) {

    const router = useRouter();

    const bgColor = () => {
        switch (true) {
            case router.pathname === '/': return 'bg-primary';
            case router.pathname.startsWith('/portfolio/'): return 'bg-primary';
            case router.pathname.startsWith('/store/'): return 'bg-store';
            case router.pathname.startsWith('/dashboard/'): return 'bg-store';
        }
    }


    return (
        <div className={`layout ${bgColor()}`}

        >
            <Head>
                <title>Jesse's Portfolio</title>
            </Head>
            <header>
                <div className={`navbar-container `}>
                    <Navbar />
                </div>
            </header>
            <main className={`main-container `}>
                <div className={`${styles.flexCenter} `}>
                    {/**content container */}
                    <div className={`${styles.boxWidth} `}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
