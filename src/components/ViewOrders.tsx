
"use client"
import 'flowbite';

export function ViewOrders({ orders, userSessionId }: { orders: { transactionID: string | null; userId: string | null; date: Date | null; purchase_info: JSON | null; total_price: number | null; status: string | null; expected_date: Date | null; }[], userSessionId: string }) {
  return (
    <>
      <div className="table-container">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3">
              Date of Order
              </th>
              <th scope="col" className="px-6 py-3">
                Purchase Info
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Expected Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={order.transactionID}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {order.transactionID}
                </td>
                <td className="px-6 py-4">
                {typeof order.date === 'object' ? order.date?.toLocaleDateString() : order.date}
                </td>
                <td className="px-6 py-4">
                {order.purchase_info && JSON.stringify(JSON.parse(JSON.stringify(order.purchase_info))) === '[]' ? (
                    <div>
                      No purchase info provided
                    </div>
                  ) : (
                    JSON.parse(JSON.stringify(order.purchase_info)).map((item: any, index: number) => (
                      <div key={index}>
                        {item.quantity}x {item.productName}
                      </div>
                    ))
                  )}
                </td>
                <td className="px-6 py-4">
                  {order.total_price}
                </td>
                <td className="px-6 py-4">
                {typeof order.expected_date === 'object' ? order.expected_date?.toLocaleDateString() : order.expected_date}

                </td>
                <td className="px-6 py-4">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}