// const LIFF_ID = "2009043945-xeksuOQk";  // ←あなたのIDに置き換え済
const LIFF_ID = "2009043945-xeksu0Qk";


async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  document.getElementById("send").addEventListener("click", async () => {

    if (!liff.isInClient()) {
      alert("LINE内で開いてください");
      return;
    }

    const msg = document.getElementById("msg").value;

    await liff.sendMessages([
      { type: "text", text: "テスト送信：" + msg }
    ]);

    alert("送信完了");
    liff.closeWindow();
  });
}

main();
