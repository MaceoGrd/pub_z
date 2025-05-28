import SectionTitle from '../components/SectionTitle';
import menuData from '../data/menu_bar.json';

console.log('✅ testData:', menuData);

export default function Menu() {
  const renderTable = ({ format, rows }) => (
    <table className="table-auto w-full text-left mb-4">
      <thead>
        <tr className="border-b">
          <th className="py-2 pr-4">Nom</th>
          {format.map((size, idx) => (
            <th key={idx} className="py-2 px-2">{size}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, idx) => (
          <tr key={idx} className="border-b">
            <td className="py-1 pr-4">{item.Nom}</td>
            {format.map((size, i) => (
              <td key={i} className="py-1 px-1">
                {item[size] ? `${item[size].toFixed(2)}€` : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderItems = (items, level = 0) => {
    if (!items || typeof items !== 'object') return null;

    return Object.entries(items).map(([key, value], idx) => {
      if (value && value.format && value.rows) {
        // Cas tableau
        return (
          <div key={key + idx} className="mb-8">
            <SectionTitle align={idx % 2 === 0 ? 'left' : 'right'}>{key}</SectionTitle>
            {renderTable(value)}
          </div>
        );
      } else if (typeof value === 'object') {
        // Cas sous-groupe (récursif)
        return (
          <div key={key + idx} className="mb-6 ml-2">
            {level > 0 && (
              <SectionTitle align={idx % 2 === 0 ? 'left' : 'right'}>{key}</SectionTitle>
            )}
            {renderItems(value, level + 1)}
          </div>
        );
      } else {
        // Cas item simple
        return (
          <li key={key + idx} className="flex justify-between border-b py-1">
            <span>{key}</span>
            <span>
              {typeof value === 'number'
                ? `${value.toFixed(2)}€`
                : value ?? '–'}
            </span>
          </li>
        );
      }
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Notre carte</h1>
      {Object.entries(menuData).map(([category, content], i) => (
        <div key={category + i} className="mb-12">
          <SectionTitle align={i % 2 === 0 ? 'left' : 'right'}>{category}</SectionTitle>
          <div className="mt-4">
            <ul>{renderItems(content)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}
