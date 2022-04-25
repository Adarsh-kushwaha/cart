import { useState, useEffect } from "react";

const Order = ({ data }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [sp, setSp] = useState(0);
  const specialDiscountType = "fiction";

  useEffect(() => {
    let totalPrice = 0;
    let discountPrice = 0;
    let specialDiscountPrice = 0;
    data.map((p) => {
      totalPrice += p.price * p.qty;
      discountPrice += (p.price * p.qty * p.discount) / 100;
      if (p.type === specialDiscountPrice) {
        specialDiscountPrice += p.price * p.qty * 0.25;
      }
      setTotal(totalPrice);
      setDiscount(discountPrice);
      setSp(specialDiscountPrice);
    });
  }, [data]);

  return (
    <div className="flex flex-col gap-4 font-semibold text-gray-600">
      <div>total items({data.length})</div>
      <div>total Price : ${total}</div>
      <div>Discount Price : ${discount}</div>
      <div>Special Discount Type: ${sp}</div>
      <div className="p-2 bg-gray-500 text-white">
        TOTAL : ${total - discount - sp}
      </div>
    </div>
  );
};

export default Order;
