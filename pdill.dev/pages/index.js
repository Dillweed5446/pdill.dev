import Head from 'next/head'
import React from 'react'
// import Link from 'next/link'
import BoxModel from '../components/content-box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Layout from '../components/layout'

export default function Home () {
  return (
    <div className="container" >
      <Layout>
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
            My name is Paul Dill.  I&apos;ve been learning web development for the last year with my main focus on front-end engineering.
            Currently, I&apos;m working to hone my skills on the front-end, though eventually I would prefer to transition into work on back-end development.
            This portfolio will be a way for me to experiment, build projects, learn, and generally give me a place to show my work.  Currently, I am self-employed as a gardener,
            but I&apos;m starting to look for web development jobs so that I can transition my career.  As I apply for jobs, my goal is to find a
            company with which I&apos;m able to learn, grow, and solving interesting and challenging problems.  As I progress in the field of programming,
            I hope to give back to my community by educating the next generation of coders.  Hawaii has a limited number of jobs available, and I see great potential for our youths
            to start excellent careers in tech which would enrich their lives and our island community.  I have worn many hats in life thus far, and consider myself
            to be a generalist.  I hope to gain a deep understanding of programming, and work in this field for the rest of my career.  For fun, I enjoy padding Hawaiian outrigger canoes,
            spending time with my daughter, cooking, hiking, running, reading, listening to music and working in the garden.  Thank you for checking out my portfolio, I hope you enjoy my work.
            Feel free to contact me by email at paul@pdill.dev {/*Add link here*/}
            </Typography>

            <div style={{ display: 'flow-root', margin: '4%' }}>
              <div style={{ float: 'left' }}>
                <Typography variant="h2" color="primary">Tech Stack</Typography>
                <Typography variant="p" color="secondary">
                  <List>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>React Native</li>
                      <li>Material-UI</li>
                      <li>NPM/Yarn</li>
                      <li>Git</li>
                      <li>Visual Studio Code</li>
                      <li>Slack</li>
                      <li>Ubuntu</li>
                      <li>Windows</li>
                    </ul>
                  </List>
                </Typography>
              </div>

              <div style={{ float: 'right'}}>
                <Typography variant="h2" color="primary">Educational<br/> Resources</Typography>
                <Typography variant="body1" color="secondary">
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
                      <li>CodePen.io</li>
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
            >
              <a href="https://mothercupboard.com" className="card">
                <Typography variant="h4">Mothercupboard</Typography>
                <Typography variant="body1" color="secondary">Meal Planner app that I&apos;m building with a friend.</Typography>
              </a>
            </Grid>
          </BoxModel>
        </main>
      </Layout>
    </div>
  )
}
