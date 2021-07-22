module.exports = {
  // reactStrictMode: true,
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
    DB_URI:
      "mongodb+srv://admin:samiwarraich@cluster.eggyf.mongodb.net/bookit?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51JC0mfCKuNvgJMCMPS2zhjF60lpZBIiyxdc0ceIpAO6vh4krdDz936sSP8JBXlZBOc6nWSdfI81gI3DpMEWqEUpv004TBH9NuX",
    STRIPE_SECRET_KEY:
      "sk_test_51JC0mfCKuNvgJMCMo8eSkSkuro2xzVfSZnEvt94coQGCbYAORDOEdiE6gQD4fc9GLK2MKM29JBs16ZGMCryZ16Sg004vZKdG1b",
    STRIPE_WEBHOOK_SECRET: "whsec_DyptUn4KhyqyQMv5xe8fpqisg8VCf4JC",

    CLOUDINARY_CLOUD_NAME: "samiwarraich",
    CLOUDINARY_API_KEY: "114511913891818",
    CLOUDINARY_API_SECRET: "v9CuVX06uiusC4okZAccTw4x-A0",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "0bf9e4fc7b9e4c",
    SMTP_PASSWORD: "60ec3d7ac1fb9b",
    SMTP_FROM_NAME: "BookIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",

    NEXTAUTH_URL: "https://bookit-sw.vercel.app",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
