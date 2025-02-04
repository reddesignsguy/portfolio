type CustomTableProps = {
  headers: string[]; // An array of strings for column headers
  data: string[][]; // A 2D array of strings for table data (rows and cells)
};

// const headers: string[] = ["Game Dev", "Web Dev"];
// const data: string[][] = [
//   ["C#, C++, Lua", "Java, Python, Typescript, Javascript"],
//   ["Unity, ROBLOX, OpenFrameworks", "React, Express, Node, PostgreSQL, MySQL"],
// ];

export default function CustomTable({ headers, data }: CustomTableProps) {
  return (
    <div className="max-w-3xl mx-auto my-3">
      <table className="table-auto border-collapse border-[rgb(134,51,51)] w-full">
        {/* Table Head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={` border-gray-300 px-4 py-2 text-[white]  text-2xl bg-[rgb(35,35,35)]
                 `}
              >
                <div className="flex justify-center items-center">
                  <div
                    className={`w-4 h-4  mr-2 rounded-md ${
                      index == 0
                        ? "bg-[rgba(255,102,203,1)]"
                        : "bg-[rgba(64,195,255,1)]"
                    }`}
                  ></div>
                  {header}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={` border-#f0f0f0-300 px-4 py-2 bg-[rgb(13,12,13)]`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
