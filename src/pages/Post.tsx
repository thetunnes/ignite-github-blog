import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

import { api } from "./../utils/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { PostContainer, PostTitle } from "../styles/Post";
import { formatDate } from "./../utils/formatDate";

interface DataPostType {
  html_url: string;
  body: string;
  title: string;
  updated_at: string;
  user: {
    avatar_url: string;
    login: string;
  };
  comments: 0;
}

export function Post() {
  const { numberPost } = useParams();

  const [dataPost, setDataPost] = useState<DataPostType>({} as DataPostType);

  const fetchDataPost = useCallback(
    async (numberPost: string | undefined) => {
      const response = await api.get(
        `/repos/thetunnes/my-blog/issues/${numberPost}`
      );

      const { data } = response;

      setDataPost(data);
    },
    [numberPost]
  );

  useEffect(() => {
    fetchDataPost(numberPost);
  }, []);

  console.log(dataPost)

  // if (dataPost) {
  return (
    <PostContainer>
      <PostTitle>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </NavLink>
          <a href={dataPost.html_url} target="_blank">
            Acessar <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
        <h1>{dataPost.title}</h1>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {dataPost.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />{" "}
            {formatDate(dataPost.updated_at)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} /> {dataPost.comments} comentários
          </span>
        </footer>
      </PostTitle>

      <main>
      <ReactMarkdown children={dataPost.body} />
      </main>
    </PostContainer>
  );
}
