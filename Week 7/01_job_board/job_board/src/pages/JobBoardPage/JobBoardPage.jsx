import JobCard from '../../components/JobCard/JobCard';
import './JobBoardPage.css';

const items = [
  { id: 1, role: 'Frontend Developer', company: 'Nimbus Tech', location: 'Bengaluru', isRemote: true },
  { id: 2, role: 'Data Analyst', company: 'Harbor Analytics', location: 'Chennai', isRemote: false },
  { id: 3, role: 'Product Designer', company: 'Loop Studio', location: 'Pune', isRemote: true },
  { id: 4, role: 'QA Engineer', company: 'Brightline Systems', location: 'Hyderabad', isRemote: false }
];

function JobBoardPage() {
  return (
    <main className="job-board">
      <section className="job-board__container">
        <header className="job-board__header">
          <h1 className="job-board__title">Job Opening Board</h1>
          <p className="job-board__lead">
            This page demonstrates passing props, reusable components, rendering lists with keys, and conditional rendering.
          </p>
        </header>
        <section className="job-board__content">
          <ul className="job-board__list">
            {items.map((item) => (
              <JobCard key={item.id} role={item.role} company={item.company} location={item.location} isRemote={item.isRemote} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default JobBoardPage;
