// Performance Optimized APP
import React, { useCallback, useMemo, useState } from "react";
import ItemList from "./ItemList";

const POA = () => {
  const [items] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = useCallback((id) => {
    console.log("handleItemClick");
    setSelectedItemId(id);
  }, []);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === selectedItemId);
  }, [selectedItemId, items]);

  return (
    <div>
      <ItemList items={items} onItemClick={handleItemClick} />
      {selectedItem && (
        <p>
          Selected Item: {selectedItem.name} (ID: {selectedItem.id})
        </p>
      )}
    </div>
  );
};

export default POA;
