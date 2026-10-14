interface Row {
  code: string;
  name: string;
  teachers: string;
}

export function GuideTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>รหัสวิชา</th>
              <th>ชื่อรายวิชา</th>
              <th>อาจารย์ที่สอน</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.code}-${i}`}>
                <td>{r.code}</td>
                <td className="col-name">{r.name}</td>
                <td>{r.teachers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
