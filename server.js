import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/enquiry', async (req, res) => {
  const form = req.body;
  try {
    await transporter.sendMail({
      from: `"Venom Group Website" <${process.env.SMTP_USER}>`,
      to: 'info@venomgroup.co.uk',
      replyTo: form.email,
      subject: `New Wholesale Enquiry — ${form.companyName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f5f5f5">
          <div style="background:#1B5E20;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">New Wholesale Enquiry</h1>
            <p style="color:#81C784;margin:4px 0 0;font-size:13px">Submitted via venomgroup.co.uk</p>
          </div>
          <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e0e0e0">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666;width:40%">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.fullName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Company</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.companyName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.email}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Business Type</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.businessType}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Weekly Order</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.estimatedWeeklyOrder}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Delivery Area</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.deliveryLocation}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#666">Products</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-weight:600;color:#222">${form.productsRequired?.join(', ') || 'None specified'}</td></tr>
              ${form.message ? `<tr><td style="padding:10px 0;color:#666;vertical-align:top">Message</td><td style="padding:10px 0;color:#222">${form.message}</td></tr>` : ''}
            </table>
          </div>
        </div>
      `
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
