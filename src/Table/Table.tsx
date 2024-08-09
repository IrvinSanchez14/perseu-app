import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { IData, StatusType } from "../utils/const"

export interface IHead {
  name: string,
  sort: boolean
}

interface ITable {
  header: IHead[]
  data: IData[]
  sort: (head: IHead) => void
}

const Table = ({
  header,
  data,
  sort
}: ITable) => {

  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              {header.map((head) => (
                <th className="px-4 py-3" key={head.name}>
                  <div className="flex justify-between">
                    <span>{head.name}</span>
                    <span className="cursor-pointer" onClick={() => sort(head)}>{!head.sort ? (
                      <ChevronUpIcon className="size-6 text-black-500" />
                    ) : (
                      <ChevronDownIcon className="size-6 text-black-500" />
                    )}</span>
                  </div>

                </th>
              ))}

            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => {
              return (
                <tr className="text-gray-700" key={index}>
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">{item.favoriteFood}</td>
                  <td className="px-4 py-3 text-xs border">
                    {item.favoriteMovie}
                  </td>

                  <td className="px-4 py-3 text-sm border">
                    {item.status === 'Inactive' ? (<span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">{item.status as StatusType}</span>) : (<span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.status}</span>)}
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export { Table }