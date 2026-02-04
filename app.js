const LIFF_ID = "2009043945-xeksuOQk";

(async () => {
  await liff.init({ liffId: LIFF_ID });

  // 毎回ログイン（同意を確実に出す）
  if (!liff.isLoggedIn()) {
    liff.login({ redirectUri: location.href });
    return;
  }

  alert("ログイン済み（同意OK）。次は送信版に戻してください。");
})();
