import classes from './StartingPageContent.module.css';
import { useContext } from 'react';
import AuthContext from '../../../Authentication/store/AuthContext'

const StartingPageContent = () => {

     let ctx = useContext(AuthContext);
  return (
    <section className={classes.starting}>
      <h3>{ctx.isLoggedIn ? "check out Products": "Login to see our products"}</h3>
    </section>
  );
};

export default StartingPageContent;
