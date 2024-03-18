import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DashTableCard({ title, linkTo, columnDefs, rows }) {
  return (
    <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between items-center p-3 text-sm font-semibold">
        <h1 className="text-center">{title}</h1>
        <Button outline gradientDuoTone="purpleToPink">
          <Link to={linkTo}>See all</Link>
        </Button>
      </div>
      <Table hoverable>
        <Table.Head>
          {columnDefs.map((columnDef, index) => (
            <Table.HeadCell
              key={index}
              className={`${columnDef.className ? columnDef.className : ""}`}
            >
              {columnDef.header}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {rows.map((row, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700">
              {row.map((cell, index) => (
                <Table.Cell key={index}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
