import { h } from "preact";
import { useEffect } from "preact/hooks";
import style from "./style";
import logo from "../../assets/logo@2x.png";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <div class={style.home}>
      <div class={style.about}>
        <div class={style.imageContainer}>
          <div class={style.image}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div class={style.quote}>
          <div class={style.details}>
            Après avoir proposé durant de nombreuses années des séances de
            sophorlogie et Reiki en Bretagne, à Saint Méen le grand, Montauban
            de Bretagne et Saint Malo, je vis maintenant en Irlande mais
            continue cependant à accompagner mes clients en langue française via
            Skype.
          </div>
          <div class={style.author}>- Découvrez ici mes articles de blog</div>
        </div>
      </div>
      {/* <div class={style.bio}>
        <p class={style.bioleft}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class={style.bioright}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur.
        </p>
      </div> */}
    </div>
  );
};

export default Home;
