const LIFF_ID = "2009043945-xeksuOQk"; // O と Q が大文字

window.addEventListener("load", async () => {
  try {
    if (!window.liff) {
      alert("LIFF SDK が読み込めていません（liff が undefined）");
      return;
    }

    await liff.init({ liffId: LIFF_ID });

    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    document.getElementById("send").addEventListener("click", async () => {
      try {
        if (!liff.isInClient()) {
          alert("LINE内ブラウザで開いてください（外部ブラウザからは送信不可）");
          return;
        }

        const msg = document.getElementById("msg").value || "";
        await liff.sendMessages([{ type: "text", text: "テスト送信: " + msg }]);
        alert("送信完了");
        liff.closeWindow();
      } catch (e) {
        alert("送信失敗: " + (e?.message || e));
        console.error(e);
      }
    });

  } catch (e) {
    alert("初期化失敗: " + (e?.message || e));
    console.error(e);
  }
});
