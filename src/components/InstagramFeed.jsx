import { Instagram, Heart, MessageCircle } from './Icons';

const InstagramFeed = () => {
  // Simulated Instagram posts
  const posts = [
    { id: 1, image: 'assets/hero-baby.png' },
    { id: 2, image: 'assets/girl-premium.png' },
    { id: 3, image: 'assets/hero-baby.png' },
    { id: 4, image: 'assets/girl-premium.png' },
    { id: 5, image: 'assets/hero-baby.png' },
    { id: 6, image: 'assets/girl-premium.png' },
  ];

  return (
    <section id="instagram" className="instagram">
      <div className="container">
        <h2 className="section-title text-center">Siga-nos no Instagram</h2>
        <p className="section-subtitle text-center">
          Fique por dentro das novidades e confira fotos reais das nossas coleções @larbaby
        </p>

        <div className="insta-grid">
          {posts.map((post) => (
            <div key={post.id} className="insta-item">
              <img src={post.image} alt={`Instagram post ${post.id}`} />
              <div className="insta-overlay">
                <div className="overlay-content">
                  <div className="stat"><Heart size={20} fill="white" /> 124</div>
                  <div className="stat"><MessageCircle size={20} fill="white" /> 12</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-50">
          <a href="https://instagram.com/larbaby" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
             <Instagram size={20} /> Visitar Perfil
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
