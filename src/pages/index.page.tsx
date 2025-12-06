import { MultiSelect } from "@Shared";
import "./index.page.scss";

const options = [
  { label: "Education 🎓", value: "edu" },
  { label: "Art 🎨", value: "art" },
  { label: "Sport ⚽", value: "sport" },
  { label: "Games 🎮", value: "games" },
  { label: "Health 💊", value: "health" },
];

export default function IndexPage() {
  return (
    <div className="showcase">
      <div className="showcase__container">
        <h1 className="showcase__title">MultiSelect Showcase</h1>

        <div className="showcase__item">
          <label>Default</label>
          <MultiSelect label="Default" options={options} />
        </div>

        <div className="showcase__item">
          <label>No Record</label>
          <MultiSelect label="Default" options={[]} />
        </div>

        <div className="showcase__item">
          <label>With Placeholder</label>
          <MultiSelect
            label="Placeholder Test"
            placeholder="Choose something..."
            options={options}
          />
        </div>

        <div className="showcase__item">
          <label>Disabled</label>
          <MultiSelect label="Disabled" options={options} disabled />
        </div>

        <div className="showcase__item">
          <label>Error State</label>
          <MultiSelect
            label="Error Example"
            options={options}
            error="You must choose at least 1 option"
          />
        </div>

        <div className="showcase__item">
          <label>Loading State</label>
          <MultiSelect label="Loading" options={options} loading />
        </div>

        <div className="showcase__item">
          <label>Preselected Values</label>
          <MultiSelect
            label="Preselected"
            options={options}
            value={[options[0], options[2]]}
          />
        </div>
      </div>
    </div>
  );
}
