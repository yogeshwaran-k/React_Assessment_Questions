import { render, screen } from '@testing-library/react';
import App from '../App';
import WeatherListPage from '../pages/WeatherListPage/WeatherListPage';
import ForecastCard from '../components/ForecastCard/ForecastCard';

describe('Weather Forecast List (Props, Reusable Components, Lists & Conditional Rendering)', () => {
  // ---------- Structure (4) ----------

  it('renders_main_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main.weather-list')).toBeInTheDocument();
  });

  it('renders_header_section', () => {
    const { container } = render(<App />);
    expect(container.querySelector('header.weather-list__header')).toBeInTheDocument();
    expect(container.querySelector('section.weather-list__content')).toBeInTheDocument();
  });

  it('renders_heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Weather Forecast List' })
    ).toBeInTheDocument();
  });

  it('renders_list_container', () => {
    const { container } = render(<App />);
    expect(container.querySelector('ul.weather-list__list')).toBeInTheDocument();
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
      'City: ChennaiCondition: ThunderstormsTemperature: 29CRainy',
      'City: DelhiCondition: Clear SkyTemperature: 22C',
      'City: MumbaiCondition: Heavy ShowersTemperature: 27CRainy',
      'City: BengaluruCondition: Partly CloudyTemperature: 24C'
    ]);
  });

  it('item_component_reads_given_props', () => {
    render(<ForecastCard city="Sample City A" condition="Sample Condition A" temperature="Sample Temperature A" isRainy={true} />);
    expect(screen.getByText('City: Sample City A')).toBeInTheDocument();
    expect(screen.getByText('Condition: Sample Condition A')).toBeInTheDocument();
    expect(screen.getByText('Temperature: Sample Temperature A')).toBeInTheDocument();
  });

  it('item_component_updates_with_new_props', () => {
    render(<ForecastCard city="Sample City B" condition="Sample Condition B" temperature="Sample Temperature B" isRainy={true} />);
    expect(screen.getByText('City: Sample City B')).toBeInTheDocument();
    expect(screen.getByText('Condition: Sample Condition B')).toBeInTheDocument();
    expect(screen.getByText('Temperature: Sample Temperature B')).toBeInTheDocument();
    expect(screen.queryByText('City: Sample City A')).not.toBeInTheDocument();
    expect(screen.queryByText('Condition: Sample Condition A')).not.toBeInTheDocument();
    expect(screen.queryByText('Temperature: Sample Temperature A')).not.toBeInTheDocument();
  });

  it('conditionally_renders_badge_when_true', () => {
    render(<ForecastCard city="Demo city" condition="Demo condition" temperature="Demo temperature" isRainy={true} />);
    expect(screen.getByText('Rainy')).toBeInTheDocument();
  });

  it('conditionally_hides_badge_when_false', () => {
    render(<ForecastCard city="Demo city" condition="Demo condition" temperature="Demo temperature" isRainy={false} />);
    expect(screen.queryByText('Rainy')).not.toBeInTheDocument();
  });
});
