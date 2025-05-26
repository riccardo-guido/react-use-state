import { useState } from "react";
import languages from "../data/languages";

export default function Main() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedLanguage = languages.find((lang) => lang.id === selectedId);

  return (
    <main>
      <div className="container">
        <div className="d-flex gap-1">
          {languages.map((lang) => (
            <button
              className="btn btn-primary"
              key={lang.id}
              onClick={() => {
                setSelectedId(lang.id);
              }}
            >
              {lang.title}
            </button>
          ))}
        </div>

        <div className="card mt-3">
          <div className="card-header">{selectedLanguage.title}</div>
          <div className="card-body">{selectedLanguage.description}</div>
        </div>
      </div>
    </main>
  );
}
