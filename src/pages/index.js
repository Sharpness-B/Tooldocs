import React, { useState, useContext, useEffect } from 'react';
import Head from "next/head";
import Quiz from "components/Quiz";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from 'contexts/app/reducer'
import { SET_TOPICS } from 'contexts/app/types'
import SearchBar from "components/Searchbar";
import quizData from 'Data/quiz';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "4rem",
    textAlign: "center",
    marginBottom: theme.spacing(),
  },

  footer: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [, appDispatch] = useContext(AppContext)

  const [searchValue, setSearchValue] = useState('');

  const onSearchbarInputChange = (e) => {
    const val =e.target.value
    setSearchValue(val);
    const newTopics = quizData.filter(x => 
      x.tool_name.toLowerCase().includes(val.toLowerCase())
      ||   x.text.toLowerCase().includes(val.toLowerCase())
    );
    appDispatch({
      type: SET_TOPICS,
      payload: newTopics
    })
  }

  useEffect(() => {
    appDispatch({
      type: SET_TOPICS,
      payload: quizData
    })
    
  }, [])
  return (
    <Container>
      <Head>
        <title>Tooldocs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{textAlign: 'center', marginTop: "30px"}}>
        <Typography variant="h1" className={classes.title}>
          Welcome to <b>Tooldocs!</b>
        </Typography>
        <p>An interface for Cegal SYSCO Toolbox. Say goodbye to <code>ctrl+f</code> in the docs pdf!</p>
        <div>
          <SearchBar onChangeEvent={onSearchbarInputChange} value={searchValue} placeholder={"search for related tools and functionality"} />
        </div>

        <Quiz />
      </main>
    </Container>
  );
}
