document.getElementById("send").addEventListener("click", async () => {
  // LINEアプリ外なら止める（PCブラウザ/スマホChromeなど）
  if (!liff.isInClient()) {
    alert("LINEアプリ内で開いてください");
    return;
  }

  const msg = document.getElementById("msg").value.trim();
  if (!msg) {
    alert("メッセージを入力してください");
    return;
  }

  try {
    await liff.sendMessages([
      { type: "text", text: "テスト送信: " + msg }
    ]);

    alert("送信完了");
    liff.closeWindow();
  } catch (e) {
    console.error(e);
    alert("送信失敗: " + (e?.message ?? e));
  }
});
