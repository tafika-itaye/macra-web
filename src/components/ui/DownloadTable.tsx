import { Download } from "@/data/downloads";

export default function DownloadTable({ downloads }: { downloads: Download[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#E30613] text-white">
            <th className="text-left px-4 py-3 font-medium">Title</th>
            <th className="text-left px-4 py-3 font-medium">Category</th>
            <th className="px-4 py-3 font-medium text-center w-32">Download</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((d, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-3 text-gray-800">{d.title}</td>
              <td className="px-4 py-3 text-gray-500">{d.category}</td>
              <td className="px-4 py-3 text-center">
                <a
                  href={`/downloads/${d.filename}`}
                  download
                  className="inline-block bg-[#E30613] text-white text-xs px-3 py-1.5 rounded hover:bg-[#E30613] transition-colors"
                  aria-label={`Download ${d.title}`}
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
