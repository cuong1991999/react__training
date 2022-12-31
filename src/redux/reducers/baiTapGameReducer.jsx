const stateDefault = {
  arrXucXac: [
    { img: "./img/1.png", diem: 1 },
    { img: "./img/2.png", diem: 2 },
    { img: "./img/3.png", diem: 3 },
    // { img: "./img/4.png", diem: 4 },
    // { img: "./img/5.png", diem: 5 },
    // { img: "./img/6.png", diem: 6 },
  ],
  diemCuoc: true, // true: tai, false:xiu
  soBanThang: 0,
  soLanCuoc: 0,
};

export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      //   return { ...state, diemCuoc: action.payload };
      let newState = { ...state };
      newState.diemCuoc = action.payload;
      return newState;
    }
    case "PLAY_GAME": {
      let arrXXNN = [];
      let newState = { ...state };
      for (let i = 0; i < 3; i++) {
        let soNN = Math.floor(Math.random() * 6) + 1;
        let xxNN = { img: `./img/${soNN}.png`, diem: soNN };
        arrXXNN.push(xxNN);
      }
      let diem = 0;
      for (let xx of arrXXNN) {
        diem += xx.diem;
      }
      if (
        (diem > 11 && newState.diemCuoc == true) ||
        (diem <= 11 && newState.diemCuoc == false)
      ) {
        newState.soBanThang += 1;
      }
      newState.arrXucXac = arrXXNN;
      newState.soLanCuoc += 1;
      return newState;
    }

    default:
      return state;
  }
};
