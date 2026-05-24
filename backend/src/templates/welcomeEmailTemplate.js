export const welcomeEmailTemplate = (fullName) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to ChatApp</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background:#0a0e1a;font-family:'DM Sans',sans-serif;">

  <div style="max-width:560px;margin:40px auto;padding:20px;">

    <!-- HEADER -->
    <div style="
      background:linear-gradient(160deg,#1a0a3c,#0a1628);
      border-radius:20px 20px 0 0;
      padding:48px 40px 36px;
      text-align:center;
      border:1px solid rgba(139,92,246,0.2);
      border-bottom:none;
      position:relative;
      overflow:hidden;
    ">
      <div style="position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:320px;height:180px;background:radial-gradient(ellipse,rgba(139,92,246,0.35) 0%,transparent 70%);pointer-events:none;"></div>
      <div style="position:absolute;bottom:-20px;right:-20px;width:160px;height:160px;background:radial-gradient(ellipse,rgba(59,130,246,0.15) 0%,transparent 70%);pointer-events:none;"></div>

      <div style="display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:22px;background:linear-gradient(135deg,#7c3aed,#3b82f6);font-size:34px;margin-bottom:24px;box-shadow:0 8px 32px rgba(124,58,237,0.5);">💬</div>

      <div style="display:inline-block;background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.3);border-radius:999px;padding:5px 14px;margin-bottom:16px;">
        <span style="color:#a78bfa;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">Account Created</span>
      </div>

      <h1 style="margin:0 0 10px;font-family:'Syne',sans-serif;font-size:38px;font-weight:800;background:linear-gradient(90deg,#c4b5fd,#93c5fd);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-1px;line-height:1.1;">You're in! 🎉</h1>
      <p style="margin:0;color:#64748b;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">Welcome to ChatApp</p>
    </div>

    <!-- BODY -->
    <div style="background:#0d1117;border:1px solid rgba(255,255,255,0.06);border-top:none;border-bottom:none;padding:36px 40px;">

      <h2 style="margin:0 0 10px;font-family:'Syne',sans-serif;font-size:22px;font-weight:700;color:#f1f5f9;">Hey ${fullName} 👋</h2>
      <p style="margin:0 0 28px;color:#94a3b8;font-size:15px;line-height:1.75;">
        Your account is all set up. Jump in, start conversations, and connect with people in real time — we're glad to have you.
      </p>

      <!-- Feature cards grid -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td width="33%" style="padding-right:6px;">
            <div style="background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.2);border-radius:14px;padding:14px;text-align:center;">
              <div style="font-size:22px;margin-bottom:6px;">⚡</div>
              <div style="color:#c4b5fd;font-size:12px;font-weight:600;line-height:1.3;">Real-time<br/>Messaging</div>
            </div>
          </td>
          <td width="33%" style="padding:0 3px;">
            <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:14px;padding:14px;text-align:center;">
              <div style="font-size:22px;margin-bottom:6px;">🔒</div>
              <div style="color:#93c5fd;font-size:12px;font-weight:600;line-height:1.3;">Secure &<br/>Private</div>
            </div>
          </td>
          <td width="33%" style="padding-left:6px;">
            <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);border-radius:14px;padding:14px;text-align:center;">
              <div style="font-size:22px;margin-bottom:6px;">🌐</div>
              <div style="color:#6ee7b7;font-size:12px;font-weight:600;line-height:1.3;">Always<br/>Online</div>
            </div>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent);margin-bottom:28px;"></div>

      <!-- Info banner -->
      <div style="background:linear-gradient(135deg,rgba(124,58,237,0.12),rgba(59,130,246,0.12));border:1px solid rgba(124,58,237,0.2);border-radius:16px;padding:20px 24px;margin-bottom:28px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="52" valign="middle">
              <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#7c3aed,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:20px;">🚀</div>
            </td>
            <td valign="middle" style="padding-left:14px;">
              <div style="color:#f1f5f9;font-size:14px;font-weight:600;margin-bottom:3px;">Ready to start chatting?</div>
              <div style="color:#64748b;font-size:13px;">Click the button below to open your new inbox.</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- CTA -->
      <div style="text-align:center;">
        <a href="http://localhost:5173" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#2563eb);color:white;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;padding:15px 44px;border-radius:14px;text-decoration:none;letter-spacing:0.3px;box-shadow:0 4px 24px rgba(124,58,237,0.45);">Start Chatting →</a>
      </div>
    </div>

    <!-- FOOTER -->
    <div style="background:#080b14;border:1px solid rgba(255,255,255,0.06);border-top:1px solid rgba(255,255,255,0.04);border-radius:0 0 20px 20px;padding:22px 40px;text-align:center;">
      <p style="margin:0;color:#334155;font-size:11px;line-height:1.8;">
        You received this because you signed up for ChatApp.<br/>
        © 202 BAATCHEET· Made with ❤️
      </p>
    </div>

  </div>
</body>
</html>
  `;
};