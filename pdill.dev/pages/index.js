import Head from 'next/head'
import React from 'react'
// import Link from 'next/link'
import BoxModel from '../components/content-box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'


export default function Home () {
  return (
    <div className="container" >
      <Head>
        <title>Paul Dill portfolio</title>
      </Head>

      <main>
        <BoxModel>
          <Typography variant="h1" className="title" color="primary">
            Aloha!  Welcome to my portfolio!
          </Typography>

          <Typography variant="p" color="secondary">
            {/* Write intro here */}
          My name is Paul Dill.  I&apos;ve been learning web development for the last year with my main focus on Front-end engineering so far.
          My goal is to hone my skills on the front end and begin work on back-end development.  This portfolio will be a way for
          me to experiment, build projects, learn, and generally give me a place to show my work.  Currently, I am self-employed as a gardener,
          but I&apos;m starting to look for web development jobs so that I can transition my career.  I have worn many hats in life thus far, and consider myself
          to be a generalist.  I hope to gain a deep understanding of programming, and work in this field for the rest of my career.  For fun, I enjoy padding Hawaiian outrigger canoes,
          spending time with my daughter, cooking, hiking, running, reading, listening to music and working in the garden.  Thank you for checking out my portfolio, I hope you enjoy my work.
          Feel free to contact me by email at paul@pdill.dev {/*Add link here*/}
          </Typography>

          <div style={{ display: 'inline-block', margin: '4%' }}>
            <div style={{ float: 'left' }}>
              <Typography variant="h2" color="primary" style={{ fontSize: '3rem' }}>Tech Stack</Typography>
              <Typography variant="p" color="secondary">
                <List>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>Material-UI</li>
                    <li>React-Native-Paper</li>
                    <li>Vercel</li>
                    <li>NPM</li>
                    <li>Git</li>
                    <li>GitBash</li>
                    <li>Visual Studio Code</li>
                    <li>Slack</li>
                    <li>Windows</li>
                  </ul>
                </List>
              </Typography>
            </div>

            <div style={{ float: 'right', marginLeft: '8rem' }}>
              <Typography variant="h2" color="primary" style={{ fontSize: '3rem' }}>Educational<br/> Resources</Typography>
              <Typography variant="p" color="secondary">
                <List>
                  <ul>
                    <li>StackOverflow</li>
                    <li>Mozilla Developers Network</li>
                    <li>GitHub</li>
                    <li>CSS Tricks</li>
                    <li>Codrops</li>
                    <li>W3C</li>
                    <li>Medium</li>
                    <li>Codecademy</li>
                    <li>LinkedIn Learning</li>
                    <li>Hackernews</li>
                    <li>Hackernoon</li>
                    <li>Egghead.io</li>
                    <li>Tech specific documentation</li>
                  </ul>
                </List>
              </Typography>
            </div>
          </div>

          <Typography variant="h2" color="primary">Projects</Typography>
          <Grid
            item xs
            direction="column"
            justify="center"
            alignItems="stretch"
            backgroundColor="background.default.dark"
          >
            <a href="https://mothercupboard.com" className="card">
              <Typography variant="h3" color="warning">Mothercupboard</Typography>
              <Typography variant="p" color="secondary">Meal Planner app that I&apos;m building with a friend.</Typography>
            </a>
          </Grid>
        </BoxModel>
        {/*  <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>


      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
