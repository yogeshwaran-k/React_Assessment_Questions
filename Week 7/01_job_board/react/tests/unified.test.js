import { render, screen } from '@testing-library/react';
import App from '../App';
import JobBoardPage from '../pages/JobBoardPage/JobBoardPage';
import JobCard from '../components/JobCard/JobCard';

describe('Job Opening Board (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.job-board')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.job-board__header')).toBeInTheDocument();
    expect(container.querySelector('section.job-board__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Job Opening Board' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.job-board__list')).toBeInTheDocument();
  });

  // ---------- Functionality (6) ----------

  it('renders_reusable_item_for_each_entry', () => {
    render(<App />);
    const entries = screen.getAllByRole('listitem');
    expect(entries).toHaveLength(4);
  });

  it('renders_items_in_order', () => {
    render(<App />);
    const entries = screen.getAllByRole('listitem');
    expect(entries.map((entry) => entry.textContent)).toEqual([
      'Role: Frontend DeveloperCompany: Nimbus TechLocation: BengaluruRemote',
      'Role: Data AnalystCompany: Harbor AnalyticsLocation: Chennai',
      'Role: Product DesignerCompany: Loop StudioLocation: PuneRemote',
      'Role: QA EngineerCompany: Brightline SystemsLocation: Hyderabad'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<JobCard role="Sample Role A" company="Sample Company A" location="Sample Location A" isRemote={true} />);
    expect(screen.getByText('Role: Sample Role A')).toBeInTheDocument();
    expect(screen.getByText('Company: Sample Company A')).toBeInTheDocument();
    expect(screen.getByText('Location: Sample Location A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<JobCard role="Sample Role B" company="Sample Company B" location="Sample Location B" isRemote={true} />);
    expect(screen.getByText('Role: Sample Role B')).toBeInTheDocument();
    expect(screen.getByText('Company: Sample Company B')).toBeInTheDocument();
    expect(screen.getByText('Location: Sample Location B')).toBeInTheDocument();
    expect(screen.queryByText('Role: Sample Role A')).not.toBeInTheDocument();
    expect(screen.queryByText('Company: Sample Company A')).not.toBeInTheDocument();
    expect(screen.queryByText('Location: Sample Location A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<JobCard role="Demo role" company="Demo company" location="Demo location" isRemote={true} />);
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<JobCard role="Demo role" company="Demo company" location="Demo location" isRemote={false} />);
    expect(screen.queryByText('Remote')).not.toBeInTheDocument();
  });
});
