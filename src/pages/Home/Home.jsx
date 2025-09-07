import "./Home.css";

function Home() {
  const items = Array.from({ length: 1000 }, (_, i) => (
    <div key={i}>Homepage</div>
  ));

  return (
    <div>
      <section id="home"> HOME </section>
      {items}
      <section id="skill">Skills</section>
    </div>
  );
}
export default Home;
