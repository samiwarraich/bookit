import easyinvoice from "easyinvoice";

export const downloadInvoice = async (booking) => {
  const data = {
    documentTitle: "Booking Invoice", //Defaults to INVOICE
    currency: "USD", //See documentation 'Locales and Currency' for more info
    taxNotation: "vat", //or gst
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: "https://res.cloudinary.com/samiwarraich/image/upload/v1625999925/bookit/bookit_logo_uamkio.png", //or base64
    //"background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64 //img or pdf
    sender: {
      company: "Book IT",
      address: "361M M Block Model Town Extension",
      zip: "54700",
      city: "Lahore",
      country: "Pakistan",
    },
    client: {
      company: `${booking.user.name}`,
      address: `${booking.user.email}`,
      zip: "",
      city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
        "en-US"
      )}`,
      country: `Check Out: ${new Date(booking.checkOutDate).toLocaleString(
        "en-US"
      )}`,
    },
    invoiceNumber: `${booking._id}`,
    invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
    products: [
      {
        quantity: `${booking.daysOfStay}`,
        description: `${booking.room.name}`,
        tax: 0,
        price: booking.room.pricePerNight,
      },
    ],
    bottomNotice: "This is auto generated Invoice of your booking on Book IT",
    translate: {
      //"invoiceNumber": "Factuurnummer",
      //"invoiceDate": "Factuurdatum",
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
