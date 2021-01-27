import Head from 'next/head'
import React from 'react'
import BoxModel from '../components/content-box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import { Container } from '@material-ui/core'
import MyLayout from '../components/layout'

export default function Home () {
  return (
    <div className="container" >
      <Head>
        <title>Paul Dill Portfolio Home Page</title>
      </Head>

      <main>
        <BoxModel>
          <Typography variant="h1" className="name" color="primary" id="top">
              Paul Dill
          </Typography>
          <Typography variant="h2" className="title" color="primary">
              Aloha!  Welcome to my portfolio!
          </Typography>

          <Typography variant="body1" color="error" style={{ textIndent: '0.625rem' }} id="About">
            {/* Write intro here */}
            My name is Paul Dill.  I&apos;ve been learning web development for the last year and a half with my main focus on front-end engineering.
            Currently, I&apos;m working to hone my skills on the front-end, while also starting to learn the back-end with the intention of becoming a full stack developer.
            This portfolio will be a way for me to experiment, build projects, learn, and generally give me a place to show my work.
          </Typography>
          <Typography variant="body1" color="error" style={{ textIndent: '0.625rem' }}>
            At the moment, I am self-employed as a gardener,
            but I&apos;m starting to look for web development jobs so that I can transition my career.  As I apply for jobs, my goal is to find a
            company with which I&apos;m able to learn, grow, and solving interesting and challenging problems.  As I progress in the field of programming,
            I hope to give back to my community by educating the next generation of coders.  Hawaii has a limited number of jobs available, and I see great potential for our youths
            to start excellent careers in tech which would enrich their lives and our island community.
          </Typography>
          <Typography variant="body1" color="error" style={{ textIndent: '0.625rem' }}>
            I have worn many hats in life thus far, and consider myself
            to be a generalist.  I hope to gain a deep understanding of programming, and work in this field for the rest of my career.  For fun, I enjoy padding Hawaiian outrigger canoes,
            spending time with my daughter, cooking, hiking, running, reading, listening to music and working in the garden.
          </Typography>
          <Typography variant="body1" color="error" style={{ textIndent: '0.625rem' }}>
            Thank you for checking out my portfolio, I hope you enjoy my work.
            Feel free to contact me by email at <a href="mailto:paul@pdill.dev" target="_blank" rel="noopener noreferrer">paul@pdill.dev</a>.
          </Typography>

          <div style={{ display: 'flow-root', margin: '4%' }}>
            <div style={{ float: 'left' }}>
              <Typography variant="h2" color="primary">Skills</Typography>
              <Typography variant="body1" color="secondary">
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
                    <li>Ubuntu/Linux</li>
                    <li>Windows</li>
                  </ul>
                </List>
              </Typography>
            </div>

            <div style={{ float: 'right' }}>
              <Typography variant="h2" color="primary">Educational<br/> Resources</Typography>
              <Typography variant="body1" color="secondary">
                <List>
                  <ul>
                    <li><a href="https://stackoverflow.com/users/12745384/pdill5446?tab=profile" target="_blank" rel="noopener noreferrer"
                    >StackOverflow</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"
                    >Mozilla Developers Network</a></li>
                    <li><a href="https://github.com/Dillweed5446" target="_blank" rel="noopener noreferrer"
                    >GitHub</a></li>
                    <li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer"
                    >CSS Tricks</a></li>
                    <li><a href="https://tympanus.net/codrops/css_reference/" target="_blank" rel="noopener noreferrer"
                    >Codrops</a></li>
                    <li><a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer"
                    >W3C</a></li>
                    <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer"
                    >Medium</a></li>
                    <li><a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer"
                    >Codecademy</a></li>
                    <li><a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer"
                    >LinkedIn Learning</a></li>
                    <li><a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer"
                    >Hackernews</a></li>
                    <li><a href="https://hackernoon.com/" target="_blank" rel="noopener noreferrer"
                    >Hackernoon</a></li>
                    <li><a href="https://egghead.io/" target="_blank" rel="noopener noreferrer"
                    >Egghead.io</a></li>
                    <li><a href="https://codepen.io/" target="_blank" rel="noopener noreferrer"
                    >CodePen.io</a></li>
                    <li><a href="https://www.sitepoint.com/" target="_blank" rel="noopener noreferrer"
                    >Sitepoint</a></li>
                    <li>Tech specific documentation</li>
                  </ul>
                </List>
              </Typography>
            </div>
          </div>

          <Typography variant="h2" color="primary" id="projects">Projects</Typography>
          <Container
            alignitems="stretch"
            direction="column"
            justify="center">
            <Grid
              item xs
            >
              <a href="https://mothercupboard.com" className="card" target="_blank" rel="noopener noreferrer">
                <Typography variant="h4">Mothercupboard</Typography>
                <Typography variant="body1" color="secondary"
                >Meal Planner app that I&apos;m building with a friend. Use adwilson0286@gmail.com to login.</Typography>
              </a>
            </Grid>
          </Container>
        </BoxModel>
      </main>
    </div>
  )
}

Home.Layout = MyLayout
