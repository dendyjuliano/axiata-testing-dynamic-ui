import React from "react";
import { Table } from "react-bootstrap";

const TableDifference = ({ count, type }) => {
  let arrFirst = [];
  let arrTwo = [];
  for (let index = 1; index <= count; index++) {
    arrFirst.push(index);
  }
  for (let index = 0; index < count; index++) {
    arrTwo.push(index);
  }

  return (
    <div style={{ width: 400 }}>
      <h2>Case {type}</h2>
      <Table size="sm" striped bordered hover>
        {type === "One" ? (
          <tbody>
            {arrFirst.map((rowY, indexY) => (
              <tr key={rowY}>
                {arrFirst.map((colX, indexX) =>
                  colX === rowY ? (
                    <td>{rowY}</td>
                  ) : arrFirst.length - rowY + 1 === colX ? (
                    <td>{colX}</td>
                  ) : (
                    <td></td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {arrTwo.map((rowY, indexY) => (
              <tr key={rowY}>
                {arrTwo.map((colX, indexX) =>
                  colX === rowY ? (
                    <td>
                      {rowY},{colX}
                    </td>
                  ) : arrTwo.length - rowY - 1 === colX ? (
                    <td>
                      {colX},{rowY}
                    </td>
                  ) : (
                    <td></td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default TableDifference;
