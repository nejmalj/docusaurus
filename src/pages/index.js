import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro-lesson">
              📘 Accéder au cours Docker
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenue sur ${siteConfig.title}`}
      description="Cours Docker - Machines virtuelles, conteneurs, Dockerfile et commandes de base">
      <HomepageHeader />
        <main>
            <section className={styles.section}>
                <div className="container">
                    <Heading as="h2" className="text--center margin-bottom--lg">
                        🐳 Docker & Conteneurs : Un cours complet
                    </Heading>
                    <p className="text--center">
                        Apprenez les bases de la conteneurisation avec Docker, comparez avec les machines virtuelles,
                        découvrez les avantages, les commandes essentielles, et maîtrisez le `Dockerfile` pour créer des
                        applications portables, légères et scalables.
                    </p>
                    <div className="text--center margin-top--lg">
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/intro-lesson">
                            Commencer le cours 🚀
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
  );
}
