import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContainer } from "./../styles/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faUsers, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "./../utils/api";

interface UserType {
  login: string
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  html_url: string;
  bio: string;
}

export function Profile() {
  const [dataUser, setDataUser] = useState<UserType>();

  async function getDataUser(username: string) {
    const response = await api.get(`/users/${username}`);

    setDataUser(response.data);
  }

  useEffect(() => {
    getDataUser("thetunnes");
  }, []);

  return (
    <ProfileContainer>
      {dataUser ? (
        <>
          <img src={dataUser.avatar_url} alt="Foto de perfil do Github" />

          <div className="content-profile">
            <header>
              <h1>{dataUser.name}</h1>
              <a href={dataUser.html_url} target="_blank">
                github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </header>
            <p>{dataUser.bio}</p>
            <footer>
              <span><FontAwesomeIcon icon={faGithub} />{dataUser.login}</span>
              <span><FontAwesomeIcon icon={faUsers} />{dataUser.followers} seguidores</span>
              <span><FontAwesomeIcon icon={faUsersRectangle} />{dataUser.following} seguindo</span>
            </footer>
          </div>
        </>
      ) : null}
    </ProfileContainer>
  );
}
