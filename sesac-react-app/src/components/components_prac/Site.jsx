import React from "react";

const Site = () => {
  return (
    <div className="container">
      <header>Header</header>

      <nav>Navigation</nav>

      <main>
        <section className="main-content">
          <h2>Main Content</h2>
          <article className="about-box">About</article>
          <article className="posts-box">Recent Posts</article>
        </section>

        <aside className="sidebar">Sidebar</aside>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Site;
