import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import styles from "./Table.module.scss";

const Table = ({
  tableName,
  tableData,
}: {
  tableName: string;
  tableData: { id: number; created_at: Date; name: string }[];
}) => {
  if (!tableData || tableData.length === 0) {
    return <p>Завантаження</p>;
  }

  // Filter database related columns
  const tableColumns = Object.keys(tableData[0]).filter(
    (column) => column !== "id" && column !== "created_at"
  );

  return (
    <>
      <table className={styles.table}>
        <caption>{tableName}</caption>
        <TableHead tableColumns={tableColumns} />
        <TableBody tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
