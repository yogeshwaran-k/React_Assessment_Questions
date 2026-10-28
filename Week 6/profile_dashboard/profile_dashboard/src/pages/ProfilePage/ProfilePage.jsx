import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <main className="profile-page">
      <section className="profile-page__container">
        <header className="profile-page__header">
          <h1 className="profile-page__title">Developer Profile Dashboard</h1>
          <p className="profile-page__lead">
            This page demonstrates JSX rendering and the difference between functional and class components.
          </p>
        </header>
        <section className="profile-page__content">
          <ProfileCard />
        </section>
      </section>
    </main>
  );
}

export default ProfilePage;
