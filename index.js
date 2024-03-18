import { ref } from "https://unpkg.com/vue@3/dist/vue.global.js";

const sideMenuStatus = ref(true);

const pageMarginLeft = (status) =>
  status ? "margin-left: -230px" : "margin-left: 0px";

const toggleStatus = (status) => !status;

window.onload = () => {
  // toggleボタン
  const sideMenuToggle = document.getElementById("toggle");
  // メインコンテンツを囲むmain要素
  const page = document.getElementsByTagName("main")[0];
  // 表示状態 trueで表示中 falseで非表示

  // ボタンクリック時のイベント
  sideMenuToggle.addEventListener("click", () => {
    // 表示状態を判定
    page.value.style.cssText = pageMarginLeft(sideMenuStatus.value);

    sideMenuStatus.value = toggleStatus(sideMenuStatus.value);
  });
};
