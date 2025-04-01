import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-4">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="bg-gray-900 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold text-center uppercase">Bộ lọc</h2>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-gray-900 font-medium mb-3">Giá sản phẩm</h3>
            <div className="space-y-2">
              <label className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded mr-3" />
                <span>Giá dưới 500.000đ</span>
              </label>
              <label className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded mr-3" />
                <span>500.000đ - 1.000.000đ</span>
              </label>
              <label className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded mr-3" />
                <span>1.000.000đ - 2.000.000đ</span>
              </label>
              <label className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded mr-3" />
                <span>2.000.000đ - 5.000.000đ</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
