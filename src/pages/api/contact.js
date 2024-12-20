// contact.js
import nodemailer from 'nodemailer';

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    // Use App Password, not your regular Gmail password
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Email templates
const emailTemplates = {
    adminNotification: (data) => ({
      subject: `✨ New Portfolio Contact: ${data.name}`,
      text: `
        New portfolio contact form submission:
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0f172a;">
            <div style="width: 100%; max-width: 650px; margin: 0 auto; padding: 20px; font-family: 'Inter', sans-serif;">
              <!-- Main Container -->
              <div style="background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); padding: 3px; border-radius: 24px; margin-bottom: 20px;">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%); padding: 40px; border-radius: 22px 22px 0 0; text-align: center;">
                  <div style="background: rgba(255,255,255,0.1); display: inline-block; padding: 12px 25px; border-radius: 50px; margin-bottom: 20px;">
                    <span style="color: #ffffff; font-size: 14px; font-weight: 500;">NEW PORTFOLIO INQUIRY</span>
                  </div>
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">New Message Received</h1>
                </div>
                
                <!-- Content Container -->
                <div style="background-color: #1e293b; padding: 40px; border-radius: 0 0 22px 22px;">
                  <!-- Sender Profile -->
                  <div style="background: rgba(255,255,255,0.03); border-radius: 16px; padding: 25px; margin-bottom: 30px;">
                    <div style="display: flex; align-items: center;">
                      <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px;">
                        <span style="color: #ffffff; font-size: 24px; font-weight: bold;">${data.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">${data.name}</h2>
                        <p style="margin: 5px 0 0; color: #60a5fa; font-size: 15px;">${data.email}</p>
                      </div>
                    </div>
                  </div>
  
                  <!-- Message Section -->
                  <div style="background: rgba(255,255,255,0.03); border-radius: 16px; padding: 30px; margin-bottom: 30px;">
                    <h3 style="margin: 0 0 20px; color: #94a3b8; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message Content</h3>
                    <p style="margin: 0; color: #e2e8f0; line-height: 1.8; font-size: 16px;">${data.message}</p>
                  </div>
  
                  <!-- Quick Actions -->
                  <div style="display: flex; gap: 15px; margin-bottom: 30px;">
                    <a href="mailto:${data.email}" style="flex: 1; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 12px; text-align: center; font-weight: 500; font-size: 15px;">Reply Now</a>
                    <a href="#" style="flex: 1; background: rgba(255,255,255,0.05); color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 12px; text-align: center; font-weight: 500; font-size: 15px;">View in CRM</a>
                  </div>
  
                  <!-- Footer -->
                  <div style="text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <p style="margin: 0; color: #64748b; font-size: 14px;">Received via Portfolio Contact Form • ${new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    }),
    
    userConfirmation: (data) => ({
      subject: '🌟 Thank you for connecting with me!',
      text: `
        Dear ${data.name},
        Thank you for reaching out through my portfolio. I've received your message and will get back to you soon.
        Your message: "${data.message}"
        Best regards,
        Tahsin Faiyaz (Sayor)
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0f172a;">
            <div style="width: 100%; max-width: 650px; margin: 0 auto; padding: 20px; font-family: 'Inter', sans-serif;">
              <!-- Glass Card Container -->
              <div style="background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); padding: 3px; border-radius: 24px;">
                <!-- Header with Personal Brand -->
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%); padding: 50px 40px; border-radius: 22px 22px 0 0; text-align: center;">
                  <div style="margin-bottom: 25px;">
                    <!-- Replace with your actual logo or personal brand mark -->
                    <div style="width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; overflow: hidden; box-shadow: 0 0 20px rgba(255,255,255,0.2);">
                    <img src="https://i.imgur.com/5xPLfuM.jpeg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Tahsin Faiyaz (Sayor)</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0; font-size: 16px;">Full-Stack Developer</p>
                  </div>
                </div>
                
                <!-- Main Content -->
                <div style="background-color: #1e293b; padding: 40px; border-radius: 0 0 22px 22px;">
                  <!-- Thank You Message -->
                  <div style="text-align: center; margin-bottom: 40px;">
                    <h2 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 15px;">Thank You for Connecting!</h2>
                    <p style="color: #94a3b8; font-size: 16px; line-height: 1.8; margin: 0;">
                      I appreciate you taking the time to reach out. I'll review your message and get back to you as soon as possible.
                    </p>
                  </div>
  
                  <!-- Message Summary -->
                  <div style="background: rgba(255,255,255,0.03); border-radius: 16px; padding: 30px; margin: 30px 0;">
                    <h3 style="margin: 0 0 20px; color: #94a3b8; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Your Message</h3>
                    <p style="margin: 0; color: #e2e8f0; line-height: 1.8; font-size: 16px; font-style: italic;">${data.message}</p>
                  </div>
  
                  <!-- Portfolio Showcase -->
                  <div style="background: linear-gradient(145deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%); border-radius: 16px; padding: 30px; margin: 30px 0; text-align: center;">
                    <h3 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 20px;">While You Wait...</h3>
                    <p style="color: #94a3b8; font-size: 15px; line-height: 1.6; margin: 0 0 25px;">
                      Explore more of my work and stay connected through my social channels
                    </p>
                    <div style="display: flex; gap: 15px; justify-content: center;">
                      <a href="#" style="background: rgba(255,255,255,0.05); color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 12px; font-weight: 500; font-size: 14px;">Portfolio</a>
                      <a href="#" style="background: rgba(255,255,255,0.05); color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 12px; font-weight: 500; font-size: 14px;">LinkedIn</a>
                      <a href="#" style="background: rgba(255,255,255,0.05); color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 12px; font-weight: 500; font-size: 14px;">GitHub</a>
                    </div>
                  </div>
  
                  <!-- Footer -->
                  <div style="text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">
                    <p style="margin: 0 0 15px; color: #64748b; font-size: 14px;">Best regards,</p>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">Tahsin Faiyaz (Sayor)</p>
                    <p style="margin: 10px 0 0; color: #64748b; font-size: 14px;">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })
  };

// Contact API handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      throw new Error('Email configuration is missing');
    }

    // Send notification to admin
    const adminTemplate = emailTemplates.adminNotification({ name, email, message });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      ...adminTemplate,
    });

    // Send confirmation to user
    const userTemplate = emailTemplates.userConfirmation({ name, email, message });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      ...userTemplate,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully',
    });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return res.status(500).json({
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}