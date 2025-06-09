const TableHead = ({ tableColumns }: { tableColumns: string[] }) => {
  return (
    <thead>
      <tr>
        {tableColumns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
