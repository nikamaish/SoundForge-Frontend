import { Button } from "primereact/button";

const Home = () => {
    const handleExplore = () => {
        document
            .getElementById("featured-beats")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="home-page">

            <section className="hero-section">
                <p className="hero-tag">
                    <i className="pi pi-sparkles" />
                    YOUR SOUND. YOUR STAGE.
                </p>

                <h1>
                    Find Your Sound.
                    <br />
                    <span>Make It Yours.</span>
                </h1>

                <p className="hero-description">
                    Discover unique beats, connect with talented artists,
                    and bring your next music project to life.
                </p>

                <div className="hero-actions">
                    <Button
                        label="Explore Beats"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        className="primary-button"
                        onClick={handleExplore}
                    />

                    <Button
                        label="Discover Music"
                        icon="pi pi-headphones"
                        outlined
                        className="secondary-button"
                        onClick={handleExplore}
                    />
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <h3>1K+</h3>
                        <p>Beats</p>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-item">
                        <h3>500+</h3>
                        <p>Artists</p>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-item">
                        <h3>10K+</h3>
                        <p>Listeners</p>
                    </div>
                </div>
            </section>

            <section
                className="featured-section"
                id="featured-beats"
            >
                <div className="featured-heading">
                    <div>
                        <p className="section-tag">
                            HANDPICKED FOR YOU
                        </p>

                        <h2>Featured Beats</h2>

                        <p className="section-description">
                            Discover your next inspiration.
                        </p>
                    </div>

                    <Button
                        label="Explore All"
                        icon="pi pi-arrow-right"
                        iconPos="right"
                        text
                        className="explore-all-button"
                        onClick={handleExplore}
                    />
                </div>

                <div className="empty-state">
                    <div className="empty-state-icon">
                        <i className="pi pi-wave-pulse" />
                    </div>

                    <h3>Your next hit starts here.</h3>

                    <p>
                        Amazing beats from talented artists will appear here.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;