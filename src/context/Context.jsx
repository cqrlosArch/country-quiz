import React, { useCallback, useEffect, useState } from 'react';
import { getDataCodes } from '../utils/api';
import { randomCountry } from '../utils/randonCountries';
import { nanoid } from 'nanoid';
export const AppContext = React.createContext();

const numerList = ['A', 'B', 'C', 'D'];
const typeQuestion = ['flag', 'capital'];

const randomTypeQuestion = () => {
  return typeQuestion[Math.floor(Math.random() * typeQuestion.length)];
};

export const AppContextProvider = ({ children }) => {
  const [question, setQuestion] = useState({});
  const [listAnswers, setListAnswers] = useState([]);
  const [resultCounter, setResultCounter] = useState(0);
  const [resultShow, setResultShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [typeQuestion, setTypeQuestion] = useState(null);

  const generateQuestion = useCallback(async () => {
    if (isLoading === false) return;
    const data = await getDataCodes(randomCountry());
    const random = Math.floor(Math.random() * (data.length - 1));
    const type = randomTypeQuestion();
    const newQuestion = {
      title: type === 'capital' ? data[random].capital : data[random].flag,
      solution: data[random].name,
    };
    setTypeQuestion(type);
    setQuestion(newQuestion);
    setListAnswers(generateListAnswers(data));
    setIsLoading(false);
  }, [isLoading]);

  const resetQuiz = () => {
    setResultCounter(0);
    setResultShow(false);
    setIsLoading(true);
    generateQuestion();
  };
  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const generateListAnswers = (data) => {
    return data.map((item, index) => {
      return {
        id: nanoid(),
        index: numerList[index],
        name: item.name,
      };
    });
  };

  const handleResultQuestion = (answer) => {
    if (answer.name !== question.solution) {
      setTimeout(() => {
        setResultShow(true);
      }, 2000);
      return false;
    } else {
      setTimeout(() => {
        incrementResult();
        setIsLoading(true);
        generateQuestion();
      }, 2000);
      return true;
    }
  };
  const incrementResult = () => {
    setResultCounter((lastResult) => lastResult + 1);
  };

  return (
    <AppContext.Provider
      value={{
        resultCounter,
        incrementResult,
        resultShow,
        handleResultQuestion,
        question,
        listAnswers,
        isLoading,
        resetQuiz,
        typeQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContextConsumer = AppContext.Consumer;
