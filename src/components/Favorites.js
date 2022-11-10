import styled from "styled-components";
import config from "../../config.json";

export default function Favorites(config) {
    const favoriteNames = Object.keys(config.favorites);
    return (
        <StyledProfile>
            {favoriteNames.map((favoriteName) => {
                const perfis = config.favorites[favoriteName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section>
                        <h2>Aluratube favorites</h2>
                        <div>
                            {perfis.map((perfil) => {
                                return (
                                    <a href={perfil.url}>
                                        <img src={perfil.icon} />
                                        <span>
                                            {perfil.ig}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledProfile>
    )
}

const StyledProfile = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    border-radius: 50%;
    /* aspect-ratio: 16/9; */
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 100px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      text-align: center;
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 0px;
      grid-template-columns: repeat(auto-fill,minmax(110px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow: auto;
      a {
        scroll-snap-align: start;
        span {
        
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }

`;