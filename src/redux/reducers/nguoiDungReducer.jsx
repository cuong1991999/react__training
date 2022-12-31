const stateDefault = [
  { taiKhoan: "user a", matKhau: "123" },
  { taiKhoan: "user b", matKhau: "456" },
];

export const arrNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state = [...state, action.payload];
      return state;
    }
    default:
      return state;
  }
};
