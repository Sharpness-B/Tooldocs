import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Router from "next/router";
import Link from 'next/link'
import { Typography, makeStyles, Box, Button, Paper } from "@material-ui/core";

import { useRouter } from 'next/router'
import quizData from 'Data/quiz';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(),
    textTransform: 'capitalize',
    marginTop: theme.spacing()
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow: 'rgb(234, 234, 234) 0px 0px 18px 1px',
    borderRadius: '30px'
  },
  text: {
    textTransform: 'capitalize',
    marginTop: '10px',
    fontSize: 'large'
  },
  iframe: {
    border: "none",
    width: "100%",
    height: "calc( (70vw - 30px) * 1080/1920 )"
  },
  list: {
    listStyleType: "none"
  },
  img: {
    maxWidth: "100%",
    maxHeight: "60vh"
  }
}));

const details = () => {
  const classes = useStyles();

  const router = useRouter()
  const { identifier } = router.query

  const name = decodeURI(identifier)
  
  const toolData = quizData.find(element => element.tool_name === name)
  console.log(toolData)

  return (
    <div>
      <Head>
        {toolData ? <title>{toolData.tool_name}</title> : <title>Tooldocs</title>}
        {toolData && <link rel="icon" href={`/assets/img/${toolData.icon}`} /> }
      </Head>

      <Box style={{display: 'flex', justifyContent: 'space-around', marginTop: "30px"}}>
        <Typography variant="h3" className={classes.title} >
          {toolData && toolData.tool_name}
        </Typography>
        
        <Link href="/">
          <Button color="secondary">
            BACK
          </Button>
        </Link>
      </Box>

      <div style={{width: '70vw', textAlign: 'center', margin: '30px auto'}}>
        <Paper className={classes.paper}>
          <div style={{padding: "10px 30px"}}>
            {toolData && <p>{toolData.text}</p> }
            {(toolData && toolData.video_link) && <iframe className={classes.iframe} src={toolData.video_link}></iframe> }
            {toolData && <ul className={classes.list}>{toolData.images.map(src => <li key={src}><img className={classes.img} src={`/assets/img/${src}`} /></li>)}</ul> }
          </div>
        </Paper>
      </div>


    </div>
  );
};

export default details;
