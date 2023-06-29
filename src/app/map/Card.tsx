import { Spot } from "@/types/easyDB.types";
import { formatSupaDate } from "@/utils/dateUtil";
import Image from "next/image";
import { useCallback, useState } from "react";

export function Card(props: Spot) {
  const updated_at = formatSupaDate(props.updated_at);

  const [detailOpen, setDetailOpen] = useState(true);

  const handleDetailClick = useCallback(() => {
    setDetailOpen((preDetailOpen) => !preDetailOpen);
  }, []);

  return (
    <>
      <div className="inline-block w-32 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {detailOpen ?
          <div className="w-auto">
            <Image className="rounded-t-lg" src="/download.jpg" alt=""
              width={1980}
              height={1150}
              sizes="10vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </div> : <></>
        }
        <div className="text-center">
          <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </div>
        {detailOpen ?
          <div className="text-center">
            <p className="text-xs font-normal text-gray-700 dark:text-gray-400">
              {props.address1! + props.address2!}
            </p>
          </div> : <></>
        }
        <div className="space-y-1">
          <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-1 rounded-lg">
            <summary onClick={handleDetailClick} className="text-center text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              詳細
            </summary>
            <div className="leading-6 text-slate-600 dark:text-slate-400">
              <table className="text-xs table-fixed w-full">
                <tbody>
                  <tr className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    <td className="w-1/3">住所</td>
                    <td>{props.address1! + props.address2 + props.address3}</td>
                  </tr>
                  <tr className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    <td>駐車場</td>
                    <td>{props.parking_info == 2 ? "周辺にあり" : props.parking_info == 1 ? "あり" : "不明"}</td>
                  </tr>
                  <tr className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    <td>更新日</td>
                    <td>{updated_at}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>
        <div className="">
          <a href="#" className="w-3/4 inline-flex items-center px-3 py-2 text-[0.5rem] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <div><div>場所を</div><div>確認する</div></div>
            <div>→</div>
          </a>
        </div>
      </div>
    </>
  );
};