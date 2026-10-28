import { render, screen } from '@testing-library/react';
import App from '../App';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileCard from '../components/ProfileCard/ProfileCard';

describe('Developer Profile Dashboard (Structure & Functionality)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.profile-page')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.profile-page__header')).toBeInTheDocument();
    expect(container.querySelector('section.profile-page__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Developer Profile Dashboard' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Developer Information' })
    ).toBeInTheDocument();
  });

  it('renders_description_text', () => {
    render(<App />);
    expect(
      screen.getByText('This page demonstrates JSX rendering and the difference between functional and class components.')
    ).toBeInTheDocument();
  });

  // ---------- Functionality (6) ----------

  it('implements_functional_page', () => {
    expect(typeof ProfilePage).toBe('function');
    expect(!ProfilePage.prototype || !ProfilePage.prototype.isReactComponent).toBe(true);
  });

  it('implements_class_card', () => {
    expect(typeof ProfileCard).toBe('function');
    expect(ProfileCard.prototype && ProfileCard.prototype.isReactComponent).toBeTruthy();
  });

  it('card_renders_standalone_data', () => {
    render(<ProfileCard />);
    expect(screen.getByText('Name: Alex Johnson')).toBeInTheDocument();
    expect(screen.getByText('Role: Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Email: alex.johnson@example.com')).toBeInTheDocument();
    expect(screen.getByText('Experience: 3 years')).toBeInTheDocument();
  });

  it('card_shows_conditional_badge', () => {
    render(<ProfileCard />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders_data_in_order', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items.map((item) => item.textContent)).toEqual([
      'Name: Alex Johnson',
      'Role: Frontend Developer',
      'Email: alex.johnson@example.com',
      'Experience: 3 years'
    ]);
  });

  it('no_interactive_elements', () => {
    render(<App />);
    expect(screen.queryAllByRole('button')).toHaveLength(0);
    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });
});
