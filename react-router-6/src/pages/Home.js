import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Link to='/about' className="btn">
        About
      </Link>
    </section>
  );
};
export default Home;

/*
 # Links
 <Link to=''> ...</Link> componenti a tag yerine kullanılıyor. ve sayfayı yeniden yüklemeden sayfalar arasına geçiş yapılmasına olanak veriyor.
 Görüldüğğü gibi "to=''" olarak bir prop var.
 
*/
