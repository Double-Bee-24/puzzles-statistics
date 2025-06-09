const TableBody = ({
  tableData,
}: {
  tableData: { id: number; created_at: Date; name: string }[];
}) => {
  return (
    <tbody>
      {tableData.map((row) => (
        <tr key={row.id}>
          <td>{row.name}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
