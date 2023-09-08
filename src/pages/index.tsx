import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>TypeScript starter for Next.js</title>
				<meta
					name="description"
					content="TypeScript starter for Next.js that includes all you need to build amazing apps"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>src/pages/index.tsx</code>
					</p>
					<div>
						<a href="https://vercel.com?utm_source=typescript-nextjs-starter" target="_blank" rel="noopener noreferrer">
							By{' '}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
					<div className={styles.thirteen}>
						<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
					</div>
				</div>

				<div className={styles.grid}>
					<a
						href="https://nextjs.org/docs?utm_source=typescript-nextjs-starter"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Docs <span>-&gt;</span>
						</h2>
						<p>Find in-depth information about Next.js features and&nbsp;API.</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=typescript-nextjs-starter"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Learn <span>-&gt;</span>
						</h2>
						<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=typescript-nextjs-starter"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Templates <span>-&gt;</span>
						</h2>
						<p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Deploy <span>-&gt;</span>
						</h2>
						<p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
					</a>
				</div>
			</main>
		</>
	);
}

export const getStaticProps = async (context: any) => {
	const { locale } = context;

	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};