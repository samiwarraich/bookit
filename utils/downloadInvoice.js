import easyinvoice from "easyinvoice";

export const downloadInvoice = async (booking) => {
  const data = {
    images: {
      logo: "https://res.cloudinary.com/samiwarraich/image/upload/v1625999925/bookit/bookit_logo_uamkio.png", //or base64
    },
    sender: {
      company: "book it.",
      address: "361M M Block Model Town Extension",
      zip: "54700",
      city: "Lahore",
      country: "Pakistan",
    },
    client: {
      company: `${booking.user.name}`,
      address: `${booking.user.email}`,
      city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
        "en-US"
      )}`,
      country: `Check Out: ${new Date(booking.checkOutDate).toLocaleString(
        "en-US"
      )}`,
    },
    information: {
      number: `${booking._id}`,
      date: `${new Date(Date.now()).toLocaleString("en-US")}`,
      "due-date": `${new Date(
        new Date(booking.checkInDate).getTime() - 1 * 24 * 60 * 60 * 1000
      ).toLocaleString("en-US")}`,
    },
    products: [
      {
        quantity: `${booking.daysOfStay}`,
        description: `${booking.room.name}`,
        "tax-rate": 0,
        price: booking.room.pricePerNight,
      },
    ],
    "bottom-notice":
      "This is auto generated Invoice of your booking on book it.",
    settings: {
      "document-title": "Booking Invoice", //Defaults to INVOICE
      currency: "USD", //See documentation 'Locales and Currency' for more info
      "tax-notation": "vat", //or gst
      "margin-top": 50,
      "margin-right": 50,
      "margin-left": 50,
      "margin-bottom": 25,
    },
    //"background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
    translate: {
      products: "Room",
      quantity: "Days of Stay",
      price: "Price/Night",
      subtotal: "Sub Total",
      total: "Total",
    },
  };

  const result = await easyinvoice.createInvoice(data);
  easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf);
};
