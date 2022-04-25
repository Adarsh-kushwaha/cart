const ItemList = ({ data, removeItem, changeQty }) => {
  return (
    <div>
      {data.map((p) => {
        return (
          <div className="w-[700px] flex flex-row gap-4">
            <div className="flex flex-row justify-between w-[400px]">
              <div className="flex flex-row items-center gap-2">
                <img src={p.img_url} alt={p.name} />
                <p>{p.name}</p>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  removeItem(p.id);
                }}
              >
                X
              </div>
            </div>
            <div className="flex flex-row justify-between items-center font-bold text-xl gap-4 w-[100px]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  changeQty(p.id, 1);
                }}
              >
                +
              </div>
              <div>{p.qty}</div>
              <div
                className="cursor-pointer"
                onClick={() => (p.qty > 0 ? changeQty(p.id, -1) : null)}
              >
                -
              </div>
            </div>
            <div className="flex flex-row items-center w-[50px] text-xl font-bold">
              ${p.price}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
